# Paradise Nursery Shopping Application (`e-plantShopping`)

An elegant, responsive houseplant e-commerce web application built for the final course project assignment. Paradise Nursery allows customers to browse plants across curated categories, add green companions to their shopping cart, manage quantities dynamically, and calculate line-item and overall order costs with real-time Redux state management.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features & Rubric Compliance](#features--rubric-compliance)
3. [Technology Stack](#technology-stack)
4. [Folder Structure](#folder-structure)
5. [Required Assignment Files & Submission URLs](#required-assignment-files--submission-urls)
6. [Installation & Setup](#installation--setup)
7. [Running the Application](#running-the-application)
8. [Building for Production](#building-for-production)
9. [How to Rename or Push to `e-plantShopping` on GitHub](#how-to-rename-or-push-to-e-plantshopping-on-github)

---

## Project Overview

Paradise Nursery is an online houseplant shopping boutique designed to make bringing nature home simple and enjoyable. The application features:
- A welcoming **Landing Page** with the exact heading `Welcome to Paradise Nursery`, `.background-image` class styling, and a state-driven `handleGetStartedClick` that dynamically displays the product listing.
- A **Plant Catalog** organized into three distinct categories (Easy-Care Favorites, Statement Plants, Pet-Friendly Picks) containing 18 distinct houseplant entries with images, names, prices/costs, and descriptions.
- A **Centralized Redux Cart** implementing the exact required actions (`addItem`, `removeItem`, `updateQuantity`), independent `addedToCart[plant.name]` button states, and `calculateTotalQuantity()` with the `.cart_quantity_count` indicator badge.
- A dedicated **Shopping Cart Page** rendering via `cart.map()`, with `item.cost`, line-item totals (`calculateTotalCost`), overall grand total (`calculateTotalAmount`), increment/decrement handlers, continue-shopping navigation, and a checkout "Coming Soon!" demo modal.
- A dedicated **About Us Page** enclosed in `.about-us-container` explaining the nursery's purpose, plant offerings, and customer care philosophy.

---

## Features & Rubric Compliance

- **Landing Page State Flow (`App.jsx`)**:
  - Outermost wrapper uses `.app-container`.
  - Prominently displays the exact heading `Welcome to Paradise Nursery`.
  - Includes `.background-image` class with a valid nature image and fallback styling.
  - Implements `const [showProductList, setShowProductList] = useState(false);` and `handleGetStartedClick`.
  - Clicking Get Started toggles state to dynamically render the product listing.
- **Shared Sticky Navigation (`Navbar.jsx`)**:
  - Implements `calculateTotalQuantity()` to sum all plant quantities.
  - Displays dynamic quantity badge with the required `.cart_quantity_count` class.
  - Provides working navigation to Home, Plants, About Us, and Cart.
- **Plant Catalog (`ProductList.jsx`)**:
  - 3 categories, each with 6 unique plants (18 plants total).
  - Every card features a thumbnail, name, description, and price/cost.
  - Add to Cart button dispatches `addItem(product)`.
  - Button disabled state is controlled directly by `addedToCart[plant.name]`.
  - Removing an item from the cart automatically re-enables its Add to Cart button.
  - Includes `calculateTotalQuantity()` and `.cart_quantity_count` indicator.
- **Redux Cart Slice (`CartSlice.jsx`)**:
  - Exports exact required reducer actions: `addItem`, `removeItem`, `updateQuantity`.
  - Maintains clean `items` collection with `cost`, `price`, `quantity`, and product metadata.
  - Updates quantities consistently; automatically removes items when quantity drops to zero.
- **Shopping Cart Page (`CartItem.jsx`)**:
  - Iterates over cart items using `cart.map()`.
  - Displays `item.cost` as unit cost and `item.quantity` as quantity.
  - Calculates line item subtotal via `calculateTotalCost(item)` (`item.cost * item.quantity`).
  - Calculates grand total via `calculateTotalAmount()`.
  - `handleIncrement(item)` updates state through `updateQuantity`.
  - `handleDecrement(item)` updates state through `updateQuantity` and safely removes item at zero.
  - `handleRemove(item)` removes item through `removeItem`.
  - "Continue Shopping" button returns user to plant catalog.
  - "Checkout" button displays a "Coming Soon!" notification.
  - Helpful empty-cart view when no items exist.
- **About Us Page (`AboutUs.jsx`)**:
  - Uses exact required outer container class `.about-us-container`.
  - Details mission, experience-level plant selections, and nursery standards.

---

## Technology Stack

- **React 18**: Modern component architecture and hooks
- **Vite 6**: Fast development server and build tool
- **JavaScript & JSX**: Clear, beginner-friendly frontend logic
- **React Router DOM 6**: Single-page application client-side routing
- **Redux Toolkit & React Redux**: Centralized state management for shopping cart
- **Vanilla CSS3**: Modern botanical design tokens, CSS Grid, Flexbox, responsive typography, and accessible `:focus-visible` outlines
- **Lucide React**: Clean botanical and e-commerce vector icons

---

## Folder Structure

```
e-plantShopping/
├── README.md
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── app/
    │   └── store.js
    ├── components/
    │   └── Navbar.jsx
    ├── data/
    │   └── plants.js
    ├── features/
    │   └── cart/
    │       └── CartSlice.jsx
    └── pages/
        ├── AboutUs.jsx
        ├── ProductList.jsx
        └── CartItem.jsx
```

---

## Required Assignment Files & Submission URLs

The assignment rubric requires public submission URLs pointing to the `e-plantShopping` repository on the `main` branch:

1. **`README.md`**:  
   `https://github.com/ronitjain7/e-plantShopping/blob/main/README.md`
2. **`src/pages/AboutUs.jsx`**:  
   `https://github.com/ronitjain7/e-plantShopping/blob/main/src/pages/AboutUs.jsx`
3. **`src/App.css`**:  
   `https://github.com/ronitjain7/e-plantShopping/blob/main/src/App.css`
4. **`src/App.jsx`**:  
   `https://github.com/ronitjain7/e-plantShopping/blob/main/src/App.jsx`
5. **`src/features/cart/CartSlice.jsx`**:  
   `https://github.com/ronitjain7/e-plantShopping/blob/main/src/features/cart/CartSlice.jsx`
6. **`src/pages/ProductList.jsx`**:  
   `https://github.com/ronitjain7/e-plantShopping/blob/main/src/pages/ProductList.jsx`
7. **`src/pages/CartItem.jsx`**:  
   `https://github.com/ronitjain7/e-plantShopping/blob/main/src/pages/CartItem.jsx`

---

## Installation & Setup

1. Open your terminal in the project directory (`e-plantShopping`).
2. Install project dependencies:

```bash
npm install
```

---

## Running the Application

To start the local Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173/` in your browser.

---

## Building for Production

To test and compile the production bundle:

```bash
npm run build
```

The compiled output will be generated in the `dist/` directory with zero errors.

---

## How to Rename or Push to `e-plantShopping` on GitHub

The grader requires your repository to be named `e-plantShopping`. You can easily satisfy this in one of two ways:

### Option A: Rename Existing GitHub Repository (Recommended — 30 seconds)
1. Open your browser and go to your current repository:  
   `https://github.com/ronitjain7/paradise-nursery-project`
2. Click on **Settings** (tab on the top right of the repository page).
3. Under the **General** section, locate the **Repository name** field.
4. Change `paradise-nursery-project` to **`e-plantShopping`**.
5. Click **Rename**.
6. In your local terminal, update your local git remote URL:
   ```bash
   git remote set-url origin https://github.com/ronitjain7/e-plantShopping.git
   git add .
   git commit -m "Update code to match assignment grading feedback"
   git push -u origin main
   ```

### Option B: Create a New GitHub Repository Named `e-plantShopping`
1. Go to `https://github.com/new`.
2. Name the repository **`e-plantShopping`** and set visibility to **Public**.
3. In your local terminal, run:
   ```bash
   git remote set-url origin https://github.com/ronitjain7/e-plantShopping.git
   git add .
   git commit -m "Update code to match assignment grading feedback"
   git push -u origin main
   ```
