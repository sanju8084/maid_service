import './nanny.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const nannyData = [
  {
    id: 31,
    name: "Sunita Devi",
    type: "Full-Time",
    introduction: "Experienced in childcare and household chores.",
    pricing: "₹15,000/month",
    image: "../nanny/nanny1.png"
  },
  {
    id: 32,
    name: "Rita Kumari",
    type: "Half-Time",
    introduction: "Expert in babysitting and light cleaning.",
    pricing: "₹8,000/month",
    image: "../nanny/nanny2.png",
  },
  {
    id: 33,
    name: "Anjali Singh",
    type: "Hourly",
    introduction: "Great with infants and toddlers.",
    pricing: "₹150/hour",
    image: "../nanny/nanny3.png",
  },
  {
    id: 34,
    name: "Priya Das",
    type: "Daily",
    introduction: "Provides exceptional child care services.",
    pricing: "₹500/day",
    image: "../nanny/nanny4.png",
  },
  {
    id: 35,
    name: "Kavita Sharma",
    type: "Monthly",
    introduction: "Skilled in managing household and kids.",
    pricing: "₹10,000/month",
    image: "../nanny/nanny5.png",
  },
  {
    id: 36,
    name: "Neha Gupta",
    type: "Hourly",
    introduction: "Friendly and punctual babysitter.",
    pricing: "₹200/hour",
    image: "../nanny/nanny6.png",
  },
  {
    id: 37,
    name: "Pooja Yadav",
    type: "Full-Time",
    introduction: "Handles infants and toddlers with care.",
    pricing: "₹18,000/month",
    image: "../nanny/nanny7.png",
  },
  {
    id: 38,
    name: "Shalini Jha",
    type: "Half-Time",
    introduction: "Specializes in after-school care.",
    pricing: "₹7,000/month",
    image: "../nanny/nanny8.png",
  },
  {
    id: 39,
    name: "Manisha Rai",
    type: "Daily",
    introduction: "Reliable and attentive.",
    pricing: "₹400/day",
    image: "../nanny/nanny9.png",
  },
  {
    id: 310,
    name: "Komal Verma",
    type: "Monthly",
    introduction: "Provides excellent full-day care.",
    pricing: "₹12,000/month",
    image: "../nanny/nanny10.png",
  },
  {
    id: 311,
    name: "Sita Mishra",
    type: "Hourly",
    introduction: "Efficient and loving nanny.",
    pricing: "₹180/hour",
    image: "../nanny/nanny11.png",
  },
  {
    id: 312,
    name: "Gayatri Singh",
    type: "Full-Time",
    introduction: "Experienced with newborn care.",
    pricing: "₹16,000/month",
    image: "../nanny/nanny12.png",
  },
  {
    id: 313,
    name: "Meena Kumari",
    type: "Half-Time",
    introduction: "Handles multiple children effectively.",
    pricing: "₹6,500/month",
    image: "../nanny/nanny1.png",
  },
  {
    id: 314,
    name: "Radha Soni",
    type: "Daily",
    introduction: "Flexible with timings and tasks.",
    pricing: "₹450/day",
    image: "../nanny/nanny3.png",
  },
  {
    id: 315,
    name: "Savita Bharti",
    type: "Monthly",
    introduction: "Excellent at engaging kids in activities.",
    pricing: "₹9,000/month",
    image: "../nanny/nanny5.png",
  },
  {
    id: 316,
    name: "Kiran Patel",
    type: "Hourly",
    introduction: "Patient and kind caregiver.",
    pricing: "₹170/hour",
    image: "../nanny/nanny8.png",
  },
  {
    id: 317,
    name: "Seema Yadav",
    type: "Full-Time",
    introduction: "Manages child care and cooking.",
    pricing: "₹14,000/month",
    image: "../nanny/nanny3.png",
  },
  {
    id: 318,
    name: "Rupa Sharma",
    type: "Half-Time",
    introduction: "Specializes in evening care.",
    pricing: "₹7,500/month",
    image: "../nanny/nanny10.png",
  },
  {
    id: 319,
    name: "Nisha Jain",
    type: "Daily",
    introduction: "Proficient in multitasking.",
    pricing: "₹600/day",
    image: "../nanny/nanny2.png",
  },
  {
    id: 320,
    name: "Bharti Joshi",
    type: "Monthly",
    introduction: "Loves working with children.",
    pricing: "₹11,000/month",
    image: "../nanny/nanny11.png",
  },
  {
    id: 321,
    name: "Laxmi Verma",
    type: "Hourly",
    introduction: "Organized and dependable.",
    pricing: "₹200/hour",
    image: "../nanny/nanny4.png",
  },
  {
    id: 322,
    name: "Sarita Singh",
    type: "Full-Time",
    introduction: "Caring and attentive nanny.",
    pricing: "₹17,000/month",
    image: "../nanny/nanny6.png",
  },
];

const Nannymaid = () => {
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
      <h1 className='nannyheading'>Nanny Maids in Bihar</h1>
      <div className="maid-list">
        {nannyData.map((maid) => (
          <div className="maid-card" key={maid.id}>
            <img src={`./${maid.image}`} alt={maid.name} className="maid-image" />
            <h3>{maid.name}</h3>
            <p>Type: {maid.type}</p>
            <p>Introduction: {maid.introduction}</p>
            <p>Pricing: {maid.pricing}</p>
            <button className="add-button" onClick={() => handleAddToCart(maid)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nannymaid;
