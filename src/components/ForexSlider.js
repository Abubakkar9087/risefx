import React from "react";
import "./ForexSlider.css"; // Import CSS file for styles
import TradingViewWidget from "./TradingViewWidget";
import HorizontalForexWidget from "./HorizontalForexWidget";

const cards = [
  { id: 1, title: "RYL-USD", subTitle: "SA US", ask: "0.84346", bid: "0.64514", spread: "13" },
  { id: 2, title: "AUD-USD", subTitle: "AU US", ask: "0.64191", bid: "0.64171", spread: "12" },
  { id: 3, title: "EUR-USD", subTitle: "EU US", ask: "0.64156", bid: "0.64276", spread: "09" },
  { id: 4, title: "GBP-USD", subTitle: "GB US", ask: "0.64578", bid: "0.64228", spread: "17" },
];

const ForexSlider = () => {
  return (
    <div className="trading-container">
     <div className="slider-wrapper">
     <p className='section-highlight'>Trade Now</p>
     <h1 className='section-heading'>Markets Spreads and Swaps</h1>
     </div>   
     <div className="slider-wrapper">
        <HorizontalForexWidget/>
        </div>   
     <div className="slider-wrapper">
        <TradingViewWidget/>
        </div>   
    {/* <div className="slider-wrapper">
      <div className="slider">
        {[...cards, ...cards, ...cards].map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <h4>{card.subTitle}</h4>
            <p>Ask: {card.ask}</p>
            <p>Bid: {card.bid}</p>
            <p>Spread: {card.spread}</p>
            <button className="trade-btn">Trade</button>
          </div>
        ))}
      </div>
    </div> */}
    </div>
  );
};

export default ForexSlider;
