interface Amendment {
  key: string;
  type: string;
  status: string;
  dateFrom: string;
  dateTo: string;
  period: string;
  description: string;
}

export const amendmentsTableData:Amendment[] = [
  {
    key: "1",
    type: "Lease Extension",
    status: "Approved",
    dateFrom: "2023-05-01",
    dateTo: "2024-04-30",
    period: "Yearly",
    description: "Extension due to agreement revision",
  },
  {
    key: "2",
    type: "Rent Adjustment",
    status: "Pending",
    dateFrom: "2023-07-01",
    dateTo: "2023-12-31",
    period: "Monthly",
    description: "Adjustment based on revised market rates",
  },
];