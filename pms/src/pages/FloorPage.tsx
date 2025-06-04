import React from 'react';
import { useParams } from 'react-router-dom';
import FloorDetails from '../features/FloorDetails';


const FloorPage: React.FC = () => {
  const { id } = useParams();  // Get lease ID from the URL

  return (
    <div>
      <FloorDetails />
    </div>
  );
};

export default FloorPage;