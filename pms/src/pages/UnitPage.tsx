import React from 'react';
import { useParams } from 'react-router-dom';
import UnitDetails from '../features/UnitDetails';

interface UnitPageParams {
  id: string;
}

const UnitPage: React.FC = () => {
  const { id } = useParams<UnitPageParams>();  // Get unit ID from the URL

  return (
    <div>
      <UnitDetails />
    </div>
  );
};

export default UnitPage;