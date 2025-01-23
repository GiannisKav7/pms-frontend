import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetails from '../components/Property/PropertyDetails';
const PropertyPage = () => {
  const { id } = useParams();  // Get lease ID from the URL

  return (
    <div>
      <PropertyDetails />
    </div>
  );
};

export default PropertyPage;