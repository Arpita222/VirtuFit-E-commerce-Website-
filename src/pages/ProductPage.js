// src/pages/ProductPage.js
import React from 'react';
import '../App.css';

import f1Image from '../assets/images/f1.jpg';  // Import images
import f2Image from '../assets/images/f2.jpg';
import f3Image from '../assets/images/f3.jpg';
import f4Image from '../assets/images/f4.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = () => {
    return (
        <div>
            <Header/>

            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={f1Image} width="100%" id="MainImg" alt="" />
                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src={f1Image} width="100%" className="small-img" alt="" />
                        </div>
                        <div className="small-img-col">
                            <img src={f2Image} width="100%" className="small-img" alt="" />
                        </div>
                        <div className="small-img-col">
                            <img src={f3Image} width="100%" className="small-img" alt="" />
                        </div>
                        <div className="small-img-col">
                            <img src={f4Image} width="100%" className="small-img" alt="" />
                        </div>
                    </div>
                </div>

                <div className="single-pro-details">
                    <h6>Home / T-Shirt</h6>
                    <h4>Men's Fashion T Shirt</h4>
                    <h2>599</h2>
                    <select>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                    <input type="number" value="1" />
                    <button className="normal">Add To Cart</button>
                    <h4>Product Details</h4>
                    <span>
                        The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz per sq. yd. fabric constructed from 100% cotton, 
                        this classic fit preshrunk jersey knit provides unmatched comfort with each wear.
                    </span>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default ProductPage;
