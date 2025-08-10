import React from 'react';
import UnitDetails from '../components/Unit/UnitDetails';
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