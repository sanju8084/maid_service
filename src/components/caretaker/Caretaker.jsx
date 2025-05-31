// import './caretaker.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart,setCart } from '../../redux/cartSlice';

// const Caretaker = () => {
//   const maids = [
//     {
//       id: 41,
//       name: "Rekha Kumari",
//       image: "caretaker1.png",
//       pricing: "₹6000/month",
//       availability: "Full-Time",
//       description: "Experienced elder caretaker, compassionate and patient.",
//       location: "Patna, Bihar",
//     },
//     {
//       id: 42,
//       name: "Sita Devi",
//       image: "caretaker2.png",
//       pricing: "₹250/day",
//       availability: "Half-Time",
//       description: "Part-time maid for elderly care, skilled in daily assistance.",
//       location: "Gaya, Bihar",
//     },
//     {
//       id: 43,
//       name: "Anjali Singh",
//       image: "caretaker3.png",
//       pricing: "₹150/hour",
//       availability: "Hourly",
//       description: "Professional caretaker with a focus on health and hygiene.",
//       location: "Bhagalpur, Bihar",
//     },
//     {
//       id: 44,
//       name: "Poonam Kumari",
//       image: "caretaker4.png",
//       pricing: "₹5000/month",
//       availability: "Full-Time",
//       description: "Full-time caretaker, experienced in assisting elderly with medication and meals.",
//       location: "Muzaffarpur, Bihar",
//     },
//     {
//       id: 45,
//       name: "Sunita Devi",
//       image: "caretaker5.png",
//       pricing: "₹200/day",
//       availability: "Daily",
//       description: "Available for daily care with a gentle approach to elderly needs.",
//       location: "Darbhanga, Bihar",
//     },
//     {
//       id: 46,
//       name: "Kamla Devi",
//       image: "caretaker6.png",
//       pricing: "₹4500/month",
//       availability: "Full-Time",
//       description: "Skilled in elderly care and home support services.",
//       location: "Patna, Bihar",
//     },
//     {
//       id: 47,
//       name: "Geeta Kumari",
//       image: "caretaker7.png",
//       pricing: "₹300/day",
//       availability: "Part-Time",
//       description: "Part-time maid experienced in elderly care and home cleaning.",
//       location: "Bihar Sharif, Bihar",
//     },
//     {
//       id: 48,
//       name: "Neelam Devi",
//       image: "caretaker8.png",
//       pricing: "₹5500/month",
//       availability: "Full-Time",
//       description: "Full-time elder care provider, skilled in daily assistance.",
//       location: "Hajipur, Bihar",
//     },
//     {
//       id: 49,
//       name: "Shanti Devi",
//       image: "caretaker9.png",
//       pricing: "₹100/hour",
//       availability: "Hourly",
//       description: "Offering support for elderly with personal care and daily activities.",
//       location: "Samastipur, Bihar",
//     },
//     {
//       id: 410,
//       name: "Indu Kumari",
//       image: "caretaker10.png",
//       pricing: "₹400/day",
//       availability: "Daily",
//       description: "Experienced in providing care and support for the elderly at home.",
//       location: "Chhapra, Bihar",
//     },
//     {
//       id: 411,
//       name: "Rina Kumari",
//       image: "caretaker11.png",
//       pricing: "₹6000/month",
//       availability: "Full-Time",
//       description: "Skilled in elder care with a focus on emotional support.",
//       location: "Sasaram, Bihar",
//     },
//     {
//       id: 412,
//       name: "Maya Devi",
//       image: "caretaker12.png",
//       pricing: "₹3500/month",
//       availability: "Full-Time",
//       description: "Provides assistance with bathing, dressing, and companionship.",
//       location: "Arrah, Bihar",
//     },
//     {
//       id: 413,
//       name: "Seema Devi",
//       image: "caretaker13.png",
//       pricing: "₹250/day",
//       availability: "Half-Time",
//       description: "Experienced caregiver for elderly individuals needing part-time assistance.",
//       location: "Buxar, Bihar",
//     },
//     {
//       id: 414,
//       name: "Laxmi Kumari",
//       image: "caretaker14.png",
//       pricing: "₹5500/month",
//       availability: "Full-Time",
//       description: "Offers full-time elderly care, managing medication and daily routines.",
//       location: "Sitamarhi, Bihar",
//     },
//     {
//       id: 415,
//       name: "Savita Devi",
//       image: "caretaker15.png",
//       pricing: "₹300/day",
//       availability: "Hourly",
//       description: "Providing elder care with a focus on safety and personal hygiene.",
//       location: "Motihari, Bihar",
//     },
//     {
//       id: 416,
//       name: "Aruna Kumari",
//       image: "caretaker16.png",
//       pricing: "₹5000/month",
//       availability: "Full-Time",
//       description: "Full-time maid, experienced in elderly care and home management.",
//       location: "Purnia, Bihar",
//     },
//     {
//       id: 417,
//       name: "Jaya Kumari",
//       image: "caretaker17.png",
//       pricing: "₹6000/month",
//       availability: "Full-Time",
//       description: "Skilled in providing complete home care, including companionship.",
//       location: "Vaishali, Bihar",
//     }
//   ];
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.cartItems);

