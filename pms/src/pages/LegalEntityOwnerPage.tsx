import React from 'react';
import { useParams } from 'react-router-dom';
import LegalEntityOwnerDetails from '../features/LegalEntityOwnerDetails';

interface LegalEntityOwnerPageParams {
  id: string;
}

const LegalEntityOwnerPage: React.FC = () => {
  const { id } = useParams<LegalEntityOwnerPageParams>(); // Get legal entity owner ID from the URL

  return (
    <div>
      <LegalEntityOwnerDetails />
    </div>
  );
};

export default LegalEntityOwnerPage;