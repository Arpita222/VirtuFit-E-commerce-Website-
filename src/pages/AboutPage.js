import React from 'react';
import '../App.css';  // Ensure this is the correct path for your App.css in the root of the src folder
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/AboutPage.css';

const AboutPage = () => {
    return (
        <div style={{ backgroundColor: "#fff" }}>
            {/* Header Section */}
            <Header />

            {/* Page Header */}
            <section id="page-header" className="about-header">
                <h2>#KnowUs</h2>
                <p>"Discover VirtuFit: your destination for finding great clothing."</p>
            </section>

            {/* About Us Section */}
            <section id="about-head" className="section-p1">
                <img src={require('../assets/images/a6.jpg')} alt="About VirtuFit" />
                <div>
                    <h2>Who We Are?</h2>
                    <p>Welcome to VirtuFit! Launched in 2024, we are excited to bring you over 100 brands, making fashion accessible to every Indian home. Our mission is to help you discover the best clothing at reasonable prices, catering to a variety of styles and preferences. From western wear to traditional Indian attire, and casual options, we have something for everyone. We proudly offer a curated selection that includes established national brands, international names, luxury items, and emerging designers. At VirtuFit, we celebrate diverse consumer journeys, ensuring you find fashion that fits your unique style. Join us in redefining your wardrobe today!</p>
                    <p>Discover diverse fashion at VirtuFit, your one-stop shop for 100+ brands, including national and international labels, launched in 2024!</p>
                    <br />
                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
                        Discover diverse fashion at VirtuFit, your one-stop shop for 100+ brands, including national and international labels, launched in 2024!
                    </marquee>
                </div>
            </section>

            {/* Features Section */}
            <section id="feature" className="section-p1">
                <h1>Our Promise</h1>
                <div className="fe-box">
                    <img src={require('../assets/images/f1.png')} alt="Free Shipping" />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src={require('../assets/images/f2.png')} alt="Speedy Delivery" />
                    <h6>Speedy Delivery</h6>
                </div>
                <div className="fe-box">
                    <img src={require('../assets/images/f6.png')} alt="24/7 Support" />
                    <h6>24/7 Support</h6>
                </div>
                <div className="fe-box">
                    <img src={require('../assets/images/f3.png')} alt="Easy Returns" />
                    <h6>Easy Returns</h6>
                </div>
            </section>

            {/* Moment Section */}
            <section id="moment">
                <div className="moment1">
                    <h1>FIND YOUR MOMENT</h1>
                    <p>You know that moment when you land the perfect pair of jeans? What about that moment when you find a dress that hugs you in all the right places?</p>
                    <button>Get in touch</button>
                </div>
                <div className="moment2">
                    <img src={require('../assets/images/moment1.avif')} alt="Moment 1" />
                    <img src={require('../assets/images/moment2.avif')}alt="Moment 2" />
                    <img src={require('../assets/images/moment3.avif')} alt="Moment 3" />
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default AboutPage;
