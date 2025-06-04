import React from "react";

export interface LeaseColumn {
  title: string;
  dataIndex: string;
  key: string;
  render?: (text: any, record?: any, index?: number) => React.ReactNode;
}

export interface LeaseTabColumns {
  units: LeaseColumn[];
  chargeSchedules: LeaseColumn[];
  amendments: LeaseColumn[];
  clauses: LeaseColumn[];
  options: LeaseColumn[];
  contacts: LeaseColumn[];
}

export const getTabColumns = (
  handleNavigation: (value: any, field: string) => void
): LeaseTabColumns => ({
  units: [
    {
      title: "Unit Code",
      dataIndex: "unitCode",
      key: "unitCode",
      render: (text: any, record?: any, index?: number): React.ReactNode => (
        <a
          style={{ color: "#1890ff" }}
          onClick={() => handleNavigation(text, "unit")}
        >
          {text}
        </a>
      ),
    },
    { title: "Building Code", dataIndex: "buildingCode", key: "buildingCode" },
    { title: "Floor Code", dataIndex: "floorCode", key: "floorCode" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Location", dataIndex: "location", key: "location" },
    { title: "From Date", dataIndex: "fromDate", key: "fromDate" },
    { title: "To Date", dataIndex: "toDate", key: "toDate" },
    { title: "Moving in Date", dataIndex: "movingInDate", key: "movingInDate" },
    { title: "Moving out Date", dataIndex: "movingOutDate", key: "movingOutDate" },
  ],
  chargeSchedules: [
    { title: "Charge Type", dataIndex: "chargeType", key: "chargeType" },
    { title: "Charge Code", dataIndex: "chargeCode", key: "chargeCode" },
    { title: "From", dataIndex: "from", key: "from" },
    { title: "To/Inactive", dataIndex: "toInactive", key: "toInactive" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Currency", dataIndex: "currency", key: "currency" },
    { title: "Amount/Contr.Area ($/sqm)", dataIndex: "amountPerContrArea", key: "amountPerContrArea" },
    { title: "Amount Period", dataIndex: "amountPeriod", key: "amountPeriod" },
    { title: "Unit(s)", dataIndex: "units", key: "units" },
    { title: "View", dataIndex: "view", key: "view" },
  ],
  amendments: [
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Date From", dataIndex: "dateFrom", key: "dateFrom" },
    { title: "Date To", dataIndex: "dateTo", key: "dateTo" },
    { title: "Period", dataIndex: "period", key: "period" },
    { title: "Description (Notes)", dataIndex: "description", key: "description" },
  ],
  clauses: [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "End Date", dataIndex: "endDate", key: "endDate" },
    { title: "Reference", dataIndex: "reference", key: "reference" },
    { title: "Unit(s)", dataIndex: "units", key: "units" },
  ],
  options: [
    { title: "Type", dataIndex: "type", key: "type" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Expirations Date", dataIndex: "expirationDate", key: "expirationDate" },
    { title: "Notice Date", dataIndex: "noticeDate", key: "noticeDate" },
    { title: "Description (Notes)", dataIndex: "description", key: "description" },
    { title: "Unit(s)", dataIndex: "units", key: "units" },
    { title: "Area (sqm)", dataIndex: "area", key: "area" },
  ],
  contacts: [
    {
      title: "Contact Code",
      dataIndex: "contactCode",
      key: "contactCode",
      render: (text: any) => (
        <a
          style={{ color: "#1890ff" }}
          onClick={() => handleNavigation(text, "contact")}
        >
          {text}
        </a>
      ),
    },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Primary", dataIndex: "primary", key: "primary" },
    { title: "Company Name", dataIndex: "companyName", key: "companyName" },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last Name", dataIndex: "lastName", key: "lastName" },
    { title: "Phone Number 1", dataIndex: "phoneNumber1", key: "phoneNumber1" },
    { title: "Phone Number 2", dataIndex: "phoneNumber2", key: "phoneNumber2" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Inactive Date", dataIndex: "inactiveDate", key: "inactiveDate" },
  ],
});
