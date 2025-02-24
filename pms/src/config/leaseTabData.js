export const tabData = {
  units: [
    { key: "1", unitCode: "101", buildingCode: "B-001", floorCode: "F-001", name: "Unit A", location: "North Wing", fromDate: "2023-01-01", toDate: "2023-12-31", movingInDate: "2023-01-15", movingOutDate: "2023-12-15" },
    { key: "2", unitCode: "102", buildingCode: "B-002", floorCode: "F-002", name: "Unit B", location: "South Wing", fromDate: "2023-01-01", toDate: "2023-12-31", movingInDate: "2023-01-20", movingOutDate: "2023-12-20" },
  ],
  chargeSchedules: [
    { key: "1", chargeType: "Rent", chargeCode: "CH-001", from: "2023-01-01", toInactive: "2023-12-31", amount: "$1200", currency: "USD", amountPerContrArea: "$8", amountPeriod: "Monthly", units: "Unit A", view: "View Details" },
    { key: "2", chargeType: "Maintenance", chargeCode: "CH-002", from: "2023-01-01", toInactive: "2023-12-31", amount: "$100", currency: "USD", amountPerContrArea: "$0.5", amountPeriod: "Monthly", units: "Unit B", view: "View Details" },
  ],
  amendments: [
    { key: "1", type: "Extension", status: "Approved", dateFrom: "2024-01-01", dateTo: "2024-12-31", period: "12 months", description: "Lease extended by one year." },
  ],
  clauses: [
    { key: "1", name: "No Pets", description: "No pets allowed in the premises.", date: "2023-01-01", endDate: "2023-12-31", reference: "CL-001", units: "Unit A" },
  ],
  options: [
    { key: "1", type: "Renewal", status: "Available", expirationDate: "2024-06-01", noticeDate: "2024-03-01", description: "Option to renew for another year.", units: "Unit A", area: "150 sqm" },
  ],
  contacts: [
    {
      key: "1",
      contactCode: "C-001",
      role: "Manager",
      primary: "Yes",
      companyName: "Alpha Corp",
      firstName: "John",
      lastName: "Doe",
      phoneNumber1: "+30 210 1234567",
      phoneNumber2: "+30 210 7654321",
      email: "john.doe@example.com",
      inactiveDate: "2024-01-01",
    },
    {
      key: "2",
      contactCode: "C-002",
      role: "Tenant",
      primary: "No",
      companyName: "Beta Ltd",
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber1: "+30 210 9876543",
      phoneNumber2: "+30 210 1239876",
      email: "jane.smith@betaltd.com",
      inactiveDate: "N/A",
    },
  ],
};
