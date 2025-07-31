import React from 'react';
import UnitDetails from '../features/UnitDetails';
import Navbar from '../components/Layouts/Navbar';

const UnitPage: React.FC = () => {

    return (
        <div>
            <Navbar />
            <UnitDetails />
        </div>
    );
};

export default UnitPage;