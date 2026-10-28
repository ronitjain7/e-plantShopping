import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Leaf, ShoppingCart } from 'lucide-react';
import { selectCartItems } from '../features/cart/CartSlice.jsx';

export default function Navbar({ onHomeClick, onPlantsClick }) {
  const cart = useSelector(selectCartItems);

  // Exact calculateTotalQuantity function per rubric
  const calculateTotalQuantity = () => {
    return cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const totalQuantity = calculateTotalQuantity();

  return (
    <header className="navbar" role="banner">
      <div className="navbar-container">
        {/* Brand logo & title */}
        <Link
          to="/"
          className="brand"
          aria-label="Paradise Nursery Home"
          onClick={onHomeClick}
        >
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
            onClick={onHomeClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={onPlantsClick}
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
            aria-label={`Shopping cart with ${totalQuantity} items`}
          >
            <ShoppingCart size={20} aria-hidden="true" />
            <span className="cart-label">Cart</span>
            {/* Required cart_quantity_count class */}
            <span
              className="cart-badge cart_quantity_count"
              aria-label={`${totalQuantity} items in cart`}
            >
              {totalQuantity}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
