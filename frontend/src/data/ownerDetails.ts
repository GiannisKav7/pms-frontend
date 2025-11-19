// filepath: c:\Users\johnk\Documents\GitHub\PMS\pms\src\data\ownerDetails.ts

export interface Owner {
    ownerCode: string;
    name1: string;
    name2: string;
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
    emailAddress: string;
    alternateEmailAddress: string;
    officePhoneNumber: string;
    cellphoneNumber: string;
}

export const initialOwnerDetails: Owner = {
    ownerCode: "LE-001",
    name1: "Alpha Holdings Ltd.",
    name2: "Alpha Group",
    address1: "456 Corporate Avenue",
    address2: "Floor 10",
    address3: "",
    address4: "",
    city: "Athens",
    countyMunicipality: "",
    prefecture: "Attica",
    region: "Southern Greece",
    postcode: "54321",
    country: "Greece",
    descriptionNotes: "Primary legal entity for Alpha properties.",
    emailAddress: "contact@alphaholdings.com",
    alternateEmailAddress: "info@alphaholdings.com",
    officePhoneNumber: "+30 210 1234567",
    cellphoneNumber: "+30 690 1234567"
};