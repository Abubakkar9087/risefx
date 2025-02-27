import React from "react";
import "./Payment.css"; // Import CSS file for styles

const cards = [
  { id: 1, images: '/images/card-1.png' },
  { id: 2, images: '/images/card-2.png' },
  { id: 3, images: '/images/card-3.png' },
  { id: 4, images: '/images/card-4.png' },
  { id: 4, images: '/images/card-5.png' },
  { id: 4, images: '/images/card-6.png' },
];

const Payment = () => {
  return (
    <div className="payment-slider">
      <div className="slider">
        {/* Duplicate cards multiple times for seamless effect */}
        {[...cards, ...cards, ...cards, ...cards, ...cards, ...cards].map((card, index) => (
          <div key={index} className="payment-card">
            <img src={card.images} alt={`Card ${card.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
