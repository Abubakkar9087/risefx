import React from 'react';
import './OurMission.css';
import Navbar from './Navbar';
import Footer from './Footer';
import BreadCrumb from './BreadCrumb';
  
  const OurMission = () =>  {
	return (
	  <div className='mission-container'>
        <Navbar />
        <BreadCrumb />
        <Footer />
	  </div>
	);
  }
  
  export default OurMission;
  