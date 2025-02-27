import React from 'react';
import './Award.css'
  
  const Award = () =>  {
	return (
	  <div className='award-container'>
		<p className='section-highlight'>Awarded by The Best</p>
        <h1 className='section-heading'>Globally Awarded</h1>

		<div className='award-section'>
			<div className='award-card'>
				<p className='award-num'>01</p>
				<p className='award-name'>The Best Trading Platform, UK</p>
				<p className='award-time'>x1</p>
				<img src='/images/award-1.png' alt='erro'/>
				<p className='award-year'>2023</p>
			</div>
			<div className='award-card'>
				<p className='award-num'>02</p>
				<p className='award-name'>Awards Interior Excellence</p>
				<p className='award-time'>x3</p>
				<img src='/images/award-2.png' alt='error' className='award-img'/>
				<p className='award-year'>2017</p>
			</div>
			<div className='award-card'>
				<p className='award-num'>03</p>
				<p className='award-name'>The Best Trading Platform, UK</p>
				<p className='award-time'>x4</p>
				<img src='/images/award-3.png' alt='error' className='award-img'/>
				<p className='award-year'>2022</p>
			</div>
			<div className='award-card'>
				<p className='award-num'>04</p>
				<p className='award-name'>Advance HighTechnology Trade</p>
				<p className='award-time'>x3</p>
				<img src='/images/award-4.png' alt='error' className='award-img'/>
				<p className='award-year'>2014</p>
			</div>
			<div className='award-card'>
				<p className='award-num'>05</p>
				<p className='award-name'>The Best Trading Platform, London</p>
				<p className='award-time'>x4</p>
				<img src='/images/award-5.png' alt='error' className='award-img'/>
				<p className='award-year'>2018</p>
			</div>
		</div>
	  </div>
	);
  }
  
  export default Award;
  