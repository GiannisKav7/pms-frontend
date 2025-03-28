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
import styles from "./Sidebar.module.css"; // Import the CSS module

// Default menu items configuration
const defaultMenuItems = [
  { key: "overview", label: "Overview", icon: <HomeOutlined /> },
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
    theme="light"
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
    className={styles.sidebar}
  >
    {menuItems.map((item) => (
      <Menu.Item 
        className={styles.sidebar}       
        key={item.key}
        icon={item.icon}>
        {item.label}
      </Menu.Item>
    ))}
  </Menu>
);

export default Sidebar;