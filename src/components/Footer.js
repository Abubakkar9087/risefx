import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-section-1'>
        <div className='footer-child-1'>
          <ul className='footer-ul'>
            <h3 className='ul-heading'>About Us</h3>
            <li className='footer-list'>Who we are</li>
            <li className='footer-list'>Awards</li>
            <li className='footer-list'>Principals</li>
            <li className='footer-list'>Partnership</li>
            <li className='footer-list'>Contact us</li>
            <li className='footer-list'>Careers</li>
            <li className='footer-list'>Management</li>
          </ul>
        </div>
        <div className='footer-child-2'>
          <ul className='footer-ul'>
            <h3 className='ul-heading'>Plateform</h3>
            <li className='footer-list'>Forex</li>
            <li className='footer-list'>Crypto CFDs</li>
            <li className='footer-list'>Share CFDs</li>
            <li className='footer-list'>Commodities</li>
            <li className='footer-list'>Spot Metals</li>
            <li className='footer-list'>Energies</li>
            <li className='footer-list'>MetaTrader 5</li>
          </ul>
        </div>
        <div className='footer-child-3'>
          <ul className='footer-ul'>
            <h3 className='ul-heading'>Trading Tools</h3>
            <li className='footer-list'>FXT Navigator</li>
            <li className='footer-list'>Trading Central</li>
            <li className='footer-list'>Economic Calendar</li>
            <li className='footer-list'>Market Sentiment</li>
            <li className='footer-list'>API Trading</li>
            <li className='footer-list'>VPS</li>
            <li className='footer-list'>CDF Rollover</li>
          </ul>
        </div>
        <div className='footer-child-4'>
          <ul className='footer-ul'>
            <h3 className='ul-heading'>Support</h3>
            <li className='footer-list'>Legal Information</li>
            <li className='footer-list'>Privacy Policy</li>
            <li className='footer-list'>Regulations</li>
            <li className='footer-list'>Risk Disclaimer</li>
            <li className='footer-list'>Complaints Procedure</li>
            <li className='footer-list'>Company News</li>
            <li className='footer-list'>Trading Videos</li>
          </ul>
        </div>
        <div className='footer-child-5'>
          <div className='inner-child5 inner-1'>
            <img src='/images/risesvg.svg' alt='error' className='download-img' />
            <p>Download on the App Store</p>
          </div>
          <div className='inner-child5 inner-2'>
            <img src='/images/icon-3.png' alt='error' className='download-img' />
          </div>
          <div className='inner-child5 inner-3'>
            <img src='/images/android-icon.png' alt='error' className='download-img' />
            <img src='/images/ios-icon.png' alt='error' className='download-img' />
            <img src='/images/microsoft-ico.png' alt='error' className='download-img' />
          </div>
        </div>
      </div>
      <div className='footer-section-2'>
        <div className='footer-child-1'>
          <img src='/images/risesvg.svg' alt='error' className='download-img' />
        </div>
        <div className='footer-child-2'>
          <h3 className='payment-accept'>We Accept: </h3>
          <img src='/images/card-1.png' alt='error' />
          <img src='/images/card-2.png' alt='error' />
          <img src='/images/card-3.png' alt='error' />
          <img src='/images/card-4.png' alt='error' />
          <img src='/images/card-5.png' alt='error' />
          <img src='/images/card-6.png' alt='error' />
        </div>
      </div>
      <div className='footer-section-3'>
        <div className='footer-child-1'>
          <p className='footer-para'>RISEFX is incorporated in Mauritius with registration number - C191579
            and also registered in Saint Lucia with registration number - 00506. Our website includes links
            and redirection sections to enhance the quality of our services. As a company, we do not endorse
            or recommend any specific products or services. The information provided on this site is intended
            for informational purposes only. Therefore, any offer or solicitation should not be construed
            as an invitation or request to engage in any activity in jurisdictions where such actions are
            not authorized. Additionally, it should not be construed as a recommendation to buy, sell,
            or otherwise engage in any specific currency or precious metal transactions where such
            actions are unlawful.</p>

          <p className='footer-para'>RISK DISCLAIMER: Trading financial products on margin involves a significant
            level of risk and may not be suitable for all investors. It's important to note that losses can
            exceed the initial investment. Therefore, it's crucial to fully comprehend the risks involved and
            take appropriate measures to manage them effectively. Investing in derivatives carries the
            possibility of losing an amount that exceeds the initial investment. It's imperative for investors
            to understand these risks thoroughly before engaging in any trading activities.Anyone wishing to
            invest in any of the products mentioned in https://therisefx.com/ should seek their own financial
            or professional advice. Trading of securities, forex, metals, commodities may not be suitable for
            everyone and involves the risk of losing part or all of your money. Trading in the financial markets
            has large potential rewards, but also large potential risk. You must be aware of the risks and be
            willing to accept them in order to invest in the markets. Don't invest and trade with money which
            you can't afford to lose. Forex Trading is not allowed in some countries, before investing your
            money, make sure whether your country is allowing this or not.</p>

          <p className='footer-para'>Restricted Regions: RISEFX does not provide services for citizens/residents
            of the United States, Cuba, Iraq, Myanmar, North Korea, Sudan. The services of RISEFX are not intended
            for distribution to, or use by, any person in any country or jurisdiction where such distribution
            or use would be contrary to local law or regulation.</p>
        </div>
        {/* <div className='footer-child-2'>2</div> */}
      </div>
      <div className='footer-section-4'>
        <div className='footer-child-1'>
          <p className='copyrights'>
          Copyright © 2007-2024 <span className='footer-brand'>RiseFX</span>. All rights reserved.
          </p>
        </div>
        <div className='footer-child-2'>
        <h3 className='follow-on'>Follow Us On: </h3>
          <img src='/images/social-1.png' alt='error' />
          <img src='/images/social-1.png' alt='error' />
          <img src='/images/social-1.png' alt='error' />
          <img src='/images/social-1.png' alt='error' />
        </div>
      </div>
    </div>
  );
}

export default Footer;
