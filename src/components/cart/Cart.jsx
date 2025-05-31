
import './cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../redux/cartSlice';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    address: '',
    contact: ''
  });

  const [user, setUser] = useState(null);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const saveCartToBackend = async (updatedCart) => {
    if (!user) return;
    try {
      await fetch('http://localhost:3000/api/cart/saveCart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, cartItems: updatedCart }),
      });
    } catch (error) {
      console.error("Error saving cart:", error);
      toast.error("Failed to sync cart with server.");
    }
  };

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    dispatch(setCart(updatedCart));
    saveCartToBackend(updatedCart);
    toast.info("Item removed from cart.");
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;
      try {
        const res = await fetch(`http://localhost:3000/api/cart/getCart/${user.email}`);
        const data = await res.json();
        if (data.success && data.cart) {
          dispatch(setCart(data.cart));
        }
      } catch (err) {
        console.error("Failed to fetch cart:", err);
        toast.error("Failed to load cart.");
      }
    };

    if (user) fetchCart();
  }, [dispatch, user]);

  const validateOrder = () => {
    if (!user) {
      toast.warn("Please login to proceed.");
      return false;
    }
    if (cartItems.length === 0) {
      toast.warn("Your cart is empty.");
      return false;
    }
    if (!/^\d{10}$/.test(orderDetails.contact)) {
      toast.warn("Enter a valid 10-digit contact number.");
      return false;
    }
    return true;
  };

  const placeOrder = async (paymentMethod, paymentStatus) => {
    const orderData = {
      userEmail: user.email,
      name: orderDetails.name,
      address: orderDetails.address,
      contact: orderDetails.contact,
      items: cartItems,
      date: new Date().toISOString(),
      paymentMethod,
      paymentStatus
    };

    try {
      const res = await fetch('http://localhost:3000/api/order/placeOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Order placed successfully!");
        dispatch(setCart([]));
        await saveCartToBackend([]);
        setOrderDetails({ name: '', address: '', contact: '' });
      } else {
        toast.error(data.message || "Failed to place order.");
      }
    } catch (err) {
      console.error("Order failed:", err);
      toast.error("Something went wrong. Try again later.");
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (!validateOrder()) return;
    placeOrder("Cash on Delivery", "Pending");
  };

  const handlePhonePePayment = async () => {
  if (!validateOrder()) return;

  const orderId = 'ORDER_' + new Date().getTime();
  
  // Calculate total amount (assuming `price.hourly` exists and represents price)
  const totalAmount = cartItems.reduce((sum, item) => {
    const price = item.pricing || item.price?.hourly || 0;
    return sum + parseFloat(price);
  }, 0);

  try {
    const response = await fetch('http://localhost:3000/api/payment/initiate-phonepe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: totalAmount,
        userEmail: user.email,
        orderId,
        name: orderDetails.name,
        address: orderDetails.address,
        contact: orderDetails.contact,
        items: cartItems
      }),
    });

    const data = await response.json();

    if (data.success && data.redirectUrl) {
      // Save initial order before redirecting (optional, depending on backend handling)
      await placeOrder("PhonePe", "Initiated");

      // Redirect to PhonePe payment page
      window.location.href = data.redirectUrl;
    } else {
      toast.error("Payment initiation failed.");
    }
  } catch (error) {
    console.error("PhonePe Payment Error:", error);
    toast.error("Error initiating PhonePe payment.");
  }
};

  return (
    <>
      <div className="cart-container">
        <h2 className="cart-heading">🛒 Cart Details</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item fade-in">
                <img src={item.image} alt={item.name || 'maid image'} className="cart-image" />
                <div className="cart-details">
                  <h4>{item.name || 'Unnamed Maid'}</h4>
                  {item.type && <p>Type: {item.type}</p>}
                  {item.pricing && <p>Pricing: {item.pricing}</p>}
                  {item.price?.hourly && !item.pricing && (
                    <p>Pricing: ₹{item.price.hourly}/hour</p>
                  )}
                  {item.availability && <p>Availability: {item.availability}</p>}
                  {item.description && <p>Description: {item.description}</p>}
                  {item.location && <p>Location: {item.location}</p>}
                  {item.categories && <p>Categories: {item.categories}</p>}
                  <button className="delete-button" onClick={() => handleDelete(index)}>
                    ✖ Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cartItems.length > 0 && (
          <div className="order-form-container">
            <h3>Place Your Order</h3>
            <form onSubmit={handleOrderSubmit} className="order-form">
              <input
                type="text"
                placeholder="Full Name"
                value={orderDetails.name}
                onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Delivery Address"
                value={orderDetails.address}
                onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={orderDetails.contact}
                onChange={(e) => setOrderDetails({ ...orderDetails, contact: e.target.value })}
                required
              />
              <button type="submit" className="cash-button">✅ Cash on Delivery</button>
            </form>

            <div className="payment-options">
              <h4>OR Pay Using</h4>
              <div className="payment-buttons">
                <button type="button" className="phonepe-button" onClick={handlePhonePePayment}>
                  <img src="./phonepe.png" alt="PhonePe" className="phonepe-logo" />
                  Pay with PhonePe
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Cart;
