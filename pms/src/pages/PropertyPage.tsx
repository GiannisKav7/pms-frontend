import React from 'react';
import PropertyDetails from '../features/PropertyDetails';
import Navbar from '../components/Layouts/Navbar';

const PropertyPage: React.FC = () => {

  return (
    <div>
      <Navbar />
      <PropertyDetails />
    </div>
  );
};

export default PropertyPage;