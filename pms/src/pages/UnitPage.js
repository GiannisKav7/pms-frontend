import React from 'react';
import { useParams } from 'react-router-dom';
import UnitDetails from '../features/UnitDetails';

const UnitPage = () => {
  const { id } = useParams();  // Get lease ID from the URL

  return (
    <div>
      <UnitDetails />
    </div>
  );
};

export default UnitPage;