import React from 'react';
import PropertyDetails from '../components/Property/PropertyDetails';
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