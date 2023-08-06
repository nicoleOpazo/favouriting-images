import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllCats, BreedsCats, FavouritesCats, WelcomePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/cats" element={<AllCats />} />
        <Route path="/breeds" element={<BreedsCats />} />
        <Route path="/favourites" element={<FavouritesCats />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;