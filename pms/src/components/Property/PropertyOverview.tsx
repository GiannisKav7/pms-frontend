import React from "react";
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import FormGroup from "../ui/FormGroup";
import styles from "./PropertyOverview.module.css";
import Input from "../ui/Input";
import NumberWithPostfix from "../ui/NumberWithPostfix";

interface PropertyOverviewProps {
  propertyDetails: Record<string, any>;
}

const PropertyOverview: React.FC<PropertyOverviewProps> = ({ propertyDetails }) => {
  
  return (
    <div className={styles.container}>
      <Card title="Property Overview" className={styles.card}>
        <Grid columns={3} className={styles.grid} gap="0.1rem">
          
          <FormGroup className={styles.groupTitle} title="Basic Info">
            <Input 
              label="Property Code" 
              value={propertyDetails.propertyCode} 
               
            />
            <Input 
              label="Property Name" 
              value={propertyDetails.name} 
               
            />     
            <Input 
              label="Description Notes" 
              value={propertyDetails.descriptionNotes} 
               
            />                                     
            
          </FormGroup>
          <FormGroup className={styles.groupTitle} title="Location">
            <Input 
              label="Address 1" 
              value={propertyDetails.address1} 
               
            />
            <Input 
              label="Address 2" 
              value={propertyDetails.address2} 
               
            />
            <Input 
              label="City" 
              value={propertyDetails.city} 
               
            />
            <Input 
              label="Prefecture" 
              value={propertyDetails.prefecture} 
               
            />
            
          </FormGroup>

          <FormGroup className={styles.groupTitle} title="Additional Info">
            <Input 
              label="Postal Code" 
              value={propertyDetails.postcode} 
               
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