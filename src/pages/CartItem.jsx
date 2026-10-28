import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from '../features/cart/CartSlice.jsx';
import { FALLBACK_PLANT_IMAGE } from '../data/plants.js';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartCount);
  const grandTotal = useSelector(selectCartTotal);

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const handleCheckoutClick = () => {
    setCheckoutModalOpen(true);
  };

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

          <Link to="/plants" className="continue-shopping-link">
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Empty Cart State */}
        {cartItems.length === 0 ? (
          <div className="empty-cart-card">
            <div className="empty-cart-icon-wrapper" aria-hidden="true">
              <ShoppingBag size={48} />
            </div>
            <h2 className="empty-cart-title">Your shopping cart is empty</h2>
            <p className="empty-cart-text">
              Looks like you haven't added any botanical wonders to your cart yet. Explore our curated categories to discover the perfect plant for your home.
            </p>
            <Link to="/plants" className="explore-plants-btn">
              <span>Browse Plants Catalog</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <div className="cart-content-grid">
            {/* Left Column: Cart Items List */}
            <div className="cart-items-section">
              <div className="cart-items-header-row">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Total</span>
              </div>

              <div className="cart-items-list" role="list">
                {cartItems.map((item) => {
                  const lineTotal = item.price * item.quantity;

                  return (
                    <article key={item.id} className="cart-item-card" role="listitem">
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
                            Unit Price: <strong>${item.price.toFixed(2)}</strong>
                          </p>

                          <button
                            type="button"
                            className="cart-item-delete-btn"
                            onClick={() => dispatch(removeFromCart(item.id))}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 size={16} aria-hidden="true" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="cart-item-qty-cell">
                        <div className="quantity-control-pill" role="group" aria-label={`Quantity for ${item.name}`}>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
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
                            onClick={() => dispatch(increaseQuantity(item.id))}
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
                <Link to="/plants" className="secondary-continue-btn">
                  <ArrowLeft size={18} aria-hidden="true" />
                  <span>Continue Shopping</span>
                </Link>
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