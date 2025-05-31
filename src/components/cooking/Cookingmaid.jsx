import './cookingmaid.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
  
const maidData = [
  {
  "id": 11,
  "name": "Aarti Kumari",
  "type": "Full-time",
  "availability": "All types of food",
  "pricing": "₹15,000/month",
  "image": "cook1.png"
  },
  {
  "id": 12,
  "name": "Sunita Devi",
  "type": "Half-time",
  "availability": "Veg only",
  "pricing": "₹8,000/month",
  "image": "cook2.png"
  },
  {
  "id": 13,
  "name": "Neha Singh",
  "type": "Hourly",
  "availability": "Fast food",
  "pricing": "₹150/hour",
  "image": "cook3.png"
  },
  {
  "id": 14,
  "name": "Rita Jha",
  "type": "Day-time",
  "availability": "Non-veg only",
  "pricing": "₹700/day",
  "image": "cook4.png"
  },
  {
  "id": 15,
  "name": "Pooja Sharma",
  "type": "Full-time",
  "availability": "All types of food",
  "pricing": "₹14,500/month",
  "image": "cook5.png"
  },
  {
  "id": 16,
  "name": "Anjali Gupta",
  "type": "Half-time",
  "availability": "Veg & Non-veg",
  "pricing": "₹9,000/month",
  "image": "cook6.png"
  },
  {
  "id": 17,
  "name": "Komal Rani",
  "type": "Hourly",
  "availability": "Fast food",
  "pricing": "₹200/hour",
  "image": "cook7.png"
  },
  {
  "id":18,
  "name": "Sita Kumari",
  "type": "Day-time",
  "availability": "Veg only",
  "pricing": "₹600/day",
  "image": "cook8.png"
  },
  {
  "id": 19,
  "name": "Kavita Devi",
  "type": "Full-time",
  "availability": "Non-veg only",
  "pricing": "₹13,000/month",
  "image": "cook9.png"
  },
  {
  "id": 110,
  "name": "Meena Singh",
  "type": "Half-time",
  "availability": "All types of food",
  "pricing": "₹10,000/month",
  "image": "cook10.png"
  },
  {
  "id": 111,
  "name": "Seema Verma",
  "type": "Hourly",
  "availability": "Fast food",
  "pricing": "₹170/hour",
  "image": "cook11.png"
  },
  {
  "id": 112,
  "name": "Babita Kumari",
  "type": "Day-time",
  "availability": "Veg & Non-veg",
  "pricing": "₹650/day",
  "image": "cook12.png"
  },
  {
  "id": 113,
  "name": "Gita Tiwari",
  "type": "Full-time",
  "availability": "Veg only",
  "pricing": "₹14,000/month",
  "image": "cook13.png"
  },
  {
  "id": 114,
  "name": "Savita Jha",
  "type": "Half-time",
  "availability": "Non-veg only",
  "pricing": "₹7,500/month",
  "image": "cook14.png"
  },
  {
  "id": 115,
  "name": "Laxmi Devi",
  "type": "Hourly",
  "availability": "All types of food",
  "pricing": "₹180/hour",
  "image": "cook15.png"
  },
  {
  "id": 116,
  "name": "Manju Kumari",
  "type": "Day-time",
  "availability": "Fast food",
  "pricing": "₹550/day",
  "image": "cook16.png"
  },
  {
  "id": 117,
  "name": "Shanti Devi",
  "type": "Full-time",
  "availability": "All types of food",
  "pricing": "₹16,000/month",
  "image": "cook1.png"
  },
  {
  "id": 118,
  "name": "Rekha Sharma",
  "type": "Half-time",
  "availability": "Veg & Non-veg",
  "pricing": "₹9,500/month",
  "image": "cook1.png"
  },
  {
  "id": 119,
  "name": "Pushpa Kumari",
  "type": "Hourly",
  "availability": "Veg only",
  "pricing": "₹160/hour",
  "image": "cook1.png"
  },
  {
  "id": 120,
  "name": "Nisha Verma",
  "type": "Day-time",
  "availability": "Non-veg only",
  "pricing": "₹800/day",
  "image": "cook1.png"
  }
  ]
 
const Cookingmaid = () => {
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
    <h1 className='cookheading'>Cooking Maids in Bihar</h1>
    <div className="maid-list">
      {maidData.map((maid) => (
        <div className="maid-card" key={maid.id}>
          <img src={`./${maid.image}`} alt={maid.name} className="maid-image" />
          <h3>{maid.name}</h3>
          <p>Type: {maid.type}</p>
          <p>Availability: {maid.availability}</p>
          <p>Pricing: {maid.pricing}</p>
          <button className="add-button" onClick={() => handleAddToCart(maid)}>Add to Cart</button>
        </div>
      ))}
    </div>
</>
     );
};
export default Cookingmaid;
