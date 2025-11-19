export interface Unit{
    name: string;
    propertyCode: string;
    buildingCode: string;
    floorCode: string;
    unitCode: string;
    status: string;
    streetAddress: string;
    number: string;
    address3: string;
    address4: string;
    city: string;
    countyMunicipality: string;
    prefecture: string;
    region: string;
    postcode: string;
    country: string;
    weeklyRent: number;
    area: number;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    descriptionNotes: string;
}

export const initialUnitDetails: Unit = {
    name: "Unit 1A",
    propertyCode: "P-001",
    buildingCode: "B-001",
    floorCode: "F-001",
    unitCode: "U-001",
    status: "Occupied",
    streetAddress: "Main Street",
    number: "500",
    address3: "",
    address4: "",
    city: "Athens",
    countyMunicipality: "",
    prefecture: "Attica",
    region: "Southern Greece",
    postcode: "12345",
    country: "Greece",
    weeklyRent: 250,
    area: 75,
    numberOfBedrooms: 2,
    numberOfBathrooms: 1,
    descriptionNotes: "Spacious residential unit with modern amenities.",
};