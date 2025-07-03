import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetails from '../features/PropertyDetails';
import Navbar from '../components/Layouts/Navbar';

interface RouteParams {
  id: string;
  [key: string]: string | undefined;

}

const PropertyPage: React.FC = () => {
  const { id } = useParams<RouteParams>();  // Get lease ID from the URL

  return (
    <div>
      <Navbar />
      <PropertyDetails />
    </div>
  );
};

export default PropertyPage;