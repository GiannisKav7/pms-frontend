interface Contact {
  key: string;
  contactCode: string;
  role: string;
  primary: boolean;
  companyName: string;
  firstName: string;
  lastName: string;
  phone1: string;
  phone2: string;
  email: string;
  inactiveDate: string;
}

export const contactTableData: Contact[] = [
  {
    key: "1",
    contactCode: "C001",
    role: "Manager",
    primary: true,
    companyName: "Example Corp",
    firstName: "John",
    lastName: "Doe",
    phone1: "123-456-7890",
    phone2: "098-765-4321",
    email: "john@example.com",
    inactiveDate: "",
  },
  {
    key: "2",
    contactCode: "C002",
    role: "Supervisor",
    primary: false,
    companyName: "Another Corp",
    firstName: "Jane",
    lastName: "Smith",
    phone1: "555-555-5555",
    phone2: "",
    email: "jane@another.com",
    inactiveDate: "2023-12-31",
  },
];