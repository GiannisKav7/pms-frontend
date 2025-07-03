import React from "react";
import styles from "./LeaseBasicInfoBar.module.css";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Tag from "../ui/Tag";
import { useState } from "react";
import Button from "../ui/Button";
import { FaPen, FaCheck } from "react-icons/fa";
import Input from "../ui/Input";

interface LeaseBasicInfoBarProps{
  leaseBarDetails: {
    leaseCode: String,
    leaseName: String,
    leaseType: String,
    status: String,
    customerCode: String,
    rentMonthly: String,
    leaseFromDate: Date,
    leaseToDate: Date,
  };
}

const LeaseBasicInfoBar: React.FC<LeaseBasicInfoBarProps> = ({ leaseBarDetails }) => {
  const { leaseCode, leaseName, leaseType, status, customerCode, rentMonthly, leaseFromDate, leaseToDate } = leaseBarDetails;
  // const statusColor = status === "Active" ? "green" : "red";

  const [isEditing, setEditing] = useState<Boolean>(false);
  
  const toogleEdit = () => {
    setEditing(prevIsOpen => !prevIsOpen)
  };


  return (
    <>
      <Grid columns={2} className={styles.container} marginLeft="-15px">
        <Container className={styles.leftColumn}>
          <div className={styles.row}>
            {isEditing ? <Input /> :<div className={styles.leaseName}>{leaseName}</div>}
            <Button mode="default" className={styles.editButton} onClick={toogleEdit}>{isEditing ? <FaCheck color="green"/>: <FaPen />}</Button>
            
          </div>
          <div className={styles.row}>
            <div className={styles.leaseCode}>{leaseCode}</div>
            <div className={styles.customerCode}>{customerCode}</div>
            <Tag type="success">Active</Tag>
          </div>
        </Container>
        <Container className={styles.rightColumn}>
          <div className={styles.rentMonthly}>Rent Monthly: {rentMonthly} EUR</div>
          <p className={styles.dateRange}>{new Date(leaseFromDate).toLocaleDateString("el-GR")} - {new Date(leaseToDate).toLocaleDateString("en-GR")}</p>
        </Container>
      </Grid>
    </>
  );
};

export default LeaseBasicInfoBar;