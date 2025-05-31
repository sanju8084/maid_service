import './allrounder.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const maidData = [
  {
    id: 51,
    name: 'Rupa Kumari',
    image: 'cook1.png',
    description: 'All-rounder maid with cleaning and cooking expertise.',
    pricing: '₹8000/month',
    type: 'Full-time',
  },
  {
    id: 52,
    name: 'Pooja Devi',
    image: 'nanny/nanny2.png',
    description: 'Expert in child care and household management.',
    pricing: '₹400/day',
    type: 'Half-time',
  },
  {
    id: 53,
    name: 'Suman Yadav',
    image: 'cleaning1.png',
    description: 'Excellent cook and cleaner.',
    pricing: '₹1000/week',
    type: 'Hourly',
  },
  {
    id: 54,
    name: 'Sunita Kumari',
    image: 'cleaning4.png',
    description: 'Available for part-time cleaning and washing.',
    pricing: '₹6000/month',
    type: 'Full-time',
  },
  {
    id: 55,
    name: 'Rekha Devi',
    image: 'caretaker1.png',
    description: 'Specialized in elderly care and daily chores.',
    pricing: '₹1000/day',
    type: 'Daily',
  },
  {
    id: 56,
    name: 'Anjali Verma',
    image: 'cook6.png',
    description: 'Skilled in cooking, laundry, and cleaning.',
    pricing: '₹7000/month',
    type: 'Full-time',
  },
  {
    id: 57,
    name: 'Meera Devi',
    image: 'nanny/nanny5.png',
    description: 'Experienced in baby care and household maintenance.',
    pricing: '₹500/day',
    type: 'Half-time',
  },
  {
    id: 58,
    name: 'Kiran Yadav',
    image: 'cook4.png',
    description: 'Proficient in cooking and cleaning.',
    pricing: '₹1200/week',
    type: 'Hourly',
  },
  {
    id: 59,
    name: 'Priya Kumari',
    image: 'cleaning3.png',
    description: 'Available for full-time cleaning and laundry.',
    pricing: '₹9000/month',
    type: 'Full-time',
  },
  {
    id: 510,
    name: 'Neha Sharma',
    image: 'caretaker.png',
    description: 'Specializes in pet care and general housekeeping.',
    pricing: '₹1200/day',
    type: 'Part-time',
  },
  {
    id: 511,
    name: 'Sunita Devi',
    image: 'caretaker7.png',
    description: 'Experienced in elderly care and light cleaning.',
    pricing: '₹600/day',
    type: 'Daily',
  },
  {
    id: 512,
    name: 'Shweta Yadav',
    image: 'cleaning1.png',
    description: 'Expert in deep cleaning and home organization.',
    pricing: '₹1100/week',
    type: 'Hourly',
  },
  {
    id: 513,
    name: 'Geeta Kumari',
    image: 'cook8.png',
    description: 'Reliable and skilled in general household duties.',
    pricing: '₹7500/month',
    type: 'Full-time',
  },
  {
    id: 514,
    name: 'Anita Devi',
    image: 'cook9.png',
    description: 'Focuses on cooking and laundry services.',
    pricing: '₹900/day',
    type: 'Half-time',
  },
  {
    id: 515,
    name: 'Ranjana Sharma',
    image: 'nanny/nanny8.png',
    description: 'Skilled in child care and housekeeping tasks.',
    pricing: '₹700/week',
    type: 'Hourly',
  },
  {
    id: 516,
    name: 'Shalini Kumari',
    image: 'cook10.png',
    description: 'Provides part-time cooking and general cleaning.',
    pricing: '₹4000/month',
    type: 'Part-time',
  },
  {
    id: 517,
    name: 'Sarita Devi',
    image: 'cleaning5.png',
    description: 'Proficient in laundry, cleaning, and elderly care.',
    pricing: '₹1100/day',
    type: 'Daily',
  },
  {
    id: 518,
    name: 'Rita Yadav',
    image: 'cleaning16.png',
    description: 'Specialized in general cleaning and organizing.',
    pricing: '₹800/week',
    type: 'Hourly',
  },
  {
    id: 519,
    name: 'Sita Kumari',
    image: 'cleaning20.png',
    description: 'Skilled in deep cleaning, laundry, and organizing.',
    pricing: '₹9500/month',
    type: 'Full-time',
  },
  {
    id: 520,
    name: 'Lakshmi Devi',
    image: 'nanny/nanny5.png',
    description: 'Expert in baby care and housekeeping duties.',
    pricing: '₹1000/day',
    type: 'Daily',
  },
  {
    id: 521,
    name: 'Aarti Kumari',
    image: 'cook11.png',
    description: 'Specializes in kitchen management and cleaning.',
    pricing: '₹6000/month',
    type: 'Full-time',
  },
];

const Allrounder = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = async (maid) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === maid.id);
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
        console.error('Error saving cart to backend:', error);
      }
    }
  };

  return (
    <>
      <h1 className="cookheading">All-Rounder Maids in Bihar</h1>
      <div className="maid-list">
        {maidData.map((maid) => (
          <div className="maid-card" key={maid.id}>
            <img src={`./images/${maid.image}`} alt={maid.name} className="maid-image" />
            <h3>{maid.name}</h3>
            <p>{maid.description}</p>
            <p>Type: {maid.type}</p>
            <p>Pricing: {maid.pricing}</p>
            <button className="add-button" onClick={() => handleAddToCart(maid)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Allrounder;
