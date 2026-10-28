import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Sprout, ShieldCheck, Sun, Users, ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <span className="section-eyebrow">
            <Leaf size={16} aria-hidden="true" />
            Our Roots & Mission
          </span>
          <h1 className="about-title">
            Bringing Nature Home, <span className="highlight-text">One Plant at a Time</span>
          </h1>
          <p className="about-subtitle">
            At Paradise Nursery, we believe that everyone deserves a vibrant touch of living nature in their everyday space. 
            Our mission is to make indoor gardening joyful, accessible, and rewarding for plant parents of every experience level.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="about-story-section">
        <div className="about-container">
          <div className="story-grid">
            <div className="story-card">
              <div className="story-icon">
                <Sprout size={28} aria-hidden="true" />
              </div>
              <h2>Why Paradise Nursery Exists</h2>
              <p>
                Modern life can often feel disconnected from the grounding rhythms of the natural world. 
                Paradise Nursery was founded with a simple purpose: to help individuals and families transform apartments, 
                houses, and home offices into peaceful, verdant oases filled with lush greenery and clean air.
              </p>
            </div>

            <div className="story-card">
              <div className="story-icon">
                <Sun size={28} aria-hidden="true" />
              </div>
              <h2>Plants for Every Experience Level</h2>
              <p>
                Whether you have never kept a succulent alive or already maintain a flourishing indoor jungle, 
                our catalog is organized with intention. We offer forgiving, low-maintenance varieties that thrive on neglect, 
                striking statement plants that demand admiration, and 100% pet-friendly selections for households with furry friends.
              </p>
            </div>

            <div className="story-card">
              <div className="story-icon">
                <Heart size={28} aria-hidden="true" />
              </div>
              <h2>Welcoming & Straightforward Shopping</h2>
              <p>
                We strip away confusing botanical jargon in favor of clear, honest care guidelines. 
                Every houseplant includes transparent pricing, realistic photography, and straightforward advice so you can 
                choose with confidence and watch your greenery flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Pillars */}
      <section className="about-pillars-section">
        <div className="about-container">
          <div className="pillars-box">
            <div className="pillar-header">
              <span className="section-eyebrow">Our Promises</span>
              <h2>The Paradise Quality Standard</h2>
            </div>

            <div className="pillars-grid">
              <div className="pillar-item">
                <ShieldCheck size={24} className="pillar-icon" />
                <h3>Nursery-Grown Health</h3>
                <p>Every specimen is hand-inspected for robust root systems, pest-free leaves, and balanced growth before dispatch.</p>
              </div>

              <div className="pillar-item">
                <Users size={24} className="pillar-icon" />
                <h3>Community-Centered Care</h3>
                <p>We are here for your plant journey long after your box arrives, offering free guidance whenever questions arise.</p>
              </div>

              <div className="pillar-item">
                <Leaf size={24} className="pillar-icon" />
                <h3>Eco-Conscious Packaging</h3>
                <p>We utilize biodegradable pots, recycled soil blends, and recyclable protective cushioning to honor our planet.</p>
              </div>
            </div>

            <div className="about-cta-container">
              <Link to="/plants" className="about-cta-button">
                <span>Explore the Catalog</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}