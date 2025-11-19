interface Unit {
    key: string,
    unitName: string,
    unitCode: string,
    buildingCode: string,
    floorCode: string,
    location: string,
    fromDate: string,
    toDate: string,
    movingInDate: string,
    movingOutDate: string,
}

export const unitTableData: Unit[] =
[
    {
      key: "1",
      unitName: "Unit A",
      unitCode: "A1",
      buildingCode: "B1",
      floorCode: "F1",
      location: "Location 1",
      fromDate: "2023-01-01",
      toDate: "2023-12-31",
      movingInDate: "2023-01-05",
      movingOutDate: "2023-12-25",
    },
    {
      key: "2",
      unitName: "Unit B",
      unitCode: "B1",
      buildingCode: "B2",
      floorCode: "F2",
      location: "Location 2",
      fromDate: "2023-02-01",
      toDate: "2023-11-30",
      movingInDate: "2023-02-05",
      movingOutDate: "2023-11-25",
    },
  ]