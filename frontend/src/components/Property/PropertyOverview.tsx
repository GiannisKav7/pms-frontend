import React from "react";
import { useState } from 'react';
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import FormGroup from "../ui/FormGroup";
import styles from "./PropertyOverview.module.css";
import Input from "../ui/Input";

interface PropertyOverviewProps {
  propertyDetails: Record<string, any>;
}

const PropertyOverview: React.FC<PropertyOverviewProps> = ({ propertyDetails }) => {
  
  const [propertyCode, setPropertyCode] = useState<string>(propertyDetails.propertyCode || '');
  const [name, setName] = useState<string>(propertyDetails.name || '');
  const [descriptionNotes, setDescriptionNotes] = useState<string>(propertyDetails.descriptionNotes || '');
  const [address1, setAddress1] = useState<string>(propertyDetails.address1 || '');
  const [address2, setAddress2] = useState<string>(propertyDetails.address2 || ''); 
  const [city, setCity] = useState<string>(propertyDetails.city || '');
  const [prefecture, setPrefecture] = useState<string>(propertyDetails.prefecture || '');
  const [postcode, setPostcode] = useState<string>(propertyDetails.postcode || '');
  
  // Handler for property code change
  function handlePropertyCodeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPropertyCode(event.target.value);
  }
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleDescriptionNotesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescriptionNotes(event.target.value);
  }
  function handleAddress1Change(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress1(event.target.value);
  }
  function handleAddress2Change(event: React.ChangeEvent<HTMLInputElement>) {
    setAddress2(event.target.value);
  }
  function handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }
  function handlePrefectureChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPrefecture(event.target.value);
  }
  function handlePostcodeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPostcode(event.target.value);
  }    
  
  return (
    <div className={styles.container}>
      <Card title="Property Overview" className={styles.card}>
        <Grid columns={3} className={styles.grid} gap="0.1rem">
          
          <FormGroup className={styles.groupTitle} title="Basic Info">
            <Input 
              label="Property Code" 
              value={propertyCode} 
              onChange={handlePropertyCodeChange}
            />
            <Input 
              label="Property Name" 
              value={name} 
              onChange={handleNameChange}
            />     
            <Input 
              label="Description Notes" 
              value={descriptionNotes} 
              onChange={handleDescriptionNotesChange}
              type="text"

            />                                     
            
          </FormGroup>
          <FormGroup className={styles.groupTitle} title="Location">
            <Input 
              label="Address 1" 
              value={address1} 
              onChange={handleAddress1Change} 
            />
            <Input 
              label="Address 2" 
              value={address2} 
              onChange={handleAddress2Change}
            />
            <Input 
              label="City" 
              value={city} 
              onChange={handleCityChange}
            />
            <Input 
              label="Prefecture" 
              value={prefecture}  
              onChange={handlePrefectureChange}              
            />
            
          </FormGroup>

          <FormGroup className={styles.groupTitle} title="Additional Info">
            <Input 
              label="Postal Code" 
              value={postcode} 
              onChange={handlePostcodeChange}
            />
            <Input 
              label="County/Municipality" 
              value={propertyDetails.countyMunicipality} 
              readOnly 
            />
            <Input 
              label="Country" 
              value={propertyDetails.country} 
              readOnly 
            />
            <Input 
              label="Region" 
              value={propertyDetails.region} 
              readOnly 
            />
          </FormGroup>

        </Grid>
      </Card>
    </div>
  );
};

export default PropertyOverview;