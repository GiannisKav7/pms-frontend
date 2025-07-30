import React, { useState } from "react";
import styles from "./BuildingDetailsBasicInfo.module.css";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FaPen, FaCheck } from "react-icons/fa";

interface BuildingDetailsBasicInfoProps {
  buildingDetails: {
    buildingCode: string;
    buildingName: string;
    address: string;
    status: string;
  };
}

const BuildingDetailsBasicInfo: React.FC<BuildingDetailsBasicInfoProps> = ({ buildingDetails }) => {
  const { buildingCode, buildingName, address, status } = buildingDetails;
  const [isEditing, setEditing] = useState<boolean>(false);

  const toggleEdit = () => {
    setEditing((prev) => !prev);
  };

  return (
    <Grid columns={1} className={styles.container}>
      <Container className={styles.leftColumn}>
        <div className={styles.row}>
          {isEditing ? <Input /> : <div className={styles.buildingName}>{buildingName}</div>}
          <Button mode="default" className={styles.editButton} onClick={toggleEdit}>
            {isEditing ? <FaCheck color="green" /> : <FaPen />}
          </Button>
        </div>
        <div className={styles.row}>
          <div className={styles.buildingCode}>{buildingCode}</div>
          <div className={styles.address}>{address}</div>
          <Tag type="success">{status}</Tag>
        </div>
      </Container>
      
    </Grid>
  );
};

export default BuildingDetailsBasicInfo;