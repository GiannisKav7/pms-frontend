import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeasePage from '../pages/LeasePage';
import NotFound from '../pages/NotFound';
import UnitPage from '../pages/UnitPage';
import HomePage from '../pages/HomePage';
import LegalEntityOwnerPage from '../pages/LegalEntityOwnerPage';
import ContactPage from '../pages/ContactPage';
import PropertyPage from '../pages/PropertyPage';
import RoomPage from '../pages/RoomPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home/" element={<HomePage />} />
        <Route path="/lease/:id" element={<LeasePage />} />
        <Route path="/unit/:id" element={<UnitPage />} />
        <Route path="/legalentity/:id" element={<LegalEntityOwnerPage />} />
        <Route path="/contact/:id" element={<ContactPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
        <Route path="/room/:id" element={<RoomPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
