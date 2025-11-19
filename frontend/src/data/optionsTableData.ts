export interface Option {
  key: string;
  type: string;
  status: string;
  expirationsDate: string;
  noticeDate: string;
  description: string;
  units: string;
  unitCode?: string;
  area: number;
}

export const optionTableData: Option[] = [
  {
    key: "1",
    type: "Option A",
    status: "Active",
    expirationsDate: new Date("2024-12-31").toLocaleDateString("el-GR"),
    noticeDate: new Date("2024-11-30").toLocaleDateString("el-GR"),
    description: "Option note details",
    units: "Unit 1, Unit 2",
    area: 1200,
  },
  {
    key: "2",
    type: "Option B",
    status: "Inactive",
    expirationsDate: new Date("2023-06-30").toLocaleDateString("el-GR"),
    noticeDate: new Date("2023-05-31").toLocaleDateString("el-GR"),
    description: "Some more option details",
    units: "Unit 3",
    area: 800,
  },
];
