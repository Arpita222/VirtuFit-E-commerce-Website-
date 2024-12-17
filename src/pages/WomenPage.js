import React from "react";
import '../App.css';
import '../pages/WomenPage.css';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
// Import the necessary FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const products = [
  { imgSrc: require('../assets/images/lady1.avif'), brand: 'adidas', productName: 'Printed Shirts', price: 699 },
  { imgSrc: require('../assets/images/lady2.avif'), brand: 'Louis Philippe', productName: 'Formal Shirts', price: 599 },
  { imgSrc: require('../assets/images/lady3.avif'), brand: 'Park Avenue', productName: 'Casual Shirts', price: 749 },
  { imgSrc: require('../assets/images/lady4.avif'), brand: 'Levi\'s', productName: 'Denim', price: 1199 },
  { imgSrc: require('../assets/images/lady5.avif'), brand: 'Stylo Bugs', productName: 'One piece Beautiful Ladies', price: 450 },
  { imgSrc: require('../assets/images/lady6.avif'), brand: 'Selvia', productName: 'Printed floral dress', price: 499 },
  { imgSrc: require('../assets/images/lady7.avif'), brand: 'Siril', productName: '3-Piece Suit Set', price: 999 },
  { imgSrc: require('../assets/images/lady8.avif'), brand: 'Zara', productName: 'Regular Fit', price: 1299 },
  { imgSrc: require('../assets/images/lady9.avif'), brand: 'Zara', productName: 'Regular Fit', price: 1299 },
  { imgSrc: require('../assets/images/lady10.avif'), brand: 'Zara', productName: 'Regular Fit', price: 1299 },
  { imgSrc: require('../assets/images/lady11.avif'), brand: 'Zara', productName: 'Regular Fit', price: 1299 },
  { imgSrc: require('../assets/images/lady12.avif'), brand: 'Zara', productName: 'Regular Fit', price: 1299 },
];

const WomenPage = () => {
  return (
    <div>
      <Header />

      <section id="women-header">
        {/* Uncomment these lines if you want them to appear */}
        {/* <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p> */}
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <div className="pro-container">
          {products.map((product, index) => (
            <div className="pro" key={index}>
              <img src={product.imgSrc} alt={product.productName} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.productName}</h5>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
                </div>
                <h4>&#8377; {product.price}</h4>
              </div>
              <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
            </div>
          ))}
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h1>crazy deals</h1>
          <h2>buy 1 get 1 free</h2>
          <span>The best classic dress is on sale at VirtuFit</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h1>Welcome Winter!</h1>
          <h2>Season Sale</h2>
          <span>Shop classic styles at VirtuFit</span>
          <button className="white">Shop Now</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WomenPage;
