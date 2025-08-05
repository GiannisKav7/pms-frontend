import React from 'react';

import LeaseDetails from '../features/LeaseDetails';
import Navbar from '../components/Layouts/Navbar';

const LeasePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LeaseDetails />
    </div>
  );
};

export default LeasePage;