import React from 'react';
import './Process.css';
  
  const Process = () =>  {
	return (
	  <>
      <div className='process-container'>
        <div className='process-section-1'>
        <p className='section-highlight'>The Process</p>
        <h1 className='section-heading'>How It Works</h1>
        </div>
        <div className='process-section-2'>
            <div className='process-card-1'>
                <div className='process-card-1-child'>
                    <h2> <span className='process-num'>1</span>Account Registration</h2>
                    <p>Our team will set up your account and help you build job to easy-to-use web dashboard.</p>
                </div>
                <div className='process-card-1-child'>
                    <h2> <span className='process-num'>2</span>Deposit Funds</h2>
                    <p>Create and Trade anywhere from 1-100% openings with just a few clicks. customize your own.</p>
                </div>
                <div className='process-card-1-child'>
                    <h2> <span className='process-num'>3</span>Start Trading</h2>
                    <p>View market, reviews, and rosters before forex arrive on the site, and post reviews and pay, effortlessly.</p>
                </div>
            </div>
            <div className='process-card-2'></div>
        </div>
      </div>
	  </>
	);
  }
  
  export default Process;
  