//   const handleAddToCart = async (maid) => {
//     const isAlreadyInCart = cartItems.some(item => item.id === maid.id);
//     if (isAlreadyInCart) {
//       alert(`${maid.name} is already in the cart.`);
//       return;
//     }
  
//     const updatedCart = [...cartItems, maid];
//     dispatch(setCart(updatedCart)); // ✅ set full cart
//     alert(`${maid.name} has been added to the cart!`);
  
//     const user = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (user) {
//       try {
//         await fetch('http://localhost:3000/api/cart/saveCart', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email: user.email, cartItems: updatedCart }),
//         });
//       } catch (error) {
//         console.error("Error saving cart to backend:", error);
//       }
//     }
//   };
   
  
//   return (
  

//     <div className="maid-list-container">
//         <h1>Elder Caretaker Maids in Bihar</h1>

//       <div className="maid-grid">
//         {maids.map((maid) => (
//           <div key={maid.id} className="maid-card">
//             <img src={maid.image} alt={maid.name} className="maid-image" />
//             <div className="maid-info">
//               <h3>{maid.name}</h3>
//               <p className="price">{maid.price}</p>
//               <p className="availability">Availability: {maid.availability}</p>
//               <p className="description">{maid.description}</p>
//               <p className="location">Location: {maid.location}</p>
//               <button className="add-button" onClick={() => handleAddToCart(maid)}>Add to Cart</button>

//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//    );
// };

// export default Caretaker;



