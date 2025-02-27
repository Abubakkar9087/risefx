import React from 'react';
import Navbar from './Navbar';
import BreadCrumb from './BreadCrumb';
import Footer from './Footer';
  
  const AboutPage = () =>  {
	return (
	  <div className='about-container'>
        <Navbar />
        <BreadCrumb />
        <Footer />
	  </div>
	);
  }
  
  export default AboutPage;
  