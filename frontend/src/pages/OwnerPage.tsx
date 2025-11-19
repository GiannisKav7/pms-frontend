import React from 'react';
import OwnerDetails from '../components/Owner/OwnerDetails';
import Navbar from '../components/Layouts/Navbar';

const OwnerPage: React.FC = () =>{
    return (
        <>
            <Navbar/>
            <OwnerDetails/>
        </>

    );
}

export default OwnerPage;