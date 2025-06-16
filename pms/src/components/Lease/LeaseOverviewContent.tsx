import React from "react";
import Card from "../ui/Card";
import Grid from "../ui/Grid";
import FormGroup from "../ui/FormGroup";
import styles from "./LeaseOverviewContent.module.css";
import Input from "../ui/Input";
import NumberWithPostfix from "../ui/NumberWithPostfix";

interface LeaseOverviewContentProps {
  leaseDetails: Record<string, any>;
}

const LeaseOverviewContent: React.FC<LeaseOverviewContentProps> = ({ leaseDetails }) => {
  return (
    <div className={styles.container}>
      <Card title="Lease Overview" className={styles.card}>
        <Grid columns={5} className={styles.grid}>
          <FormGroup title="Property Info">
            <Input label="Property Code" value={leaseDetails.propertyCode} readOnly />
            <Input label="Owner Code" value={leaseDetails.ownerCode} readOnly />      
            <NumberWithPostfix label="Contracted Area" value={leaseDetails.contractedArea} readOnly postfix="sqm" />
            <Input label="At Risk" value={leaseDetails.atRisk} readOnly />
          </FormGroup>
          <FormGroup title="Rent Info">
            <NumberWithPostfix label="Rent Yearly" value={leaseDetails.rentYearly} postfix="€" readOnly />
            <NumberWithPostfix label="Rent Per Sqm Monthly" value={leaseDetails.rentPerSqmMonthly} postfix="€/sqm" readOnly />
            <NumberWithPostfix label="Rent Per Sqm Yearly" value={leaseDetails.rentPerSqmYearly} postfix="€/sqm" readOnly />
          </FormGroup>
          <FormGroup title="Key Dates">
            <NumberWithPostfix label="Rent Yearly" value={leaseDetails.rentYearly} postfix="€" readOnly />
            <Input label="Move In Date" value={leaseDetails.moveInDate} readOnly />
            <Input label="Move Out Date" value={leaseDetails.moveOutDate} readOnly />
            <Input label="Last Renewal Date" value={leaseDetails.lastRenewalDate} readOnly />
            <Input label="Sign Date" value={leaseDetails.signDate} readOnly />
            <Input label="Next Break Date" value={leaseDetails.nextBreakDates} readOnly />
            <Input label="Next Rent Review Date" value={leaseDetails.nextRentReviewDate} readOnly />
          </FormGroup>
          <FormGroup title="Security/Deposits">
            <Input label="Security" value={leaseDetails.security} readOnly />
            <NumberWithPostfix label="Deposits Required" value={leaseDetails.depositsRequired} postfix="€" readOnly />
            <NumberWithPostfix label="Deposits Billed" value={leaseDetails.depositsBilled} postfix="€" readOnly />
            <NumberWithPostfix label="Deposits Received" value={leaseDetails.depositsReceived} postfix="€" readOnly />
          </FormGroup>
          <FormGroup title="Customer Info">
            <Input label="Type" value={leaseDetails.type} readOnly />
            <Input label="Name" value={leaseDetails.name} readOnly />
            <Input label="First Name" value={leaseDetails.firstName} readOnly />
            <Input label="Last Name" value={leaseDetails.lastName} readOnly />
            <Input label="Taxid" value={leaseDetails.taxid} readOnly />
          </FormGroup>
        </Grid>
      </Card>
    </div>
  );
};

export default LeaseOverviewContent;
