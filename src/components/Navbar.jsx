import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Leaf, ShoppingCart } from 'lucide-react';
import { selectCartCount } from '../features/cart/CartSlice.jsx';

export default function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-container">
        {/* Brand logo & title */}
        <Link to="/" className="brand" aria-label="Paradise Nursery Home">
          <div className="brand-icon" aria-hidden="true">
            <Leaf size={22} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-subtitle">Where Greenery Meets Serenity</span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="nav-links" aria-label="Primary Navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Plants
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About Us
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => `cart-nav-button ${isActive ? 'active' : ''}`}
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            <ShoppingCart size={20} aria-hidden="true" />
            <span className="cart-label">Cart</span>
            <span className="cart-badge" aria-label={`${cartCount} items in cart`}>
              {cartCount}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}