import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);
  const scriptAdded = useRef(false); // Prevents multiple script additions

  useEffect(() => {
    if (scriptAdded.current) return; // Prevent duplicate scripts

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "400",
      currencies: ["EUR", "USD", "JPY", "GBP", "AUD", "CAD", "CHF", "CNY"],
      isTransparent: false,
      colorTheme: "dark",
      locale: "en",
    });

    containerRef.current.appendChild(script);
    scriptAdded.current = true; // Mark script as added

    return () => {
      scriptAdded.current = false; // Reset on component unmount
    };
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden", display: "flex", justifyContent: "center" }}>
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        style={{
          maxWidth: "100%",
          minWidth: "300px",
          height: "400px",
        }}
      >
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
