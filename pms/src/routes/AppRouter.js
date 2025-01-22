import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeasePage from '../pages/LeasePage';
import NotFound from '../pages/NotFound';
import UnitPage from '../pages/UnitPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lease/:id" element={<LeasePage />} />
        <Route path="/unit/:id" element={<UnitPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
