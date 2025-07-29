import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Layouts/Sidebar";
import { initialPropertyDetails, type Property } from "../data/propertyDetails";
import PropertyBasicInfoBar from "../components/Property/PropertyBasicInfoBar";
import styles from "./PropertyDetails.module.css";
import {HomeOutlined,  ContactsOutlined, FileTextOutlined } from '@ant-design/icons';


const PropertyDetails: React.FC = () => {

  const items = [
    {label: "Overview", path: `/property/`, icon: HomeOutlined},
    {label: "Contacts", path: `/contacts/`, icon: ContactsOutlined},
    {label: "Tax Info", path: `/taxinfo/`, icon: FileTextOutlined}
  ];

  const [propertyDetails, setPropertyDetails] = useState<Property>(initialPropertyDetails);

  return (
    <>
      <div>
        <PropertyBasicInfoBar propertyBarDetails ={{
          units: propertyDetails.units,
          occupancy: propertyDetails.occupancy,
          size: propertyDetails.size,
          type: propertyDetails.type
        }} />
      </div>
      {/*<div>
         <Sidebar items={items} /> 
         <div>
          <Routes>
            <Route 
              index
              element={}
            />

            
          </Routes>
        </div> 
      </div>*/}
    </>
  );
};

export default PropertyDetails;
