import React, { useEffect, useRef } from "react";

const HorizontalForexWidget = () => {
  const containerRef = useRef(null);
  const scriptAdded = useRef(false); // Prevents multiple scripts

  useEffect(() => {
    if (scriptAdded.current) return; // Prevent duplicate scripts

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX:EURUSD", title: "EUR/USD" },
        { proName: "FX:GBPUSD", title: "GBP/USD" },
        { proName: "FX:USDJPY", title: "USD/JPY" },
      ],
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
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
      <div className="tradingview-widget-container" ref={containerRef}></div>
    </div>
  );
};

export default HorizontalForexWidget;
