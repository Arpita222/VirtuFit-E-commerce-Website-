import React, { useState } from "react";
import '../App.css';
import '../pages/CartPage.css';
import '../components/Header.js';
import '../components/Header.css';
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'; // Trash icon
import Footer from "../components/Footer.js";

import f1 from '../assets/images/f1.jpg'
import f2 from '../assets/images/f2.jpg'
import f3 from '../assets/images/f3.jpg'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Cartoon Astronaut T-Shirts",
      price: 699,
      quantity: 1,
      image: f1, // Ensure correct path
    },
    {
      id: 2,
      name: "Cartoon Astronaut T-Shirts",
      price: 699,
      quantity: 1,
      image: f2, // Ensure correct path
    },
    {
      id: 3,
      name: "Cartoon Astronaut T-Shirts",
      price: 699,
      quantity: 1,
      image: f3, // Ensure correct path
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <Header />

      {/* Cart Section */}
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>
                  <a href="#" onClick={() => handleRemoveItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} /> {/* Trash icon */}
                  </a>
                </td>
                <td><img src={item.image} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>&#8377; {item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                </td>
                <td>&#8377; {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Cart Totals Section */}
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>&#8377; {getCartSubtotal()}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>&#8377; {getCartSubtotal()}</strong></td>
            </tr>
          </table>
          <button className="normal">Proceed to Checkout</button>
        </div>
      </section>

      {/* Footer Section */}
     <Footer/>
    </div>
  );
};

export default CartPage;
