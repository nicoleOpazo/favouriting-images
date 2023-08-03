import React from "react";
import "../App.css";

const WelcomeComponent = () => {
  return (
    <div className="welcome-page">
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

export default WelcomeComponent;