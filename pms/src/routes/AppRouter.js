import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeasePage from '../pages/LeasePage';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lease/:id" element={<LeasePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
