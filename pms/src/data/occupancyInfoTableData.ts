export interface OccupancyInfo {
    key: string,
    unitStatus: string,
    dateAvailable: string,
    dateReady: string,
    furnished: string,
}

export const occupancyInfoTableData: OccupancyInfo[] = [
    {
        key: "1",
        unitStatus: "Occupied",
        dateAvailable: new Date("2024-02-01").toLocaleDateString("en-US"),
        dateReady: new Date("2024-02-15").toLocaleDateString("en-US"),
        furnished: "Yes",
    },
    {
        key: "2",
        unitStatus: "Vacant Rented",
        dateAvailable: new Date("2024-03-01").toLocaleDateString("en-US"),
        dateReady: new Date("2024-03-10").toLocaleDateString("en-US"),
        furnished: "No",
    },
];