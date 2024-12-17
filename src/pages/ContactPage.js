import React from 'react';
import '../App.css';
import '../components/Header';
import '../components/Footer';
import '../pages/ContactPage.css';
// Import the necessary FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from FontAwesome library
import { faMap, faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPage() {
  return (
    <div>
      <Header/>

      <section id="page-header" className="about-header">
        <h2>#let's Talk</h2>
        <p>Leave a Message, We Love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
      <div className="details">
  <span>GET IN TOUCH</span>
  <h2>Visit one of our agency locations or contact us today</h2>
  <h3>Head Office</h3>
  <div>
  <ul>
      <li>
        <FontAwesomeIcon icon={faMap} style={{ fontSize: '14px', marginRight: '10px' }} />  {/* Smaller icon size */}
        <p>Vishwakarma Institute of Information Technology</p>
      </li>
      <li>
        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '14px', marginRight: '10px' }} />  {/* Smaller icon size */}
        <p>vaishnavi.22211188@viit.ac.in</p>
      </li>
      <li>
        <FontAwesomeIcon icon={faPhone} style={{ fontSize: '14px', marginRight: '10px' }} />  {/* Smaller icon size */}
        <p>9511613033</p>
      </li>
      <li>
        <FontAwesomeIcon icon={faClock} style={{ fontSize: '14px', marginRight: '10px' }} />  {/* Smaller icon size */}
        <p>Monday to Saturday: 9.00am to 16.00pm</p>
      </li>
    </ul>
  </div>
</div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5303055309737!2d73.885453!3d18.459623200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaf47d15ce33%3A0x8098faf1b47cc4ba!2sVishwakarma%20Institute%20of%20Information%20Technology%2C%20Survey%20No.%202%2F3%2F4%2C%20VIM%20Private%20Rd%2C%20Kapil%20Nagar%2C%20Kondhwa%2C%20Pune%2C%20Maharashtra%20411048!5e0!3m2!1sen!2sin!4v1727960840614!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="" alt="" />
            <p>
              <span>Vaishnavi Pawar</span> Founder <br /> Phone: 9511613033 <br /> Email: vaishnavi.22211188@viit.ac.in
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              <span>Ishwari Sherkar</span> Founder <br /> Phone: 9356852925 <br /> Email: ishwari.22210848@viit.ac.in
            </p>
          </div>
          <div>
            <img src="" alt="" />
            <p>
              <span>Arpita Yelpale</span> Founder <br /> Phone: 9579403077 <br /> Email: arpita.22211327@viit.ac.in
            </p>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default ContactPage;