import './caretaker.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const caretakerData = [
  {
    id: 41,
    name: "Rekha Kumari",
    image: "caretaker1.png",
    pricing: "₹6000/month",
    availability: "Full-Time",
    description: "Experienced elder caretaker, compassionate and patient.",
    location: "Patna, Bihar",
  },
  {
    id: 42,
    name: "Sita Devi",
    image: "caretaker2.png",
    pricing: "₹250/day",
    availability: "Half-Time",
    description: "Part-time maid for elderly care, skilled in daily assistance.",
    location: "Gaya, Bihar",
  },
  {
    id: 43,
    name: "Anjali Singh",
    image: "caretaker3.png",
    pricing: "₹150/hour",
    availability: "Hourly",
    description: "Professional caretaker with a focus on health and hygiene.",
    location: "Bhagalpur, Bihar",
  },
  {
    id: 44,
    name: "Poonam Kumari",
    image: "caretaker4.png",
    pricing: "₹5000/month",
    availability: "Full-Time",
    description: "Full-time caretaker, experienced in assisting elderly with medication and meals.",
    location: "Muzaffarpur, Bihar",
  },
  {
    id: 45,
    name: "Sunita Devi",
    image: "caretaker5.png",
    pricing: "₹200/day",
    availability: "Daily",
    description: "Available for daily care with a gentle approach to elderly needs.",
    location: "Darbhanga, Bihar",
  },
  {
    id: 46,
    name: "Kamla Devi",
    image: "caretaker6.png",
    pricing: "₹4500/month",
    availability: "Full-Time",
    description: "Skilled in elderly care and home support services.",
    location: "Patna, Bihar",
  },
  {
    id: 47,
    name: "Geeta Kumari",
    image: "caretaker7.png",
    pricing: "₹300/day",
    availability: "Part-Time",
    description: "Part-time maid experienced in elderly care and home cleaning.",
    location: "Bihar Sharif, Bihar",
  },
  {
    id: 48,
    name: "Neelam Devi",
    image: "caretaker8.png",
    pricing: "₹5500/month",
    availability: "Full-Time",
    description: "Full-time elder care provider, skilled in daily assistance.",
    location: "Hajipur, Bihar",
  },
  {
    id: 49,
    name: "Shanti Devi",
    image: "caretaker9.png",
    pricing: "₹100/hour",
    availability: "Hourly",
    description: "Offering support for elderly with personal care and daily activities.",
    location: "Samastipur, Bihar",
  },
  {
    id: 410,
    name: "Indu Kumari",
    image: "caretaker10.png",
    pricing: "₹400/day",
    availability: "Daily",
    description: "Experienced in providing care and support for the elderly at home.",
    location: "Chhapra, Bihar",
  },
  {
    id: 411,
    name: "Rina Kumari",
    image: "caretaker11.png",
    pricing: "₹6000/month",
    availability: "Full-Time",
    description: "Skilled in elder care with a focus on emotional support.",
    location: "Sasaram, Bihar",
  },
  {
    id: 412,
    name: "Maya Devi",
    image: "caretaker12.png",
    pricing: "₹3500/month",
    availability: "Full-Time",
    description: "Provides assistance with bathing, dressing, and companionship.",
    location: "Arrah, Bihar",
  },
  {
    id: 413,
    name: "Seema Devi",
    image: "caretaker13.png",
    pricing: "₹250/day",
    availability: "Half-Time",
    description: "Experienced caregiver for elderly individuals needing part-time assistance.",
    location: "Buxar, Bihar",
  },
  {
    id: 414,
    name: "Laxmi Kumari",
    image: "caretaker14.png",
    pricing: "₹5500/month",
    availability: "Full-Time",
    description: "Offers full-time elderly care, managing medication and daily routines.",
    location: "Sitamarhi, Bihar",
  },
  {
    id: 415,
    name: "Savita Devi",
    image: "caretaker15.png",
    pricing: "₹300/day",
    availability: "Hourly",
    description: "Providing elder care with a focus on safety and personal hygiene.",
    location: "Motihari, Bihar",
  },
  {
    id: 416,
    name: "Aruna Kumari",
    image: "caretaker16.png",
    pricing: "₹5000/month",
    availability: "Full-Time",
    description: "Full-time maid, experienced in elderly care and home management.",
    location: "Purnia, Bihar",
  },
  {
    id: 417,
    name: "Jaya Kumari",
    image: "caretaker17.png",
    pricing: "₹6000/month",
    availability: "Full-Time",
    description: "Skilled in providing complete home care, including companionship.",
    location: "Vaishali, Bihar",
  }
];

const Caretaker = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

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
      <h1 className="cookheading">Elder Caretaker Maids in Bihar</h1>
      <div className="maid-list">
        {caretakerData.map((maid) => (
          <div className="maid-card" key={maid.id}>
            <img src={`./${maid.image}`} alt={maid.name} className="maid-image" />
            <h3>{maid.name}</h3>
            <p>Availability: {maid.availability}</p>
            <p>Pricing: {maid.pricing}</p>
            <p>{maid.description}</p>
            <p>Location: {maid.location}</p>
            <button className="add-button" onClick={() => handleAddToCart(maid)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Caretaker;
