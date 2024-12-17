import React, { useState } from "react";
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../pages/BlogPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Static imports for images
import hoodieImage from '../assets/images/hoodies.jpg';
import b2Image from '../assets/images/b2.jpg';
import b3Image from '../assets/images/b3.jpg';
import b4Image from '../assets/images/b4.jpg';

const BlogPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Blog product data
  const products = [
    { 
      imgSrc: hoodieImage, 
      brand: 'VirtuFit', 
      productName: 'The Cotton-Jersey Zip-Up Hoodies', 
      description: 'The Cotton-Jersey Zip-Up Hoodie offers the perfect balance between comfort and style...', 
      date: '13/01'
    },
    { 
      imgSrc: b2Image, 
      brand: 'VirtuFit', 
      productName: 'Excellent range of fashion styles', 
      description: 'At VirtuFit, explore an excellent range of fashion styles...', 
      date: '13/04'
    },
    { 
      imgSrc: b3Image, 
      brand: 'VirtuFit', 
      productName: 'Must-have Skater Girl items', 
      description: 'Looking to nail the skater girl vibe? VirtuFit has all the must-have pieces...', 
      date: '12/01'
    },
    { 
      imgSrc: b4Image, 
      brand: 'VirtuFit', 
      productName: 'Runway-Inspired Trends', 
      description: 'Stay ahead of the fashion game with VirtuFits runway-inspired trends...', 
      date: '16/01'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <Header/>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>

      <section id="blog">
        {products.map((product, index) => (
          <div className="blog-box" key={index}>
            <div className="blog-img">
              <img src={product.imgSrc} alt={`Image of ${product.productName}`} />
            </div>
            <div className="blog-details">
              <h4>{product.productName}</h4>
              <p>{product.description}</p>
              <a href="#">Continue Reading</a>
            </div>
            <h1>{product.date}</h1>
          </div>
        ))}
      </section>

      <section id="pagination" className="section-p1">
        <button aria-label="Page 1" className="page-btn">1</button>
        <button aria-label="Page 2" className="page-btn">2</button>
        <button aria-label="Next Page" className="next-btn">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>

      <Footer/>
    </div>
  );
};

export default BlogPage;
