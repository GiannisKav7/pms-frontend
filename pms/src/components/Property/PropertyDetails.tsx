import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Layouts/Sidebar";
import { initialPropertyDetails, type Property } from "../../data/propertyDetails";
import PropertyBasicInfoBar from "./PropertyBasicInfoBar";
import PropertyOverview from "./PropertyOverview";
import styles from "./PropertyDetails.module.css";
import { AiOutlineHome, AiOutlineContacts, AiOutlineFile } from 'react-icons/ai';
import ContactsTable from "../Tables/ContactsTable";
import { TaxInfoTable } from "../Tables/TaxInfoTable";

const PropertyDetails: React.FC = () => {

  const items = [
    { label: "Overview", path: `/property/${initialPropertyDetails.propertyCode}`, icon: AiOutlineHome },
    { label: "Contacts", path: `/property/${initialPropertyDetails.propertyCode}/contacts`, icon: AiOutlineContacts },
    { label: "Tax Info", path: `/property/${initialPropertyDetails.propertyCode}/taxinfo`, icon: AiOutlineFile }
  ];

  const [propertyDetails, _setPropertyDetails] = useState<Property>(initialPropertyDetails);
  const [propCode, setPropCode] = useState<string>();

  const url = `${import.meta.env.VITE_API_URL}/properties`;
  
  useEffect(() => {
    const fetchPropCode = async () => {
      const res = await fetch(url);
      const data = (await res.json()) as { property_code: string }[];
      setPropCode(data[0].property_code);
    }
    fetchPropCode();

  }, []);

  return (
    <>
      <div className={styles.header}>
        <PropertyBasicInfoBar propertyBarDetails={{
          name: propertyDetails?.name ?? "",
          propertyCode: propCode ?? "",
          units: propertyDetails?.units ?? 0,
          occupancy: propertyDetails?.occupancy ?? 0,
          size: propertyDetails?.size ?? 0,
          type: propertyDetails?.type ?? "Unknown"
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
