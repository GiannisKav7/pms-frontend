export interface TaxInfo {
    key: string,
    legalEntityOwnerCode: string,
    taxAuthority: string,
    baseCurrency: string,
    taxOpted: string,
    taxStatusChanged: string,
    status: string,
    defaultSalesTransactionType: string,
    defaultPurchasesTransactionType: string,
    taxPoint: string,
    reportEntityCode: string,
}

export const taxInfoData: TaxInfo = 
{
    key: "1",
    legalEntityOwnerCode: "LE-001",
    taxAuthority: "Athens Tax Authority",
    baseCurrency: "EUR",
    taxOpted: "Yes",
    taxStatusChanged: new Date("2024-01-01").toLocaleDateString("el-GR"),
    status: "Active",
    defaultSalesTransactionType: "Retail",
    defaultPurchasesTransactionType: "Wholesale",
    taxPoint: "Invoice Date",
    reportEntityCode: "REP-001",
};