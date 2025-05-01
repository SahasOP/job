import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Job</span>Portal
        </Link>
        
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/jobs' ? 'active' : ''}`}>
            <Link to="/jobs" className="navbar-link">Browse Jobs</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/jobs/create' ? 'active' : ''}`}>
            <Link to="/jobs/create" className="navbar-link">Post Job</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;