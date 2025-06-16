export interface Lease {
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

export const initialLeaseDetails: Lease = 
{
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