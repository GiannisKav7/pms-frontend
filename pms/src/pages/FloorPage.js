import React from 'react';
import { useParams } from 'react-router-dom';
import FloorDetails from '../components/Floor/FloorDetails';


const FloorPage = () => {
  const { id } = useParams();  // Get lease ID from the URL

  return (
    <div>
      <FloorDetails />
    </div>
  );
};

export default FloorPage;