import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Caretaker from "./components/caretaker/Caretaker";
import Nanny from "./components/nanny/Nanny";
import Cookingmaid from "./components/cooking/Cookingmaid";
import Cleaningmaid from "./components/cleaning/Cleaningmaid";
import Allrounder from "./components/allrounder/Allrounder";
import Services from "./components/service/Services";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import SignUp from "./components/signUp/SignUp";

import Login from "./components/login/Login";
// import Profile from "./components/profile/Profile";
// import PrivateRoute from "./components/PrivateRoute";
import Cart from "./components/cart/Cart";
import OrderHistory from "./components/orderHistory/OrderHistory";


const App=()=>{
  
  return (
    <>
<BrowserRouter>
<Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/orderHistory" element={<OrderHistory />} />

    <Route path="/login" element={<Login />} />
    <Route path="/signUp" element={<SignUp />} />
    <Route path="/cookingmaid" element={<Cookingmaid />} />
    <Route path="/nanny" element={<Nanny />} />
    <Route path="/allrounder" element={<Allrounder />} />
    <Route path="/caretaker" element={<Caretaker />} />
    <Route path="/cleaningmaid" element={<Cleaningmaid />} />
    <Route path="/services" element={<Services />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/cart" element={<Cart />} />

     </Routes>
  <Footer />

</BrowserRouter>


    </>
  )
}
export default App;
