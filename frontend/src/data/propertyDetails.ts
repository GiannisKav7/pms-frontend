export interface Property {
  propertyCode: string;
  name: string;
  units: number;
  size: number;
  occupancy: number;
  type: string[];
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  city: string;
  countyMunicipality: string;
  prefecture: string;
  region: string;
  postcode: string;
  country: string;
  descriptionNotes: string;
}

export const initialPropertyDetails: Property = {
  propertyCode: "P-001",
  name: "Alpha Headquarters",
  units: 35,
  size: 623,
  occupancy: 0.8,
  type: ["Residential", "Commercial"],
  address1: "123 Main Street",
  address2: "Suite 500",
  address3: "",
  address4: "",
  city: "Athens",
  countyMunicipality: "",
  prefecture: "Attica",
  region: "Southern Greece",
  postcode: "12345",
  country: "Greece",
  descriptionNotes: "Main office building for Alpha Corp.",
};