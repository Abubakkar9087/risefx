import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../images/risesvg.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const messages = [
    "Register Now And Get Free Credits",
    "Start Now With Demo Account"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-1'>
          <div className='navbar-child number'>
            <img src='/images/call-icon.png' alt='error' className='call-icon' />
            <span style={{ marginLeft: '5px' }}>+91 9876543210</span>
          </div>
          <div className='navbar-child text-changing'>
            <div className='navbar-child'>
            <div className="scrolling-text-container">
        <div key={index} className="scrolling-text">
          {messages[index]}
        </div>
      </div>
            </div>

          </div>
          <div className='navbar-child nav-btns'>
            <button className='btn-open-account'>Open Account</button>
            <button className='btn-login'>Login</button>
            <div className='downlaod-app'>
              <button className='btn-download' onClick={togglePopup}>Get App</button>
            </div>
          </div>
        </div>

        <div className='navbar-2'>
          <div className='navbar-child'>
            <img src={Logo} alt='logo' />
          </div>
          <div className='navbar-child'>
            <ul className='navbar-list'>
              <Link to='/'>
                <li className='navbar-item'>
                  Home
                </li>
              </Link>

              <Link to='/About'>
                <li className='navbar-item has-dropdown'>
                  About
                  {/* <div className='dropdown'>
                  <Link to='/mission'>Our Mission</Link>
                  <Link to='/services'>Our Services</Link>
                  <Link to='/whyrisefx'>Why RiseFX</Link>
                </div> */}
                </li>
              </Link>

              <li className='navbar-item has-dropdown'>
                Services
                <div className='dropdown'>
                  <h4 className='account-type'>Account Types</h4>
                  <a href='#'>Standard Account</a>
                  <a href='#'>Classic Account</a>
                  <a href='#'>Pro Account</a>
                  <a href='#'>VIP Account</a>
                  <h4 className='account-type'>Markets</h4>
                  <a href='#'>Forex</a>
                  <a href='#'>Metals</a>
                  <a href='#'>Indices</a>
                  <a href='#'>Commodities</a>
                </div>
              </li>

              <li className='navbar-item has-dropdown'>
                Platform
                <div className='dropdown'>
                  <a href='#'>RiseFX Mobile App</a>
                  <a href='#'>RiseFX Web Trading</a>
                  <a href='#'>RiseFX Platform</a>
                </div>
              </li>

              <li className='navbar-item has-dropdown'>
                Partner With Us
                <div className='dropdown'>
                  <a href='#'>Overview</a>
                  <a href='#'>Why RiseFX</a>
                  <a href='#'>Benefits & Join Our Partner Program</a>
                </div>
              </li>

              <li className='navbar-item has-dropdown'>
                Contact
                <div className='dropdown'>
                  <a href='#'>Support</a>
                  <a href='#'>Live Chat</a>
                  <a href='#'>Email Us</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="custom-hamburger" onClick={() => document.querySelector('.custom-ham-nav').classList.toggle('custom-active')}>
            <img src="/images/hamburger.png" alt="menu" />
            <div className="custom-ham-nav">
              <ul>
                <li><a href="#">Home</a></li>

                <li className="custom-has-dropdown">
                  <a href="#">About</a>
                  <ul className="custom-dropdown">
                    <li><a href="#">Our Mission</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Why RiseFX</a></li>
                  </ul>
                </li>

                <li className="custom-has-dropdown">
                  <a href="#">Services</a>
                  <ul className="custom-dropdown">
                    <li><a href="#">Standard Account</a></li>
                    <li><a href="#">Classic Account</a></li>
                    <li><a href="#">Pro Account</a></li>
                    <li><a href="#">VIP Account</a></li>
                  </ul>
                </li>

                <li className="custom-has-dropdown">
                  <a href="#">Platform</a>
                  <ul className="custom-dropdown">
                    <li><a href="#">Standard Account</a></li>
                    <li><a href="#">Classic Account</a></li>
                    <li><a href="#">Pro Account</a></li>
                    <li><a href="#">VIP Account</a></li>
                  </ul>
                </li>

                <li className="custom-has-dropdown">
                  <a href="#">Partner With Us</a>
                  <ul className="custom-dropdown">
                    <li><a href="#">Standard Account</a></li>
                    <li><a href="#">Classic Account</a></li>
                    <li><a href="#">Pro Account</a></li>
                    <li><a href="#">VIP Account</a></li>
                  </ul>
                </li>

                <li className="custom-has-dropdown">
                  <a href="#">Contact</a>
                  <ul className="custom-dropdown">
                    <li><a href="#">Standard Account</a></li>
                    <li><a href="#">Classic Account</a></li>
                    <li><a href="#">Pro Account</a></li>
                    <li><a href="#">VIP Account</a></li>
                  </ul>
                </li>

                <li><a href="#">Download</a></li>

              </ul>
            </div>
          </div>

        </div>
        <div className='mobile-icon'>
          <Link to='/'>
            <img src='/images/home-icon.svg' alt='error' />
            Home
          </Link>
          <Link to='/'>
            <img src='/images/about-icon.svg' alt='error' />
            About
          </Link>
          <Link to='/'>
            <img src='/images/services-icon.svg' alt='error' />
            Services
          </Link>
          <Link to='/'>
            <img src='/images/contact-icon.svg' alt='error' />
            Contact
          </Link>
          <Link to='/'>
            <img src='/images/partner.svg' alt='error' />
            Partner
          </Link>
        </div>
        {showPopup && (
          <div className='popup'>
            <button className='close-btn' onClick={togglePopup}>X</button>
            <div className='popup-content'>
              <img src='/images/QRcode1.png' alt='QR Code 1' className='qr-img' />
              <a href='https://panel.therisefx.com/platform/TheRiseFX-1.0.apk'>
                <img src='images/android-download.png' className='download-icon' alt='error' />
              </a>
            </div>
            <div className='popup-content'>
              <img src='/images/QRcode2.png' alt='QR Code 2' className='qr-img' />
              <a href='https://apps.apple.com/us/app/mobiustrader-7/id1355359598'>
                <img src='images/ios-download.png' className='download-icon' alt='error' />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
