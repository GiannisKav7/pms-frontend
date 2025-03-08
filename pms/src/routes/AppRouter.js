import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "../components/MainLayout";
import LeasePage from '../pages/LeasePage';
import NotFound from '../pages/NotFound';
import UnitPage from '../pages/UnitPage';
import HomePage from '../pages/HomePage';
import LegalEntityOwnerPage from '../pages/LegalEntityOwnerPage';
import ContactPage from '../pages/ContactPage';
import PropertyPage from '../pages/PropertyPage';
import RoomPage from '../pages/RoomPage';
import BuildingPage from '../pages/BuildingPage';
import FloorPage from '../pages/FloorPage';
import UnitTypePage from '../pages/UnitTypePage';
import TestPage from '../pages/TestPage'; // Ensure this page exists

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="lease/:id" element={<LeasePage />} />
          <Route path="unit/:id" element={<UnitPage />} />
          <Route path="legalentity/:id" element={<LegalEntityOwnerPage />} />
          <Route path="contact/:id" element={<ContactPage />} />
          <Route path="property/:id" element={<PropertyPage />} />
          <Route path="room/:id" element={<RoomPage />} />
          <Route path="building/:id" element={<BuildingPage />} />
          <Route path="floor/:id" element={<FloorPage />} />
          <Route path="unittype/:id" element={<UnitTypePage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
