import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeasePage from "../pages/LeasePage";
// import NotFound from '../pages/NotFound';
import UnitPage from "../pages/UnitPage";
import HomePage from "../pages/HomePage";
// import ContactPage from '../pages/ContactPage';
import PropertyPage from "../pages/PropertyPage";
import OwnerPage from "../pages/OwnerPage";
import LeaseAdminPage from "../pages/LeaseAdminPage";
// import RoomPage from '../pages/RoomPage';
// import BuildingPage from '../pages/BuildingPage';
// import FloorPage from '../pages/FloorPage';
// import UnitTypePage from '../pages/UnitTypePage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="leaseadmin" element={<LeaseAdminPage />} />
        <Route path="lease/:id/*" element={<LeasePage />} />
        <Route path="unit/:id/*" element={<UnitPage />} />
        <Route path="property/:id/*" element={<PropertyPage />} />
        <Route path="owner/:id/*" element={<OwnerPage />} />
        {/*
          <Route path="contact/:id" element={<ContactPage />} />
          <Route path="room/:id" element={<RoomPage />} />
          <Route path="building/:id" element={<BuildingPage />} />
          <Route path="floor/:id" element={<FloorPage />} />
          <Route path="unittype/:id" element={<UnitTypePage />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
