import "../footer/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
      <div className=" footer-section ">
        <img src="logo.png"  className="footerlogo"/>
      </div>
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We offer professional maid services, including cooking maids, cleaning maids, nannies,
            caretakers, and all-rounders for both part-time and full-time services. Our mission is
            to make your life easier with trusted, trained, and reliable staff.
          </p>
        </div>

        <div className="footer-section services">
          <h2>Our Services</h2>
          <ul>
<NavLink to="/cookingmaid"><li>Cooking Maid</li></NavLink>
<NavLink to="/nanny"><li>Nanny</li></NavLink>
<NavLink to="/caretaker"><li>Caretaker</li></NavLink>
<NavLink to="/allrounder"><li>All-Rounder</li></NavLink>
<NavLink to="/services"><li>View All Services</li></NavLink>


          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: <a href="mailto:support@maidservice.com">sanjanakiei20@gmail.com</a></li>
            <li>Phone: 8084224918</li>
            <li>Address: Daudpur kothi, muzaffarpur, Bihar</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Maid Service. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
