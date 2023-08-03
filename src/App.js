import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { WelcomeComponent } from "./components";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {showWelcome ? (
          <Route path="/" element={<WelcomeComponent/>} />
        ) : (
          <Route path="/" element={<Home/>} />
        )}
      </Routes>
    </BrowserRouter>
  )
}
export default App;