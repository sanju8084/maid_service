
import  { useEffect, useState } from 'react';
import '../orderHistory/orderHistory.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(`http://localhost:3000/api/order/history/${user.email}`);
        const data = await res.json();
        if (data.success) {
          setOrders(data.orders);
        } else {
          toast.error(data.message || "Failed to fetch orders.");
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        toast.error("Something went wrong.");
      }
    };

    if (user) fetchOrders();
  }, [user]);

  return (
    <div className="order-history-container">
      <h2 className="order-history-title">📜 Your Order History</h2>
      {orders.length === 0 ? (
        <p className="order-empty">No past orders found.</p>
      ) : (
        <ul className="order-list">
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <div>
                <h4>Order #{index + 1}</h4>
                <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
                <p><strong>Status:</strong> {order.status || 'Pending'}</p>
                <p><strong>Name:</strong> {order.name}</p>
                <p><strong>Address:</strong> {order.address}</p>
                <p><strong>Contact:</strong> {order.contact}</p>
                <h5>Items:</h5>
                <ul>
                  {order.items.map((item, i) => (
  <li key={i} className="item-detail">
     <strong>Name:</strong> {item.name || 'Unnamed'}<br />
     <strong>Categories:</strong> {item.Category || 'N/A'}<br />
     <strong>Pricing:</strong> {item.pricing || item.price?.hourly || 'N/A'}<br />
  </li>
))}
   </ul>
              </div>
            </li>
          ))}
        </ul>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default OrderHistory;
