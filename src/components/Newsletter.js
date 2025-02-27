import React from 'react';
import './Newsletter.css'
  
  const Newsletter = () =>  {
	return (
	  <div className='newsletter-container'>
        <div className='newsletter-section'>
            <h1 className='newsletter-title'>
            Subscribe for latest update</h1>
            <form>
                <input type='email' placeholder='Email Address' className='newsletter-input' required/>
                <button className='newsletter-subscribe'>Subscribe</button>
            </form>
        </div>
	  </div>
	);
  }
  
  export default Newsletter;
  