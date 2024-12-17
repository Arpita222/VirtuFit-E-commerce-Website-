import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/ShopPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Sample Product Data
const products = [
    { imgSrc: require('../assets/images/f1.jpg'), brand: 'adidas', productName: 'Printed Shirts', price: 699 },
    { imgSrc: require('../assets/images/f2.jpg'), brand: 'Nike', productName: 'Running Shoes', price: 1999 },
    { imgSrc: require('../assets/images/f3.jpg'), brand: 'Puma', productName: 'Sports Wear', price: 1499 },
    { imgSrc: require('../assets/images/f4.jpg'), brand: 'Levi\'s', productName: 'Denim Jeans', price: 2299 },
    { imgSrc: require('../assets/images/f5.jpg'), brand: 'Zara', productName: 'Summer T-Shirts', price: 799 },
    { imgSrc: require('../assets/images/f6.jpg'), brand: 'Selvia', productName: 'Printed Floral Dress', price: 499 },
    { imgSrc: require('../assets/images/f7.jpg'), brand: 'Siril', productName: '3-Piece Suit Set', price: 999 },
    { imgSrc: require('../assets/images/f8.jpg'), brand: 'Zara', productName: 'Regular Fit', price: 1299 },
];

const Product = ({ imgSrc, brand, productName, price }) => {
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

const ShopPage = () => {
    return (
        <div>
            <Header />

            <section id="page-header">
                <h2>#stayhome</h2>
                <p>Save more with coupons & up to 70% off!</p>
            </section>

            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            imgSrc={product.imgSrc}
                            brand={product.brand}
                            productName={product.productName}
                            price={product.price}
                        />
                    ))}
                </div>
            </section>
            <section id="pagination" className="section-p1">
            <button aria-label="Page 1" className="page-btn">1</button>
            <button aria-label="Page 2" className="page-btn">2</button>
            <button aria-label="Next Page" className="next-btn">
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
</section>


            <Footer />
        </div>
    );
};

export default ShopPage;
