import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowPopup(true); // Show the popup if no consent has been given
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div style={popupStyle}>
      <div style={popupContentStyle}>
        <p className="c-p dk-txt">
          Den här hemsidan använder cookies för att förbättra din upplevelse. 
          Vi lagrar ingen personlig data. Du kan acceptera eller neka cookies,
          eller läsa mer <Link to={"/GDPR"} className="c-p acc-txt">här</Link>
        </p>
        <div style={buttonContainerStyle}>
          <button className="s-btn acc" onClick={handleAccept}>
            Acceptera
          </button>
          <button className="s-btn prim" onClick={handleDecline}>
            Neka
          </button>
        </div>
      </div>
    </div>
  );
};

// Basic styles for the popup
const popupStyle = {
  position: "fixed",
  bottom: "0",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#ffffffcb",
  padding: "18px",
  zIndex: 1000,
  width: "100%",
};

const popupContentStyle = {
  textAlign: "center",
};

const buttonContainerStyle = {
  marginTop: "24px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

export default CookiePopup;