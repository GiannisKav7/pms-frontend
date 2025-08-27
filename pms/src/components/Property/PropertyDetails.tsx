import { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Layouts/Sidebar";
import {
  initialPropertyDetails,
  type Property,
} from "../../data/propertyDetails";
import PropertyBasicInfoBar from "./PropertyBasicInfoBar";
import PropertyOverview from "./PropertyOverview";
import styles from "./PropertyDetails.module.css";
import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineFile,
} from "react-icons/ai";
import ContactsTable from "../Tables/ContactsTable";
import { TaxInfoTable } from "../Tables/TaxInfoTable";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PropertyDetails: React.FC = () => {
  const items = [
    {
      label: "Overview",
      path: `/property/${initialPropertyDetails.propertyCode}`,
      icon: AiOutlineHome,
    },
    {
      label: "Contacts",
      path: `/property/${initialPropertyDetails.propertyCode}/contacts`,
      icon: AiOutlineContacts,
    },
    {
      label: "Tax Info",
      path: `/property/${initialPropertyDetails.propertyCode}/taxinfo`,
      icon: AiOutlineFile,
    },
  ];

  const [propertyDetails, _setPropertyDetails] = useState<Property>(
    initialPropertyDetails
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(); // type any because we just want to know if there is an error
  const [propCode, setPropCode] = useState<string>();

  const url = `${BASE_URL}/property`;

  useEffect(() => {
    const fetchPropCode = async () => {
      setIsLoading(true); // currently loading

      // use try catch for errors handling
      try {
        const response = await fetch(url);
        const data = (await response.json()) as { property_code: string }[]; // ts has to know the datatype
        setPropCode(data[0].property_code);
      } catch (e: any) {
        setError(e);
      } finally {
        // whatever happens finish loading
        setIsLoading(false);
      }
    };

    fetchPropCode();
  }, []);

  // Race condition: a request may last for more time than the next request
  // and the order of data showing may reverse (like in pagination requests)
  // Use useRef<AbortController >.abort() to cancel a previous request

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong ! Please try again.</div>;
  }

  return (
    <>
      <div className={styles.header}>
        <PropertyBasicInfoBar
          propertyBarDetails={{
            name: propertyDetails?.name ?? "",
            propertyCode: propCode ?? "",
            units: propertyDetails?.units ?? 0,
            occupancy: propertyDetails?.occupancy ?? 0,
            size: propertyDetails?.size ?? 0,
            type: propertyDetails?.type ?? "Unknown",
          }}
        />
      </div>

      <div className={styles.content}>
        <Sidebar items={items} />
        <Routes>
          <Route
            index
            element={<PropertyOverview propertyDetails={propertyDetails} />}
          />
          <Route path="contacts" element={<ContactsTable />} />
          <Route path="taxinfo" element={<TaxInfoTable />} />
        </Routes>
      </div>
    </>
  );
};

export default PropertyDetails;
