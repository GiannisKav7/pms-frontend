import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Layouts/Sidebar";
import { initialLeaseDetails, type Lease } from "../data/leaseDetails";
import LeaseOverviewContent from "../components/Lease/LeaseOverviewContent";
import LeaseBasicInfoBar from "../components/Lease/LeaseBasicInfoBar";
import styles from "./LeaseDetails.module.css";
import UnitTable from "../components/Tables/UnitTable";
import ChargesScheduleTable from "../components/Tables/ChargesScheduleTable";
import OptionsTable from "../components/Tables/OptionsTable";
import AmendmentsTable from "../components/Tables/AmendmentsTable";
import ClausesTable from "../components/Tables/ClausesTable";
import ContactsTable from "../components/Tables/ContactsTable";
import { AiOutlineHome, AiOutlineBuild, AiOutlineDollarCircle, AiOutlineEdit, AiOutlineFile, AiOutlineSetting, AiOutlineContacts } from 'react-icons/ai';

const LeaseDetails: React.FC = () => {

  const items = [
  { label: "Overview", path: `/lease/${initialLeaseDetails.leaseCode}`, icon: AiOutlineHome },
  { label: "Unit(s)", path: `/lease/${initialLeaseDetails.leaseCode}/units`, icon: AiOutlineBuild },
  { label: "Charge Schedules", path: `/lease/${initialLeaseDetails.leaseCode}/charge-schedules`, icon: AiOutlineDollarCircle },
  { label: "Amendments", path: `/lease/${initialLeaseDetails.leaseCode}/amendments`, icon: AiOutlineEdit },
  { label: "Clauses", path: `/lease/${initialLeaseDetails.leaseCode}/clauses`, icon: AiOutlineFile },
  { label: "Options", path: `/lease/${initialLeaseDetails.leaseCode}/options`, icon: AiOutlineSetting },
  { label: "Contacts", path: `/lease/${initialLeaseDetails.leaseCode}/contacts`, icon: AiOutlineContacts },
];

  const [leaseDetails, _setLeaseDetails] = useState<Lease>(initialLeaseDetails);
  return (
    <>
    <div className={styles.header}>
      <LeaseBasicInfoBar leaseBarDetails={{
        leaseCode: leaseDetails.leaseCode,
        leaseName: leaseDetails.leaseName,
        customerCode: leaseDetails.customerCode,
        rentMonthly: leaseDetails.rentMonthly.toString(),
        leaseFromDate: new Date(leaseDetails.leaseFromDate),
        leaseToDate: new Date(leaseDetails.leaseToDate)
      }} />
    </div>
    <div className={styles.content}>
      <Sidebar items={items} />
      <div >
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
