import React from 'react';
import { useParams } from 'react-router-dom';
import LeaseDetails from '../features/LeaseDetails';
import Navbar from '../components/Layouts/Navbar';

interface LeasePageParams {
  id: string;
  [key: string]: string | undefined;
}

const LeasePage: React.FC = () => {
  const { id } = useParams<LeasePageParams>(); // Get lease ID from the URL
  return (
    <div>
      <Navbar />
      <LeaseDetails />
    </div>
  );
};

export default LeasePage;