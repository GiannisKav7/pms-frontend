import React, { useState } from "react";
import styles from "./PropertyBasicInfoBar.module.css";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import { FaPen, FaCheck } from "react-icons/fa";
import Input from "../ui/Input";

interface PropertyBasicInfoBarProps {
    propertyCode: string;
    name: string;
    units: number;
    size: number;
    occupancy: number;
    type: string[];
    city: string;
    region: string;
    country: string;
    address1: string;
    address2?: string;
    address3?: string;
    address4?: string;
    postcode: string;
    descriptionNotes?: string;
  };


const PropertyBasicInfoBar: React.FC<PropertyBasicInfoBarProps> = ({ propertyBarDetails }) => {
  const {
    propertyCode,
    name,
    units,
    size,
    occupancy,
    type,
    city,
    region,
    country,
    address1,
    address2,
    postcode,
  } = propertyBarDetails;

  const [isEditing, setEditing] = useState<boolean>(false);

  const toggleEdit = () => {
    setEditing((prev) => !prev);
  };

  return (
    <Grid columns={2} className={styles.container}>
      <Container className={styles.leftColumn}>
        <div className={styles.row}>
          {isEditing ? <Input /> : <div className={styles.name}>{name}</div>}
          <Button color="primary" className={styles.editButton} onClick={toggleEdit}>
            {isEditing ? <FaCheck /> : <FaPen />}
          </Button>
        </div>
        <div className={styles.row}>
          <div className={styles.propertyCode}>{propertyCode}</div>
          <div className={styles.city}>{city}</div>
          <Tag type={status === "Active" ? "success" : "error"}>{status}</Tag>
        </div>
        <div className={styles.row}>
          <div className={styles.address}>
            {address1}
            {address2 && `, ${address2}`}
            , {postcode}
          </div>
        </div>
      </Container>
      <Container className={styles.rightColumn}>
        <div className={styles.regionCountry}>
          {region}, {country}
        </div>

      </Container>
    </Grid>
  );
};

export default PropertyBasicInfoBar;