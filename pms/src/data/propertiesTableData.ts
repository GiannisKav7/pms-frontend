export interface Property {
    key: string;
    propertyCode: string;
    propertyName: string;
    address: string;
    percentOwned: number;
}

export const propertiesTableData: Property[] = [
    {
        key: "1",
        propertyCode: "PR001",
        propertyName: "Central Plaza",
        address: "123 Main St, Athens",
        percentOwned: 100,
    },
    {
        key: "2",
        propertyCode: "PR002",
        propertyName: "Seaside Villa",
        address: "456 Beach Rd, Thessaloniki",
        percentOwned: 50,
    },
];