import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Layouts/Sidebar";
import { initialPropertyDetails, type Property } from "../data/propertyDetails";
import PropertyBasicInfoBar from "../components/Property/PropertyBasicInfoBar";
import PropertyOverview from "../components/Property/PropertyOverview";
import styles from "./PropertyDetails.module.css";
import { HomeOutlined, ContactsOutlined, FileTextOutlined } from '@ant-design/icons';
import ContactsTable from "../components/Lease/Tables/ContactsTable";

const PropertyDetails: React.FC = () => {

  const items = [
    { label: "Overview", path: `/property/${initialPropertyDetails.propertyCode}`, icon: HomeOutlined },
    { label: "Contacts", path: `/property/${initialPropertyDetails.propertyCode}/contacts`, icon: ContactsOutlined },
    { label: "Tax Info", path: `/property/${initialPropertyDetails.propertyCode}/taxinfo`, icon: FileTextOutlined }
  ];

  const [propertyDetails, setPropertyDetails] = useState<Property>(initialPropertyDetails);

  return (
    <>
      <div className={styles.header}>
        <PropertyBasicInfoBar propertyBarDetails={{
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
            element={<PropertyOverview propertyDetails={propertyDetails} />}
          />
        </Routes>
      </div>

    </>
  );
};

export default PropertyDetails;
