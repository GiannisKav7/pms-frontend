import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Layouts/Sidebar";
import LeaseOverviewContent from "../components/Lease/LeaseOverviewContent";
import LeaseBasicInfoBar from "../components/Lease/LeaseBasicInfoBar";
import styles from "./LeaseDetails.module.css";
import { initialLeaseDetails, type Lease } from "../data/leaseDetails";
import UnitTable from "../components/Lease/Tables/UnitTable";
import ChargesScheduleTable from "../components/Lease/Tables/ChargesScheduleTable";
import OptionsTable from "../components/Lease/Tables/OptionsTable";
import AmendmentsTable from "../components/Lease/Tables/AmendmentsTable";
import ClausesTable from "../components/Lease/Tables/ClausesTable";
import ContactsTable from "../components/Lease/Tables/ContactsTable";
import { FaHome, FaBuilding, FaMoneyBill, FaEdit, FaScroll, FaCogs, FaAddressBook } from "react-icons/fa";

const LeaseDetails: React.FC = () => {

  const items = [
  { label: "Overview", path: `/lease/${initialLeaseDetails.leaseCode}`, icon: FaHome },
  { label: "Unit(s)", path: `/lease/${initialLeaseDetails.leaseCode}/units`, icon: FaBuilding },
  { label: "Charge Schedules", path: `/lease/${initialLeaseDetails.leaseCode}/charge-schedules`, icon: FaMoneyBill },
  { label: "Amendments", path: `/lease/${initialLeaseDetails.leaseCode}/amendments`, icon: FaEdit },
  { label: "Clauses", path: `/lease/${initialLeaseDetails.leaseCode}/clauses`, icon: FaScroll },
  { label: "Options", path: `/lease/${initialLeaseDetails.leaseCode}/options`, icon: FaCogs },
  { label: "Contacts", path: `/lease/${initialLeaseDetails.leaseCode}/contacts`, icon: FaAddressBook },
];

  const navigate = useNavigate();
  const [leaseDetails, setLeaseDetails] = useState<Lease>(initialLeaseDetails);
   
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
      <Sidebar items={items} />
      <div className={styles.content}>
        <Routes>
          <Route
            index
            element={<LeaseOverviewContent leaseDetails={leaseDetails} />}
          />
          <Route
            path="units"
            element={<UnitTable />}
          />
          <Route
            path="charge-schedules"
            element={<ChargesScheduleTable />}
          />
          <Route
            path="options"
            element={<OptionsTable />}
          />
          <Route
            path="amendments"
            element={<AmendmentsTable />}
          />
          <Route
            path="clauses"
            element={<ClausesTable />}
          />
          <Route
            path="contacts"
            element={<ContactsTable />}
          />
        </Routes>
        
      </div>
    </div>
    </>
  );
};

export default LeaseDetails;
