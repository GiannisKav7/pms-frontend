import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Layouts/Sidebar";
import { initialPropertyDetails, type Property } from "../data/propertyDetails";
import PropertyBasicInfoBar from "../components/Property/PropertyBasicInfoBar";


const PropertyDetails: React.FC = () => {


  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  const [details, setDetails] = useState<Property>(initialPropertyDetails);
  const navigate = useNavigate();

  // const handleEditToggle = (): void => {
  //   setIsEditing(!isEditing);
  //   if (!isEditing) {
  //     form.setFieldsValue(details);
  //   }
  // };

  // const handleSave = (): void => {
  //   form.validateFields().then((values: PropertyDetailsType) => {
  //     setDetails(values);
  //     setIsEditing(false);
  //   });
  // };

  // const handleNavigation = (code: string, path: string): void => {
  //   navigate(`/${path}/${code}`);
  // };

  return (
    <>
      <div>
        <PropertyBasicInfoBar propertyBarDetails ={{
          propertyCode: details.propertyCode,
          name: details.name,
          city: details.city,
          region: details.region,
          country: details.country,
          address1: details.address1,
          address2: details.address2,
          postcode: details.postcode

        }} />
      </div>
    </>
  );
};

export default PropertyDetails;
