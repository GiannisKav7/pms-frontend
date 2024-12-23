import React from 'react';
import { useParams } from 'react-router-dom';
import LeaseDetails from '../components/Lease/LeaseDetails';

const LeasePage = () => {
  const { id } = useParams();  // Get lease ID from the URL

  return (
    <div>
      <h1>Lease Details for {id}</h1>
      <LeaseDetails />
    </div>
  );
};

export default LeasePage;