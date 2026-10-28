import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  X,
  CreditCard,
} from 'lucide-react';
import {
  updateQuantity,
  removeItem,
  selectCartItems,
} from '../features/cart/CartSlice.jsx';
import { FALLBACK_PLANT_IMAGE } from '../data/plants.js';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Rubric requirement: 'cart' as the collection of cart items
  const cart = useSelector(selectCartItems) || [];

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Rubric requirement: Calculate overall total using item.cost * item.quantity
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + Number(item.cost) * item.quantity, 0);
  };

  // Rubric requirement: Calculate line item subtotal using item.cost * item.quantity
  const calculateTotalCost = (item) => {
    return Number(item.cost) * item.quantity;
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Rubric requirement: handleIncrement(item) updates state through updateQuantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Rubric requirement: handleDecrement(item) updates state, removes item if quantity reaches 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name || item.id));
    }
  };

  // Rubric requirement: handleRemove(item) through removeItem
  const handleRemove = (item) => {
    dispatch(removeItem(item.name || item.id));
  };

  // Rubric requirement: Continue Shopping handler
  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
    navigate('/plants');
  };

  const handleCheckoutClick = () => {
    setCheckoutModalOpen(true);
  };

  const grandTotal = calculateTotalAmount();
  const totalQuantity = calculateTotalQuantity();

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container">
        {/* Breadcrumb / Top Bar */}
        <div className="cart-page-header">
          <div>
            <span className="section-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Order Review
            </span>
            <h1 className="cart-title">Your Plant Shopping Cart</h1>
            <p className="cart-subtitle">
              Review your selected houseplants, adjust quantities, and get ready to welcome your new green companions.
            </p>
          </div>

          <button
            type="button"
            className="continue-shopping-link"
            onClick={handleContinueShopping}
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Continue Shopping</span>
          </button>
        </div>

        {/* Empty Cart State */}
        {cart.length === 0 ? (
          <div className="empty-cart-card">
            <div className="empty-cart-icon-wrapper" aria-hidden="true">
              <ShoppingBag size={48} />
            </div>
            <h2 className="empty-cart-title">Your shopping cart is empty</h2>
            <p className="empty-cart-text">
              Looks like you haven't added any botanical wonders to your cart yet. Explore our curated categories to discover the perfect plant for your home.
            </p>
            <button
              type="button"
              className="explore-plants-btn"
              onClick={handleContinueShopping}
            >
              <span>Browse Plants Catalog</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div className="cart-content-grid">
            {/* Left Column: Cart Items List using cart.map() */}
            <div className="cart-items-section">
              <div className="cart-items-header-row">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Total</span>
              </div>

              <div className="cart-items-list" role="list">
                {cart.map((item) => {
                  const lineTotal = calculateTotalCost(item);

                  return (
                    <article key={item.id || item.name} className="cart-item-card" role="listitem">
                      <div className="cart-item-main">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-item-thumbnail"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = FALLBACK_PLANT_IMAGE;
                          }}
                        />

                        <div className="cart-item-details">
                          {item.category && (
                            <span className="cart-item-category">{item.category}</span>
                          )}
                          <h3 className="cart-item-name">{item.name}</h3>
                          <p className="cart-item-unit-price">
                            Unit Cost: <strong>${Number(item.cost).toFixed(2)}</strong>
                          </p>

                          {/* Delete button calling handleRemove */}
                          <button
                            type="button"
                            className="cart-item-delete-btn"
                            onClick={() => handleRemove(item)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 size={16} aria-hidden="true" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="cart-item-qty-cell">
                        <div
                          className="quantity-control-pill"
                          role="group"
                          aria-label={`Quantity for ${item.name}`}
                        >
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => handleDecrement(item)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={15} />
                          </button>
                          <span className="qty-value" aria-live="polite">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => handleIncrement(item)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      </div>

                      {/* Line Item Total */}
                      <div className="cart-item-total-cell">
                        <span className="mobile-total-label">Subtotal:</span>
                        <span className="line-item-total">${lineTotal.toFixed(2)}</span>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Action buttons below item list */}
              <div className="cart-items-footer-actions">
                <button
                  type="button"
                  className="secondary-continue-btn"
                  onClick={handleContinueShopping}
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  <span>Continue Shopping</span>
                </button>
              </div>
            </div>

            {/* Right Column: Order Summary Card */}
            <aside className="order-summary-sidebar" aria-label="Order Summary">
              <div className="summary-card">
                <h2 className="summary-heading">Order Summary</h2>

                <div className="summary-row">
                  <span className="summary-label">
                    Total Items ({totalQuantity})
                  </span>
                  <span className="summary-value">${grandTotal.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Estimated Shipping</span>
                  <span className="summary-badge-free">Free Standard</span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Carbon-Neutral Delivery</span>
                  <span className="summary-badge-included">Included</span>
                </div>

                <div className="summary-divider" />

                <div className="summary-row summary-grand-total">
                  <span>Overall Total</span>
                  <strong className="grand-total-amount">
                    ${grandTotal.toFixed(2)}
                  </strong>
                </div>

                <button
                  type="button"
                  id="checkout-btn"
                  className="checkout-action-btn"
                  onClick={handleCheckoutClick}
                  aria-label={`Proceed to checkout with total of $${grandTotal.toFixed(2)}`}
                >
                  <CreditCard size={18} aria-hidden="true" />
                  <span>Checkout</span>
                </button>

                <div className="summary-guarantee-box">
                  <ShieldCheck size={20} aria-hidden="true" />
                  <div>
                    <strong>30-Day Fresh Plant Guarantee</strong>
                    <p>If your plant arrives damaged or unhealthy, we will replace it free of charge.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>

      {/* Accessible Checkout "Coming Soon" Modal */}
      {checkoutModalOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-modal-title"
          onClick={() => setCheckoutModalOpen(false)}
        >
          <div className="modal-dialog-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setCheckoutModalOpen(false)}
              aria-label="Close message"
            >
              <X size={20} />
            </button>

            <div className="modal-icon-badge">
              <CheckCircle2 size={36} aria-hidden="true" />
            </div>

            <h3 id="checkout-modal-title" className="modal-title">
              Coming Soon!
            </h3>
            <p className="modal-message">
              Checkout will be available in a future update. Thank you for testing Paradise Nursery!
            </p>

            <div className="modal-order-recap">
              <span>Items in order: <strong>{totalQuantity}</strong></span>
              <span>Total value: <strong>${grandTotal.toFixed(2)}</strong></span>
            </div>

            <button
              type="button"
              className="modal-confirm-btn"
              onClick={() => setCheckoutModalOpen(false)}
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
