import React from "react";
import styles from "./PropertyBasicInfoBar.module.css";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Tag from "../ui/Tag";

interface PropertyBasicInfoBarProps {
  propertyBarDetails: {
    name: string;
    propertyCode: string;
    units: number;
    size: number;
    occupancy: number;
    type: string[];
  };
}

const PropertyBasicInfoBar: React.FC<PropertyBasicInfoBarProps> = ({ propertyBarDetails }) => {
  const { name, propertyCode, units, size, occupancy, type } = propertyBarDetails;
  
  return (
    <Grid columns={2} className={styles.container}>
      <Container className={styles.leftColumn}>
        <div className={styles.row}>
         <div className={styles.name}>{name}</div> 
        </div>
        <div className={styles.row}>
          <div className={styles.propertyCode}>{propertyCode}</div>
          <Tag type="success">{occupancy > 0 ? "Occupied" : "Vacant"}</Tag>
        </div>
      </Container>
      <Container className={styles.rightColumn}>
        <div className={styles.propertyType}>{type.join(", ")}</div>
        <div>
          {units} Units | {size} sqm
        </div>
      </Container>
    </Grid>
  );
};

export default PropertyBasicInfoBar;