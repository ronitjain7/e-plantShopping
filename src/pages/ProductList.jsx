import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { categories, FALLBACK_PLANT_IMAGE } from '../data/plants.js';
import { addToCart, selectCartItems, selectCartCount } from '../features/cart/CartSlice.jsx';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  // Check if a specific plant is already in the cart
  const isPlantInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant, categoryName) => {
    dispatch(
      addToCart({
        ...plant,
        category: categoryName,
      })
    );
  };

  // Filter categories if user clicked category tabs
  const filteredCategories =
    activeCategoryFilter === 'all'
      ? categories
      : categories.filter((cat) => cat.id === activeCategoryFilter);

  return (
    <div className="product-list-page">
      {/* Catalog Banner / Header */}
      <section className="catalog-header-section">
        <div className="catalog-header-container">
          <div className="catalog-header-text">
            <span className="section-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Botanical Catalog
            </span>
            <h1 className="catalog-title">Our Houseplant Collection</h1>
            <p className="catalog-subtitle">
              Carefully curated indoor plants to purify your air, uplift your spirits, and infuse 
              vibrant natural green into every living space.
            </p>
          </div>

          <div className="catalog-header-stats">
            <div className="stat-pill">
              <strong>18</strong>
              <span>Unique Varieties</span>
            </div>
            <div className="stat-pill">
              <strong>3</strong>
              <span>Categories</span>
            </div>
            <Link to="/cart" className="view-cart-pill" aria-label={`View Cart with ${cartCount} items`}>
              <ShoppingCart size={18} aria-hidden="true" />
              <span>View Cart</span>
              <span className="pill-badge">{cartCount}</span>
            </Link>
          </div>
        </div>

        {/* Quick Category Filter Bar */}
        <div className="category-filter-bar" role="tablist" aria-label="Category Filters">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategoryFilter === 'all'}
            className={`filter-chip ${activeCategoryFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategoryFilter('all')}
          >
            All Plants (18)
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategoryFilter === cat.id}
              className={`filter-chip ${activeCategoryFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategoryFilter(cat.id)}
            >
              {cat.name} ({cat.plants.length})
            </button>
          ))}
        </div>
      </section>

      {/* Catalog Categories Grid */}
      <div className="catalog-main-content">
        {filteredCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="category-section"
            aria-labelledby={`heading-${category.id}`}
          >
            <div className="category-section-header">
              <div>
                <span className="category-tagline">{category.tagline}</span>
                <h2 id={`heading-${category.id}`} className="category-name">
                  {category.name}
                </h2>
                <p className="category-description">{category.description}</p>
              </div>
              <span className="category-count-badge">
                {category.plants.length} Plants Available
              </span>
            </div>

            <div className="plant-grid">
              {category.plants.map((plant) => {
                const added = isPlantInCart(plant.id);

                return (
                  <article key={plant.id} className="plant-card">
                    <div className="plant-card-media">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        loading="lazy"
                        className="plant-card-image"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = FALLBACK_PLANT_IMAGE;
                        }}
                      />
                      <span className="plant-card-category-tag">
                        {category.name}
                      </span>
                    </div>

                    <div className="plant-card-body">
                      <div className="plant-card-header">
                        <h3 className="plant-card-name">{plant.name}</h3>
                        <span className="plant-card-price">
                          ${Number(plant.price).toFixed(2)}
                        </span>
                      </div>

                      <p className="plant-card-description">
                        {plant.description}
                      </p>

                      <div className="plant-card-footer">
                        <button
                          type="button"
                          id={`add-to-cart-${plant.id}`}
                          className={`add-to-cart-btn ${added ? 'is-added' : ''}`}
                          disabled={added}
                          onClick={() => handleAddToCart(plant, category.name)}
                          aria-label={
                            added
                              ? `${plant.name} already added to cart`
                              : `Add ${plant.name} to cart for $${Number(plant.price).toFixed(2)}`
                          }
                        >
                          {added ? (
                            <>
                              <Check size={18} aria-hidden="true" />
                              <span>Added to Cart</span>
                            </>
                          ) : (
                            <>
                              <ShoppingCart size={18} aria-hidden="true" />
                              <span>Add to Cart</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom Floating Bar when user has items in cart */}
      {cartCount > 0 && (
        <aside className="cart-floating-banner" aria-label="Cart Quick Summary">
          <div className="floating-banner-inner">
            <div className="floating-banner-text">
              <span className="floating-banner-count">
                {cartCount} {cartCount === 1 ? 'plant' : 'plants'} in your cart
              </span>
              <span className="floating-banner-hint">Ready to review and checkout?</span>
            </div>
            <Link to="/cart" className="floating-banner-button">
              <span>View Shopping Cart</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </aside>
      )}
    </div>
  );
}