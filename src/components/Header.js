import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink for active link styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';  // Import the icons

import './Header.css';

function Header() {
    console.log("Header Component Rendered");

    return (
        <div>
            {/* Header Section */}
            <header id="header">
                <a className="logo">VirtuFit</a>
                <nav id="navbar">
                    <ul>
                        <li><NavLink to="/men" activeClassName="active">Men</NavLink></li>
                        <li><NavLink to="/women" activeClassName="active">Women</NavLink></li>
                        <li><NavLink to="/kids" activeClassName="active">Kids</NavLink></li>
                        <input className="search" placeholder="Search for products, brands and more" />
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
                        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                        <li id="lg-bag"><NavLink to="/cart"><FontAwesomeIcon icon={faShoppingBag} /></NavLink></li>  {/* Use icon here */}
                        <li id="profile"><NavLink to="/profile"><FontAwesomeIcon icon={faUser} /></NavLink></li>  {/* Use icon here */}
                    </ul>
                </nav>
                <div id="mobile">
                    <NavLink to="/cart"><FontAwesomeIcon icon={faShoppingBag} /></NavLink>
                    <i id="bar" className="fas fa-outdent"></i>
                </div>
            </header>
        </div>
    );
}

export default Header;
