import React from 'react';
import { useParams } from 'react-router-dom';
import BuildingDetails from '../components/Building/BuildingDetails';

const BuildingPage = () => {

    return(
        <div>
            <BuildingDetails />
        </div>
    )
}



export default BuildingPage;