interface Charge {
    key: string;
    chargeType: string;
    chargeCode: string;
    from: string;
    toInactive: string;
    amount: number;
    currency: string;
    amountPerContrArea: number;
    amountPeriod: string;
    unit: string;
    unitCode?: string; // Optional: if not provided, will fallback to unit
}

export const chargesScheduleTableData: Charge[] =
[
    {
        key: "1",
        chargeType: "Base Rent",
        chargeCode: "BR001",
        from: "2023-01-01",
        toInactive: "2023-12-31",
        amount: 1000,
        currency: "USD",
        amountPerContrArea: 10,
        amountPeriod: "Monthly",
        unit: "456456",
        unitCode: "456456",
    },
    {
        key: "2",
        chargeType: "Parking Fee",
        chargeCode: "PF001",
        from: "2023-01-01",
        toInactive: "2023-12-31",
        amount: 200,
        currency: "USD",
        amountPerContrArea: 2,
        amountPeriod: "Monthly",
        unit: "123122",
        unitCode: "123122",
    },
]