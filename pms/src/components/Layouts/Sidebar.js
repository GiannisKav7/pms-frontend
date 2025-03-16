import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  TableOutlined,
  DollarOutlined,
  EditOutlined,
  FileTextOutlined,
  SettingOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

// Default menu items configuration
const defaultMenuItems = [
  { key: "overview", label: "Lease Overview", icon: <HomeOutlined /> },
  { key: "units", label: "Unit(s)", icon: <TableOutlined /> },
  { key: "chargeSchedules", label: "Charge Schedules", icon: <DollarOutlined /> },
  { key: "amendments", label: "Amendments", icon: <EditOutlined /> },
  { key: "clauses", label: "Clauses", icon: <FileTextOutlined /> },
  { key: "options", label: "Options", icon: <SettingOutlined /> },
  { key: "contacts", label: "Contacts", icon: <ContactsOutlined /> },
];

const Sidebar = ({
  selectedMenuItem,
  setSelectedMenuItem,
  menuItems = defaultMenuItems,
}) => (
  <Menu
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
    style={{
      height: "100%",
      borderRight: 0,
      boxShadow: "2px 0 2px rgba(0, 0, 0, 0.15)",
      background: "#fff",
    }}
  >
    {menuItems.map((item) => (
      <Menu.Item key={item.key} icon={item.icon}>
        {item.label}
      </Menu.Item>
    ))}
  </Menu>
);

export default Sidebar;