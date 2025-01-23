import React from 'react';
import { useParams } from 'react-router-dom';
import LegalEntityOwnerDetails from '../components/LegalEntityOwner/LegalEntityOwnerDetails';

const LegalEntityOwnerPage = () => {
  const { id } = useParams();  // Get lease ID from the URL

  return (
    <div>
      <LegalEntityOwnerDetails />
    </div>
  );
};

export default LegalEntityOwnerPage;