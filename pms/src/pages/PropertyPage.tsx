import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetails from '../features/PropertyDetails';

interface RouteParams {
  id: string;
}

const PropertyPage: React.FC = () => {
  const { id } = useParams<RouteParams>();  // Get lease ID from the URL

  return (
    <div>
      <PropertyDetails />
    </div>
  );
};

export default PropertyPage;