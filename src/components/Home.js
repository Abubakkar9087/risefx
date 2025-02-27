import React from 'react';
import Navbar from './Navbar';
import Herosection from './Herosection';
import TradingAccount from './TradingAccount';
import './tradingaccount.css';
import ForexSlider from './ForexSlider';
import Payment from './Payment';
import Process from './Process';
import Award from './Award';
import Download from './Download';
import MediaCenter from './MediaCenter';
import Newsletter from './Newsletter';
import Footer from './Footer';

  
  const Home = () =>  {
	return (
	  <div>
        <Navbar />
        <Herosection/>
      <Payment/>
      <TradingAccount/>
      <ForexSlider/>
      <Process/>
      <Award/>
      <Download/>
      <MediaCenter/>
      <Newsletter/>
      <Footer/>
	  </div>
	);
  }
  
  export default Home;
  