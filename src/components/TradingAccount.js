import React, { useState } from 'react';
import './tradingaccount.css'

const TradingAccount = () => {
    const [activeCard, setActiveCard] = React.useState(0)
    const handleClick = (index) => {
        setActiveCard(index)
    }
    
    return (
        <div className="trading-account-container">
            <div className='trading-section-1'>
                <div className='trading-section1-child-1'>
                    <p className='section-highlight'>Account</p>
                    <h1 className='section-heading'>Trading Account</h1>
                </div>
                <div className='trading-section1-child-2'>
                    <div className='trading-card'>
                        <h2>Standard Account</h2>
                        <p>Traders with Standard accounts gain access to a wide range of benefits, including enhanced trading platforms </p>
                    </div>
                    <div className='trading-card'>
                        <h2>Standard Account</h2>
                        <p>Traders with Standard accounts gain access to a wide range of benefits, including enhanced trading platforms </p>
                    </div>
                    <div className='trading-card'>
                        <h2>Standard Account</h2>
                        <p>Traders with Standard accounts gain access to a wide range of benefits, including enhanced trading platforms </p>
                    </div>
                    <div className='trading-card'>
                        <h2>Standard Account</h2>
                        <p>Traders with Standard accounts gain access to a wide range of benefits, including enhanced trading platforms </p>
                    </div>
                </div>
            </div>
            <div className='trading-section-2'>
                <div className='trading-section2-child-1'>
                <p className='section-highlight'>Account</p>
                <h1 className='section-heading'>About RiseFX </h1>
                <div className='inner-child' onClick={() => setActiveCard(0)}>
                    <h2>Who we are</h2>
                    {activeCard === 0 && (
                        <p>As a brokerage firm or trading platform. We are dedicated to providing innovative and user-friendly trading</p>
                    )}
                </div>
                <div className='inner-child' onClick={() => setActiveCard(1)}>
                    <h2>What we do</h2>
                    {activeCard === 1 && (
                        <p>As a brokerage firm or trading platform. We are dedicated to providing innovative and user-friendly trading</p>
                    )}
                </div>
                <div className='inner-child' onClick={() => setActiveCard(2)}>
                    <h2>How it works</h2>
                    {activeCard === 2 && (
                        <p>As a brokerage firm or trading platform. We are dedicated to providing innovative and user-friendly trading</p>
                    )}
                </div>
                </div>
                <div className='trading-section2-child-2'>
                    <img src='/images/section-trade.jpg' alt='error'/>
                </div>
            </div>
            <div className='trading-section-3'>
                <div className='section-3-cards'>
                <div className='trading-section3-child-1 section-3-first-card'>
                    <div className='inner-card-heading'>
                        <h1 className='num-heading'>150+</h1>
                        <h4 className='text-heading'>Countries</h4>
                        <p>Trade Policies And Agreements Shape The Trading Landscape Of Countries</p>
                    </div>
                </div>
                <div className='trading-section3-child-1'>
                    <div className='inner-card-heading'>
                        <h1 className='num-heading'>40+</h1>
                        <h4 className='text-heading'>Million Invest</h4>
                        <p>Investing A Million Dollars In Trading Represents A Significant Opportunity</p>
                    </div>
                </div>
                <div className='trading-section3-child-1 section-3-third-card'>
                    <div className='inner-card-heading'>
                        <h1 className='num-heading'>90+</h1>
                        <h4 className='text-heading'>Awards</h4>
                        <p>Trading Awards Recognize Excellence And Achievement Within The Financial</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='section-4'>
                <div className='section-4-child-1'>
                <p className='section-highlight'>Trading platform</p>
                <h1 className='section-heading'>Things We Trade</h1>
                </div>
                <div className='section-4-child-2'>
                    <div className='section-4-inner-child-1'>
                        <h2 className='heading'>Forex Trading</h2>
                        <img src='/images/forex-icon.png' />
                        <div className='section-4-cards-hover'>
                            <p>One of the primary methods of gold trading is through the spot</p>
                            <button className='section-4-hoverbtn'>Start Trading Now</button>
                        </div>
                    </div>
                    <div className='section-4-inner-child-1'>
                        <h2 className='heading'>Metals Trading</h2>
                        <img src='/images/metal-icon.png' />
                        <div className='section-4-cards-hover'>
                            <p>One of the primary methods of gold trading is through the spot</p>
                            <button className='section-4-hoverbtn'>Start Trading Now</button>
                        </div>
                    </div>
                    <div className='section-4-inner-child-1'>
                        <h2 className='heading'>Indices Trading</h2>
                        <img src='/images/indices-icon.png' />
                        <div className='section-4-cards-hover'>
                            <p>One of the primary methods of gold trading is through the spot</p>
                            <button className='section-4-hoverbtn'>Start Trading Now</button>
                        </div>
                    </div>
                    <div className='section-4-inner-child-1'>
                        <h2 className='heading'>Commodities Trading</h2>
                        <img src='/images/trading-1.png' />
                        <div className='section-4-cards-hover'>
                            <p>One of the primary methods of gold trading is through the spot</p>
                            <button className='section-4-hoverbtn'>Start Trading Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradingAccount;
