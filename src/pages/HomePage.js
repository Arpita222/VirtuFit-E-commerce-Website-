import React from 'react'; 
import { Link, Route, Routes } from 'react-router-dom';
import '../App.css'; // Main styling
import Header from '../components/Header'; // Header-specific styles
import Footer from '../components/Footer';
import '../pages/HomePage.css';
// Import the necessary FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

// Importing images
import Adidas from '../assets/images/Adidas.png';
import Burberry from '../assets/images/burberry.jpg';
import CalvinKlein from '../assets/images/Calvin_klein.jpg';
import GiorgioArmani from '../assets/images/Giorgio_Armani.jpg';
import Gucci from '../assets/images/Gucci.jpg';
import Hermes from '../assets/images/Hermes_paris.png';
import Levis from '../assets/images/Levi\'s.jpg';
import LouisVuitton from '../assets/images/Louis_Vuitton.png';
import Nike from '../assets/images/Nike.png';
import Prada from '../assets/images/Prada.png';
import Zara from '../assets/images/Zara.png';

const products = [
    { imgSrc: require('../assets/images/f1.jpg'), brand: 'adidas', productName: 'Printed Shirts', price: 699 },
    { imgSrc: require('../assets/images/f2.jpg'), brand: 'Louis Philippe', productName: 'Formal Shirts', price: 599 },
    { imgSrc: require('../assets/images/f3.jpg'), brand: 'Park Avenue', productName: 'Casual Shirts', price: 749 },
    { imgSrc: require('../assets/images/f4.jpg'), brand: 'Levi\'s', productName: 'Denim', price: 1199 },
    { imgSrc: require('../assets/images/f5.jpg'), brand: 'Stylo Bugs', productName: 'One piece Beautiful Ladies', price: 450 },
    { imgSrc: require('../assets/images/f6.jpg'), brand: 'Selvia', productName: 'Printed floral dress', price: 499 },
    { imgSrc: require('../assets/images/f7.jpg'), brand: 'Siril', productName: '3-Piece Suit Set', price: 999 },
    { imgSrc: require('../assets/images/f8.jpg'), brand: 'Zara', productName: 'Regular Fit', price: 1299 }
];

function HomePage() {
    return (
        <div>
            {/* Header Section */}
            <div>
              <Header/>
            </div>

            {/* Hero Section */}
            <section id="hero">
                <h4>Trade-In Offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons & up to 70% off!</p>
                <button>Shop now</button>
            </section>

            {/* Logos Section */}
            <section id="logos">
                <div className="logos-slide">
                    <img src={Adidas} alt="Adidas" />
                    <img src={Burberry} alt="Burberry" />
                    <img src={CalvinKlein} alt="Calvin Klein" />
                    <img src={GiorgioArmani} alt="Giorgio Armani" />
                    <img src={Gucci} alt="Gucci" />
                    <img src={Hermes} alt="Hermes" />
                    <img src={Levis} alt="Levi's" />
                    <img src={LouisVuitton} alt="Louis Vuitton" />
                    <img src={Nike} alt="Nike" />
                    <img src={Prada} alt="Prada" />
                    <img src={Zara} alt="Zara" />
                </div>
            </section>

            {/* Banner Section */}
            <section id="banner" className="section-m1">
                <h4>Coupon Services</h4>
                <h2>Up to <span>70% off</span> on all T-shirts & Accessories</h2>
                <button className="normal">Apply Me!</button>
            </section>

            {/* Featured Products Section */}
            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
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

            {/* Small Banner Section */}
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
                    <button className="white">Collection</button>
                </div>
            </section>

            {/* Footer Section */}
            <Footer/>
        </div>
    );
}

export default HomePage;
