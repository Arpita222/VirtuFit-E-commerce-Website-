import React from "react";
import "../App.css"; // Importing the general app styles
import "../pages/MenPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";

const products = [
  { imgSrc: require("../assets/images/men1.avif"), brand: "Adidas", productName: "Printed Shirts", price: 699 },
  { imgSrc: require("../assets/images/men2.avif"), brand: "Louis Philippe", productName: "Formal Shirts", price: 599 },
  { imgSrc: require("../assets/images/men3.avif"), brand: "Park Avenue", productName: "Casual Shirts", price: 749 },
  { imgSrc: require("../assets/images/men4.avif"), brand: "Levi's", productName: "Denim", price: 1199 },
  { imgSrc: require("../assets/images/men5.avif"), brand: "Stylo Bugs", productName: "Beautiful Ladies One Piece", price: 450 },
  { imgSrc: require("../assets/images/men6.avif"), brand: "Selvia", productName: "Printed Floral Dress", price: 499 },
  { imgSrc: require("../assets/images/men7.avif"), brand: "Siril", productName: "3-Piece Suit Set", price: 999 },
  { imgSrc: require("../assets/images/men8.avif"), brand: "Zara", productName: "Regular Fit", price: 1299 },
  { imgSrc: require("../assets/images/men9.avif"), brand: "Zara", productName: "Regular Fit", price: 1299 },
  { imgSrc: require("../assets/images/men10.avif"), brand: "Zara", productName: "Regular Fit", price: 1299 },
  { imgSrc: require("../assets/images/men11.avif"), brand: "Zara", productName: "Regular Fit", price: 1299 },
  { imgSrc: require("../assets/images/men12.avif"), brand: "Zara", productName: "Regular Fit", price: 1299 },

];

const MenPage = () => {
  return (
    <div>
      <Header />

      <section id="men-header">
        {/* Uncomment if needed */}
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
                  {[...Array(5)].map((_, starIndex) => (
                    <FontAwesomeIcon key={starIndex} icon={faStar} style={{ color: "gold" }} />
                  ))}
                </div>
                <h4>&#8377; {product.price}</h4>
              </div>
              <a href="#">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box-men">
          <h1>Crazy Deals</h1>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The best classic dress is on sale at VirtuFit</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2-men">
          <h1>Welcome Winter!</h1>
          <h2>Season Sale</h2>
          <span>Shop classic styles at VirtuFit</span>
          <button className="white">Collection</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenPage;

