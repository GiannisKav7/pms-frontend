import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Layouts/Sidebar";
import LeaseOverviewContent from "../components/Lease/LeaseOverviewContent";
import LeaseBasicInfoBar from "../components/Lease/LeaseBasicInfoBar";
import styles from "./LeaseDetails.module.css";

interface OverviewGroup {
  title: string;
  fields: string[];
}

const overviewGroups: OverviewGroup[] = [
  {
    title: "Property Info",
    fields: ["propertyCode", "ownerCode", "contractedArea", "atRisk"],
  },
  {
    title: "Rent Info",
    fields: ["rentYearly", "rentPerSqmMonthly", "rentPerSqmYearly"],
  },
  {
    title: "Key Dates",
    fields: [
      "moveInDate",
      "moveOutDate",
      "lastRenewalDate",
      "signDate",
      "nextBreakDate",
      "nextRentReviewDate",
    ],
  },
  {
    title: "Security/Deposits",
    fields: ["security", "depositsRequired", "depositsBilled", "depositsReceived"],
  },
  {
    title: "Customer Info",
    fields: ["type", "name", "firstName", "lastName", "taxid"],
  },
];

interface LeaseDetailsType {
  leaseCode: string;
  leaseName: string;
  customerCode: string;
  leaseType: string;
  status: string;
  atRisk: string;
  propertyCode: string;
  ownerCode: string;
  contractedArea: number;
  rentMonthly: number;
  rentYearly: number;
  rentPerSqmMonthly: number;
  rentPerSqmYearly: number;
  leaseFromDate: string;
  leaseToDate: string;
  moveInDate: string;
  moveOutDate: string | null;
  lastRenewalDate: string;
  signDate: string;
  nextBreakDate: string;
  nextRentReviewDate: string;
  security: string;
  depositsRequired: number;
  depositsBilled: number;
  depositsReceived: number;
  type: string;
  name: string;
  taxid: string;
}

const LeaseDetails: React.FC = () => {
   const initialDetails: LeaseDetailsType = {
    leaseCode: "LC-001",
    leaseName: "Office Lease - Main Street",
    customerCode: "CUST-123",
    leaseType: "Commercial",
    status: "Active",
    atRisk: "No",
    propertyCode: "PROP-456",
    ownerCode: "Holdings Kavvetsos IKE",
    contractedArea: 150,
    rentMonthly: 1200,
    rentYearly: 14400,
    rentPerSqmMonthly: 8,
    rentPerSqmYearly: 96,
    leaseFromDate: new Date("2023-01-01").toLocaleDateString("el-GR"),
    leaseToDate: new Date("2023-01-01").toLocaleDateString("el-GR"),
    moveInDate: new Date("2023-01-01").toLocaleDateString("el-GR"),
    moveOutDate: null,
    lastRenewalDate: new Date("2023-01-01").toLocaleDateString("el-GR"),
    signDate: new Date("2023-01-01").toLocaleDateString("el-GR"),
    nextBreakDate: new Date("2025-01-01").toLocaleDateString("el-GR"),
    nextRentReviewDate: new Date("2025-01-01").toLocaleDateString("el-GR"),
    security: "Yes",
    depositsRequired: 2400,
    depositsBilled: 2400,
    depositsReceived: 2400,
    type: "Legal Entity",
    name: "Alpha Real Estate Management S.A.",
    taxid: "1023664",
  };

  const navigate = useNavigate();
  // const [selectedMenuItem, setSelectedMenuItem] = useState<string>("overview");
  // const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [leaseDetails, setLeaseDetails] = useState<LeaseDetailsType>(initialDetails);
   
  return (
    <>
    <div className={styles.header}>
      <LeaseBasicInfoBar leaseBarDetails={{
        leaseCode: leaseDetails.leaseCode,
        leaseName: leaseDetails.leaseName,
        leaseType: leaseDetails.leaseType,
        status: leaseDetails.status,
        customerCode: leaseDetails.customerCode,
        rentMonthly: leaseDetails.rentMonthly.toString(),
        leaseFromDate: new Date(leaseDetails.leaseFromDate),
        leaseToDate: new Date(leaseDetails.leaseToDate)
      }} />
    </div>
    <div className={styles.content}>
      <Sidebar />
      <div className={styles.content}>
        <LeaseOverviewContent leaseDetails={leaseDetails}/>
      </div>
    </div>
    </>
  );
};

export default LeaseDetails;
