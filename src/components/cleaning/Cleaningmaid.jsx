
import './cleaning.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Cleaningmaid = () => {
  const maidList = [
    {
      id: 21,
      name: 'Aarti Devi',
      price: { hourly: 50, daily: 400, monthly: 8000 },
      availability: 'Full-time',
      categories: ['House Cleaning', 'Utensils'],
      image: 'cleaning1.png',
    },
    {
      id: 22,
      name: 'Pooja Kumari',
      price: { hourly: 60, daily: 450, monthly: 8500 },
      availability: 'Half-time',
      categories: ['Laundry', 'Bathroom Cleaning'],
      image: 'cleaning2.png',
    },
    {
      id: 23,
      name: 'Nisha Singh',
      price: { hourly: 55, daily: 420, monthly: 8200 },
      availability: 'Hourly',
      categories: ['Dusting', 'Kitchen Cleaning'],
      image: 'cleaning3.png',
    },
    {
      id: 24,
      name: 'Sita Yadav',
      price: { hourly: 50, daily: 400, monthly: 8000 },
      availability: 'Day-time',
      categories: ['House Cleaning'],
      image: 'cleaning4.png',
    },
    {
      id: 25,
      name: 'Radha Kumari',
      price: { hourly: 70, daily: 500, monthly: 9000 },
      availability: 'Full-time',
      categories: ['Bathroom Cleaning'],
      image: 'cleaning2.png',
    },
    {
      id: 26,
      name: 'Shanti Devi',
      price: { hourly: 60, daily: 450, monthly: 8500 },
      availability: 'Half-time',
      categories: ['Laundry', 'Kitchen Cleaning'],
      image: 'cleaning3.png',
    },
    {
      id: 27,
      name: 'Kamla Das',
      price: { hourly: 50, daily: 400, monthly: 8000 },
      availability: 'Monthly',
      categories: ['House Cleaning', 'Utensils'],
      image: 'cleaning7.png',
    },
    {
      id: 28,
      name: 'Geeta Verma',
      price: { hourly: 75, daily: 550, monthly: 9500 },
      availability: 'Full-time',
      categories: ['Dusting', 'Bathroom Cleaning'],
      image: 'cleaning2.png',
    },
    {
      id: 29,
      name: 'Anita Rani',
      price: { hourly: 55, daily: 420, monthly: 8200 },
      availability: 'Day-time',
      categories: ['House Cleaning'],
      image: 'cleaning4.png',
    },
    {
      id: 210,
      name: 'Kavita Thakur',
      price: { hourly: 60, daily: 460, monthly: 8700 },
      availability: 'Half-time',
      categories: ['Laundry', 'Utensils'],
      image: 'cleaning7.png',
    },
    {
      id: 211,
      name: 'Laxmi Kumari',
      price: { hourly: 50, daily: 400, monthly: 8000 },
      availability: 'Hourly',
      categories: ['Dusting', 'Bathroom Cleaning'],
      image: 'cleaning2.png',
    },
    {
      id: 212,
      name: 'Sushma Devi',
      price: { hourly: 70, daily: 480, monthly: 8800 },
      availability: 'Full-time',
      categories: ['Kitchen Cleaning'],
      image: 'cleaning3.png',
    },
    {
      id: 213,
      name: 'Maya Sharma',
      price: { hourly: 65, daily: 470, monthly: 8700 },
      availability: 'Day-time',
      categories: ['House Cleaning', 'Laundry'],
      image: 'cleaning1.png',
    },
    {
      id: 214,
      name: 'Preeti Jha',
      price: { hourly: 60, daily: 460, monthly: 8600 },
      availability: 'Monthly',
      categories: ['Bathroom Cleaning'],
      image: 'cleaning6.png',
    },
    {
      id: 215,
      name: 'Rekha Devi',
      price: { hourly: 55, daily: 450, monthly: 8500 },
      availability: 'Hourly',
      categories: ['Dusting', 'Kitchen Cleaning'],
      image: 'cleaning5.png',
    },
    {
      id: 216,
      name: 'Sunita Kumari',
      price: { hourly: 50, daily: 400, monthly: 8000 },
      availability: 'Half-time',
      categories: ['Laundry', 'Utensils'],
      image: 'cleaning1.png',
    },
    {
      id: 217,
      name: 'Rani Sinha',
      price: { hourly: 70, daily: 500, monthly: 9000 },
      availability: 'Full-time',
      categories: ['Bathroom Cleaning'],
      image: 'cleaning2.png',
    },
    {
      id: 218,
      name: 'Sarita Devi',
      price: { hourly: 75, daily: 520, monthly: 9100 },
      availability: 'Day-time',
      categories: ['Dusting', 'Kitchen Cleaning'],
      image: 'cleaning4.png',
    },
    {
      id: 219,
      name: 'Meena Kumari',
      price: { hourly: 65, daily: 470, monthly: 8700 },
      availability: 'Monthly',
      categories: ['House Cleaning', 'Utensils'],
      image: 'cleaning7.png',
    },
    {
      id: 220,
      name: 'Rita Sharma',
      price: { hourly: 60, daily: 460, monthly: 8600 },
      availability: 'Half-time',
      categories: ['Laundry'],
      image: 'cleaning20.png',
    },
  ];
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleAddToCart = async (maid) => {
    const isAlreadyInCart = cartItems.some(item => item.id === maid.id);
    if (isAlreadyInCart) {
      alert(`${maid.name} is already in the cart.`);
      return;
    }
    const updatedCart = [...cartItems, maid];
    dispatch(addToCart(maid));
    alert(`${maid.name} has been added to the cart!`);
  
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
      try {
        await fetch('http://localhost:3000/api/cart/saveCart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: user.email, cartItems: updatedCart }),
        });
      } catch (error) {
        console.error("Error saving cart to backend:", error);
      }
    }
  };
    return (
    <>
           <h1 className="cleaningheading">Cleaning Maids in Bihar</h1>
      <div className="maid-list">
        {maidList.map((maid) => (
          <div key={maid.id} className="maid-card">
            <img src={`./${maid.image}`} alt={maid.name} className="maid-image" />
            <h2>{maid.name}</h2>
            <p>Availability: {maid.availability}</p>
            <p>Categories: {maid.categories.join(', ')}</p>
            <p>Price (₹): Hourly: {maid.price.hourly}, Daily: {maid.price.daily}, Monthly: {maid.price.monthly}</p>
            <button className="order-button" onClick={() => handleAddToCart(maid)}>Add to Cart</button>
          </div>
        ))}
      </div>
     </>
  );
};

export default Cleaningmaid;
