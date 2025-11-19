export interface PaymentInfo {
    key: string;
    checkMemo: string;
    drawAccount: string;
    holdPayments: "Yes" | "No";
    consolidateCheques: "Yes" | "No";
    paymentMethod: string;
}

export const paymentInfoTableData: PaymentInfo[] = [
    {
        key: "1",
        checkMemo: "Rent payment for June",
        drawAccount: "Account-001",
        holdPayments: "No",
        consolidateCheques: "Yes",
        paymentMethod: "Bank Transfer",
    },
    {
        key: "2",
        checkMemo: "Maintenance fee",
        drawAccount: "Account-002",
        holdPayments: "Yes",
        consolidateCheques: "No",
        paymentMethod: "Cheque",
    },
];