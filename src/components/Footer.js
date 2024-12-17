// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../pages/HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

// Import images
import bannerImage from '../assets/images/banner1.jpeg';  // Correct path based on your folder structure

function Footer() {
    console.log("Footer Component Rendered");
    return (
        <div>

             {/* Newsletter Section */}
             <section id="newsletter" className="section-p1">
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers</span>.</p>
                </div>
                <div className="form">
                    <input type="email" placeholder="Your email address" />
                    <button className="normal">Sign Up</button>
                </div>
            </section>  
            
            {/* Header Section */}
            <footer>
                <div className="col">
                    <h2 className="logo">VirtuFit</h2>
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> BRACT's Vishwakarma Institute of Information Technology</p>
                    <p><strong>Phone:</strong> +91 9511613033</p>
                    <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                    <div className="follow">
                        <h4>Follow us</h4>
                        <div className="icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faPinterest} />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <Link to="#">Delivery Information</Link>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Terms & Conditions</Link>
                    <Link to="#">Contact Us</Link>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <Link to="#">Sign In</Link>
                    <Link to="#">View Cart</Link>
                    <Link to="#">My Wishlist</Link>
                    <Link to="#">Track My Order</Link>
                    <Link to="#">Help</Link>
                </div>
            
            <div className="col install">
                <h4>Help</h4>
                <a href="#">Shipping & Return Policy</a>
                <a href="#">Help Center</a>
            </div>
            <div id="use">
                <div className="apps">
                    <h4>DOWNLOAD OUR APP</h4>
                    <img src={require('../assets/images/appstore.png')} alt="App Store" />
                    <img src={require('../assets/images/googleplay.png')} alt="Google Play" />
                    
                </div>
                <div className="payment">
                    <h4>Secured Payment Gateways</h4>
                    <img src={require('../assets/images/visa.png')} alt="Visa" />
                    <img src={require('../assets/images/mastercard.png')} alt="Mastercatd" />
                </div>
            </div>


            </footer>
            <section id="thanks">
            <div className="thanks">
                <p>Made with &hearts; by VirtuFit</p>
                <p>&#169; 2024 VirtuFit Fashion Ltd. All Rights Reserved</p>
            </div>
        </section>

          
        </div>
    );
}

export default Footer;
