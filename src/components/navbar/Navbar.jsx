
import { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setLoggedInUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
      }
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsAuthenticated(false);
    setLoggedInUser('');
    setDropdownOpen(false);
    navigate('/login');
  };

  const handleOrderHistory = () => {
    setDropdownOpen(false);
    navigate('/orderHistory');
  };

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="logo-image">
          <NavLink to="/">
            <img className="navlogo" src="/logo.png" alt="Logo" />
          </NavLink>
        </div>

        <nav>
          <ul className={`nav-links ${openMenu ? 'active' : ''}`}>
            <li ><NavLink className='navlink' onClick={() => setOpenMenu(false)} to="/">Home</NavLink></li>
            <li ><NavLink className='navlink' onClick={() => setOpenMenu(false)} to="/services">Services</NavLink></li>
            <li ><NavLink className='navlink' onClick={() => setOpenMenu(false)} to="/about">About</NavLink></li>
            <li ><NavLink className='navlink' onClick={() => setOpenMenu(false)} to="/contact">Contact</NavLink></li>
            <li><NavLink onClick={() => setOpenMenu(false)} to="/cart"><img src="./cart.png" alt="Cart" className="cart-icon" /></NavLink></li>

            {isAuthenticated && loggedInUser ? (
              <li className="user-profile" ref={dropdownRef}>
                <span className="hello-user">👋 Hello, {loggedInUser.name || 'User'}</span>
                <img
                  src={loggedInUser.image || 'https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png'}
                  alt="User"
                  className="profile-picture"
                  onClick={handleProfileClick}
                  style={{ cursor: 'pointer' }}
                />
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <button onClick={handleOrderHistory}>Order History</button>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <NavLink onClick={() => setOpenMenu(false)} to="/login">
                  <span className="loginbtn">Login</span>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <button
          className="mobile-menu-icon"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={openMenu ? faTimes : faBars} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
