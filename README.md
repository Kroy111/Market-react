# Market-react

Education React online-store project. 

## About

Market-react is a single-page application(SPA) build to practice working with React, hook, routing, css modules and state management. Product data is fetched from the public API [fakestoreapi.com](https://fakestoreapi.com/).


## Features 
- Product catalog with detail product pages. 
- Cart witch add/remove functionality.
- Checkout page.
- News page.
- Responsive design. 

## Project structure
```
├── public/
├── src/
│   ├── assets/                # Static assets (images, icons, etc.)
│   ├── components/            # Reusable components and styles
│   │   ├── common/
│   │   ├── shop/
│   │   ├── cart/
│   │   └── ...
│   ├── pages/                 # Pages (Shop, Cart, News, ErrorPage)
│   ├── routers/               # Application routes
│   ├── style.css              # Global styles
│   └── main.jsx               # App entry point
├── tests/                     # Tests
├── package.json
├── vite.config.js
└── ...
```
## Technologies Used

- React
- React Router
- CSS Modules / plain CSS
- Vite
- [fakestoreapi.com](https://fakestoreapi.com/) — test data provider
- (optional) ESLint, Biome, other code quality tools


## Getting started

1. Install dependencies:
    ```bash
    npm install
    ```
2. Run the development server:
    ```bash
    npm run dev
    ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

Thank you [theodinproject.com](https://www.theodinproject.com/) <3 <3 <3


> This is a pet project for learning purposes only.