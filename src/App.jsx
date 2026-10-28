import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, ShieldCheck, HeartHandshake, Truck } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import ProductList from './pages/ProductList.jsx';
import CartItem from './pages/CartItem.jsx';
import AboutUs from './pages/AboutUs.jsx';
import './App.css';

// Landing Page Hero Component
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <section className="hero-section" aria-label="Welcome Hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} aria-hidden="true" />
            <span>Handpicked Botanical Collection</span>
          </div>

          <h1 className="hero-title">
            Welcome to <span className="highlight-text">Paradise Nursery</span>
          </h1>

          <p className="hero-description">
            Bring nature into your home and cultivate your personal sanctuary. 
            From resilient beginner-friendly foliage to breathtaking architectural centerpieces, 
            we nurture premium houseplants that breathe life, tranquility, and cleaner air into every room.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              id="get-started-btn"
              className="primary-cta-btn"
              onClick={() => navigate('/plants')}
            >
              <span>Get Started</span>
              <ArrowRight size={20} aria-hidden="true" />
            </button>
            <Link to="/about" className="secondary-cta-btn">
              Learn Our Story
            </Link>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <ShieldCheck size={18} aria-hidden="true" />
              <span>Healthy Plant Guarantee</span>
            </div>
            <div className="feature-item">
              <Truck size={18} aria-hidden="true" />
              <span>Careful Eco Packaging</span>
            </div>
            <div className="feature-item">
              <HeartHandshake size={18} aria-hidden="true" />
              <span>Lifelong Care Advice</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
          {/* Sensible fallback for unknown routes */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <Leaf size={20} aria-hidden="true" />
            <span className="footer-brand-name">Paradise Nursery</span>
            <span className="footer-tagline">— Bring Nature Home</span>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Plants Catalog</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/about">About Us</Link>
          </div>
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Paradise Nursery. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}