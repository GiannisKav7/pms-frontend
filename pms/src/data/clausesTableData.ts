interface Clause {
  key: string;
  name: string;
  description: string;
  date: string;
  endDate: string;
  reference: string;
  units: string;
  unitCode?: string;
}

export const clauseTableData: Clause[] = [
  {
    key: "1",
    name: "Clause A",
    description: "Details about Clause A",
    date: "2023-01-01",
    endDate: "2023-12-31",
    reference: "REF-001",
    units: "Unit 1, Unit 2",
  },
  {
    key: "2",
    name: "Clause B",
    description: "Some details about Clause B",
    date: "2023-02-01",
    endDate: "2023-11-30",
    reference: "REF-002",
    units: "Unit 3",
  },
];