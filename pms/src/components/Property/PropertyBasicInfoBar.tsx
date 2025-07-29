import React from "react";
import styles from "./PropertyBasicInfoBar.module.css";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import NumberWithPostfix from "../ui/NumberWithPostfix";

interface PropertyBasicInfoBarProps {
  propertyBarDetails:{
    units: number;
    size: number;
    occupancy: number;
    type: string[];
  };
}

const PropertyBasicInfoBar: React.FC<PropertyBasicInfoBarProps> = ({ propertyBarDetails }) => {
  const {units, size, occupancy, type} = propertyBarDetails;

  return (
    <Grid columns={2} className={styles.container}>
      <Container className={styles.leftColumn}>
        <div className={styles.row}>
          <span>Units:</span>
          <div>{units}</div>
        </div>
        <div className={styles.row}>
          <span>Size:</span>
          <div>{size}</div>
          <span>Occupancy:</span>
          <div>{occupancy}</div>
        </div>
        
      </Container>
      <Container className={styles.rightColumn}>
        {type}
      </Container>
    </Grid>
  );
};

export default PropertyBasicInfoBar;