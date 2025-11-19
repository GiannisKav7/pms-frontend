interface Room {
    key: string;
    roomCode: string;
    description: string;
    roomStatus: string;
    area: number;
    accessibleForDisabled: boolean;
    dateAvailable: string;
    dateVacant: string;
    tenantCode: string;
}

export const roomsTableData: Room[] = [
    {
        key: "1",
        roomCode: "R001",
        description: "Conference Room - First Floor",
        roomStatus: "Vacant Unrented Ready",
        area: 500,
        accessibleForDisabled: true,
        dateAvailable: "2023-11-01",
        dateVacant: "",
        tenantCode: "",
    },
    {
        key: "2",
        roomCode: "R002",
        description: "Office Space - Second Floor",
        roomStatus: "Occupied",
        area: 300,
        accessibleForDisabled: false,
        dateAvailable: "",
        dateVacant: "2023-12-15",
        tenantCode: "T001",
    },
];