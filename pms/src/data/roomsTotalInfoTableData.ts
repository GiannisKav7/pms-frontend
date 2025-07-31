interface RoomInfo {
    key: string;
    totalRoomCount: number;
    occupiedRooms: number;
    unoccupiedRooms: number;
    totalBedsCount: number;
    currentOccupiedBeds: number;
    unoccupiedBeds: number;
    assignableCapacity: number;
    maximumCapacity: number;
}

export const roomsTotalInfoTableData: RoomInfo[] = [
    {
        key: "1",
        totalRoomCount: 2,
        occupiedRooms: 2,
        unoccupiedRooms: 0,
        totalBedsCount: 4,
        currentOccupiedBeds: 75,
        unoccupiedBeds: 25,
        assignableCapacity: 75,
        maximumCapacity: 100,
    }    
];