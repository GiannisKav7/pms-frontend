import React from 'react';
import { useParams } from 'react-router-dom';
import UnitDetails from '../components/Unit/UnitDetails.js';

const UnitPage = () => {
  const { id } = useParams();  // Get lease ID from the URL

  return (
    <div>
      <UnitDetails />
    </div>
  );
};

export default UnitPage;