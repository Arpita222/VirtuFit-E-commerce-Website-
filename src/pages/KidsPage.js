import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/KidsPage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const KidProduct = ({ imgSrc, brand, productName, price }) => {
  return (
    <div className="pro">
      <img src={imgSrc} alt={productName} />
      <div className="des">
        <span>{brand}</span>
        <h5>{productName}</h5>
        <div className="star">
        <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
        <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} />
        </div>
        <h4>&#8377; {price}</h4>
      </div>
      <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
    </div>
  );
};

const KidsPage = () => {
  return (
    <div>
       <Header/>

      <section id="kids-header">
        {/* Empty header section */}
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <div className="pro-container">
          <KidProduct imgSrc={require('../assets/images/kid1.avif')}brand="adidas" productName="Printed Shirts" price="699" />
          <KidProduct imgSrc={require('../assets/images/kid2.avif')} brand="Louis Philippe" productName="Formal Shirts" price="599" />
          <KidProduct imgSrc={require('../assets/images/kid3.avif')} brand="Park Avenue" productName="Casual Shirts" price="749" />
          <KidProduct imgSrc={require('../assets/images/kid4.avif')} brand="Levi's" productName="Denim" price="1199" />
          <KidProduct imgSrc={require('../assets/images/kid5.avif')} brand="Stylo Bugs" productName="One Piece Beautiful Ladies" price="450" />
          <KidProduct imgSrc={require('../assets/images/kid6.avif')} brand="Selvia" productName="Printed Floral Dress" price="499" />
          <KidProduct imgSrc={require('../assets/images/kid7.avif')} brand="Siril" productName="3-Piece Suit Set" price="999" />
          <KidProduct imgSrc={require('../assets/images/kid8.avif')} brand="Zara" productName="Regular Fit" price="1299" />
          <KidProduct imgSrc={require('../assets/images/kid9.avif')} brand="Zara" productName="Regular Fit" price="1299" />
          <KidProduct imgSrc={require('../assets/images/kid10.avif')} brand="Zara" productName="Regular Fit" price="1299" />
          <KidProduct imgSrc={require('../assets/images/kid11.avif')} brand="Zara" productName="Regular Fit" price="1299" />
          <KidProduct imgSrc={require('../assets/images/kid12.avif')} brand="Zara" productName="Regular Fit" price="1299" />
        </div>
      </section>

      <section id="sm-banner" className="section-p1">
        <div className="banner-box-kid">
          <h1>Crazy Deals</h1>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The best classic dress is on sale at VirtuFit</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2-kid">
          <h1>Welcome Winter!</h1>
          <h2>Season Sale</h2>
          <span>Shop classic styles at VirtuFit</span>
          <button className="white">Collection</button>
        </div>
      </section>

     <Footer/>
     
    </div>
  );
};

export default KidsPage;
