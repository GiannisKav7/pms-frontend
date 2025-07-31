import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Layouts/Sidebar";
import { initialPropertyDetails, type Property } from "../data/propertyDetails";
import PropertyBasicInfoBar from "../components/Property/PropertyBasicInfoBar";
import PropertyOverview from "../components/Property/PropertyOverview";
import styles from "./PropertyDetails.module.css";
import { AiOutlineHome, AiOutlineContacts, AiOutlineFile } from 'react-icons/ai';
import ContactsTable from "../components/Tables/ContactsTable";
import { TaxInfoTable } from "../components/Tables/TaxInfoTable";

const PropertyDetails: React.FC = () => {

  const items = [
    { label: "Overview", path: `/property/${initialPropertyDetails.propertyCode}`, icon: AiOutlineHome },
    { label: "Contacts", path: `/property/${initialPropertyDetails.propertyCode}/contacts`, icon: AiOutlineContacts },
    { label: "Tax Info", path: `/property/${initialPropertyDetails.propertyCode}/taxinfo`, icon: AiOutlineFile }
  ];


  const [propertyDetails, setPropertyDetails] = useState<Property>(initialPropertyDetails);
  // const [name, setName] = useState<string>(propertyDetails.name || '');

  return (
    <>
      <div className={styles.header}>
        <PropertyBasicInfoBar propertyBarDetails={{
          name: propertyDetails.name,
          propertyCode: propertyDetails.propertyCode,
          units: propertyDetails.units,
          occupancy: propertyDetails.occupancy,
          size: propertyDetails.size,
          type: propertyDetails.type
        }} />
      </div>
      
      <div className={styles.content}>
        <Sidebar items={items}/>
        <Routes>
          <Route 
            index
            element={<PropertyOverview propertyDetails={propertyDetails} />}
          />
          <Route
            path="contacts"
            element={<ContactsTable/>}
          />
          <Route
            path="taxinfo"
            element={<TaxInfoTable />}
          />
        </Routes>
      </div>

    </>
  );
};

export default PropertyDetails;
