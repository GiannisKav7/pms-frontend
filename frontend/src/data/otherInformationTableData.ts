export interface OtherInformation {
    key: string;
    contractor: "Yes" | "No";
    contractorReferenceNumber: string;
    nrl: string;
    nrlRegistered: "Yes" | "No";
    nrlNumber: string;
    commercialRegistrationNumber: string;
    cityOfRegistration: string;
    shareCapitalAmount: number;
    deferredIncomeExpenseProration: string;
}

export const otherInformationTableData: OtherInformation[] = [
    {
        key: "1",
        contractor: "Yes",
        contractorReferenceNumber: "CRN-12345",
        nrl: "Non Resident Landlord",
        nrlRegistered: "Yes",
        nrlNumber: "NRL-67890",
        commercialRegistrationNumber: "COM-54321",
        cityOfRegistration: "Athens",
        shareCapitalAmount: 50000,
        deferredIncomeExpenseProration: "Prorated over 12 months",
    },
    {
        key: "2",
        contractor: "No",
        contractorReferenceNumber: "",
        nrl: "",
        nrlRegistered: "No",
        nrlNumber: "",
        commercialRegistrationNumber: "COM-98765",
        cityOfRegistration: "Thessaloniki",
        shareCapitalAmount: 30000,
        deferredIncomeExpenseProration: "Not applicable",
    },
];