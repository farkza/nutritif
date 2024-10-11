import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Login from './pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
