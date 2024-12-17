import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome

                  
// Import all the page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import KidsPage from './pages/KidsPage';
import MenPage from './pages/MenPage';
import ProductPage from './pages/ProductPage'; 
import ProfilePage from './pages/ProfilePage';
import ShopPage from './pages/ShopPage';
import WomenPage from './pages/WomenPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/women" element={<WomenPage />} />
      </Routes>
    </Router>
  );
}

export default App;

