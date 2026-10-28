# Paradise Nursery Shopping Application

An elegant, responsive houseplant e-commerce web application built for the final course project assignment. Paradise Nursery allows customers to browse plants across curated categories, add green companions to their shopping cart, manage quantities dynamically, and calculate line-item and overall order costs with real-time Redux state management.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Folder Structure](#folder-structure)
5. [Required Assignment Files](#required-assignment-files)
6. [Installation & Setup](#installation--setup)
7. [Running the Application](#running-the-application)
8. [Building for Production](#building-for-production)
9. [Diagnosis & Fix for the White-Screen Issue](#diagnosis--fix-for-the-white-screen-issue)
10. [Submission & GitHub File URLs Guide](#submission--github-file-urls-guide)

---

## Project Overview

Paradise Nursery is an online houseplant shopping boutique designed to make bringing nature home simple and enjoyable. The application features:
- A welcoming **Landing Page** with botanical storytelling and a direct "Get Started" call to action.
- A **Plant Catalog** organized into three distinct categories (Easy-Care Favorites, Statement Plants, Pet-Friendly Picks) containing 18 distinct houseplant entries with images, names, prices, and descriptions.
- A **Centralized Redux Cart** supporting adding items, incrementing and decrementing quantities, safe removal at zero, independent button states, and live cart count badges.
- A dedicated **Shopping Cart Page** with per-item calculations, order summaries, a continue-shopping workflow, and an accessible checkout demo message.
- A dedicated **About Us Page** highlighting the nursery's mission, values, and plant care philosophy.

---

## Features

- **Botanical Hero Landing Page**: Prominently introduces Paradise Nursery, welcoming description, high-contrast overlay on a nature-inspired background with fallback background color, and a React Router "Get Started" button.
- **Shared Sticky Navigation**: Live cart counter badge calculated directly from Redux state (sum of all plant quantities), brand mark, and active route indicators.
- **Categorized Catalog**:
  - *Easy-Care Favorites* (6 plants): Snake Plant, ZZ Plant, Golden Pothos, Spider Plant, Peace Lily, Jade Plant.
  - *Statement Plants* (6 plants): Monstera Deliciosa, Rubber Tree, Bird of Paradise, Fiddle Leaf Fig, Areca Palm, Dragon Tree.
  - *Pet-Friendly Picks* (6 plants): Boston Fern, Parlor Palm, Rattlesnake Calathea, Prayer Plant, Zebra Haworthia, Watermelon Peperomia.
- **Smart Add-to-Cart Behavior**:
  - When a plant is added, it is stored in Redux with initial quantity `1`.
  - Its button immediately updates to "Added to Cart" and becomes disabled while in the cart.
  - Other plant cards remain independently enabled.
  - If removed from the cart, the button is re-enabled automatically.
- **Full Shopping Cart Controls**:
  - Line total dynamic calculation: `unit price × quantity`.
  - Overall cart total: `sum of each item's price × quantity`.
  - `+` increases quantity and updates navbar count & totals.
  - `-` decreases quantity; automatically removes item if quantity reaches 1.
  - "Remove" deletes the selected plant from the cart.
  - "Continue Shopping" links back to `/plants`.
  - "Checkout" presents the required demonstration notification: `"Coming Soon! Checkout will be available in a future update."`
  - Friendly empty cart state with direct link to explore plants.

---

## Technology Stack

- **React 18**: Component-based UI architecture
- **Vite 6**: Fast frontend tooling and dev server
- **JavaScript & JSX**: Clear, beginner-friendly frontend logic
- **React Router DOM 6**: Single-page application client routing without page reloads
- **Redux Toolkit & React Redux**: Centralized state management for shopping cart
- **Vanilla CSS3**: Modern botanical design tokens, CSS Grid, Flexbox, responsive typography, and accessible `:focus-visible` outlines
- **Lucide React**: Clean botanical and e-commerce vector icons

---

## Folder Structure

```
paradise-nursery/
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

## Required Assignment Files

The course assignment specifically requires the following seven files at these exact paths:

1. `README.md`
2. `src/pages/AboutUs.jsx`
3. `src/App.css`
4. `src/App.jsx`
5. `src/features/cart/CartSlice.jsx`
6. `src/pages/ProductList.jsx`
7. `src/pages/CartItem.jsx`

---

## Installation & Setup

1. Clone or download your repository to your local computer.
2. Open your terminal in the project directory (`paradise-nursery`).
3. Install project dependencies:

```bash
npm install
```

---

## Running the Application

To start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Then open the local URL in your web browser:
`http://localhost:5173/`

---

## Building for Production

To test and compile the production bundle:

```bash
npm run build
```

The compiled output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## Diagnosis & Fix for the White-Screen Issue

### Root Cause
When running the development server (`npm run dev`), the browser encountered a white screen with the console error:
`ReferenceError: React is not defined at App (App.jsx)`.

This happened because:
1. The project was missing a `vite.config.js` configuration file. Although `@vitejs/plugin-react` was installed in `package.json`, Vite was running without the React plugin, causing esbuild's default transform to look for global `React.createElement` instead of using the automatic JSX runtime (`react/jsx-runtime`).
2. Several component files did not include explicit `import React from 'react';` imports.

### Solution Applied
1. Created `vite.config.js` in the root directory importing and activating `@vitejs/plugin-react`:
   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
   });
   ```
2. Added `import React from 'react';` and React Router `<Link>` / `<NavLink>` imports across all JSX components to eliminate full-page reloads and prevent any runtime scope errors.
3. Verified the fix directly in both the development server and production build.

---

## Submission & GitHub File URLs Guide

When submitting your assignment, follow these steps to upload your repository to GitHub and collect the 7 required file URLs:

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Complete Paradise Nursery houseplant shopping application"
   ```
2. **Push to your GitHub account**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. **Collect your 7 assignment URLs**:
   Navigate to each file on GitHub, click the file, and copy the browser URL:
   - `https://github.com/<your-username>/<your-repo-name>/blob/main/README.md`
   - `https://github.com/<your-username>/<your-repo-name>/blob/main/src/pages/AboutUs.jsx`
   - `https://github.com/<your-username>/<your-repo-name>/blob/main/src/App.css`
   - `https://github.com/<your-username>/<your-repo-name>/blob/main/src/App.jsx`
   - `https://github.com/<your-username>/<your-repo-name>/blob/main/src/features/cart/CartSlice.jsx`
   - `https://github.com/<your-username>/<your-repo-name>/blob/main/src/pages/ProductList.jsx`
   - `https://github.com/<your-username>/<your-repo-name>/blob/main/src/pages/CartItem.jsx`
