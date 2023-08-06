import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const WelcomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
      navigate("/cats");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`welcome-page ${showWelcome ? "" : "hidden"}`}>
      <div className="container">
        <div className="text">
          <h1>Bienvenido</h1>
        </div>
        <div className="loading">
          <div className="line-box">
            <div className="line">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;