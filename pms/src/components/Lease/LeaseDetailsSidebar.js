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

const LeaseDetailsSidebar = ({ selectedMenuItem, setSelectedMenuItem }) => (
  <Menu
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
    style={{ height: "100%", borderRight: 0 }}
  >
    <Menu.Item key="overview" icon={<HomeOutlined />}>
      Lease Overview
    </Menu.Item>
    <Menu.Item key="units" icon={<TableOutlined />}>
      Unit(s)
    </Menu.Item>
    <Menu.Item key="chargeSchedules" icon={<DollarOutlined />}>
      Charge Schedules
    </Menu.Item>
    <Menu.Item key="amendments" icon={<EditOutlined />}>
      Amendments
    </Menu.Item>
    <Menu.Item key="clauses" icon={<FileTextOutlined />}>
      Clauses
    </Menu.Item>
    <Menu.Item key="options" icon={<SettingOutlined />}>
      Options
    </Menu.Item>
    <Menu.Item key="contacts" icon={<ContactsOutlined />}>
      Contacts
    </Menu.Item>
  </Menu>
);

export default LeaseDetailsSidebar;