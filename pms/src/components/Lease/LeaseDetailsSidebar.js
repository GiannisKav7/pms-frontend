import React from "react";
import { Menu } from "antd";

const LeaseDetailsSidebar = ({ selectedMenuItem, setSelectedMenuItem }) => (
  <Menu
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
    style={{ height: "100%", borderRight: 0 }}
  >
    <Menu.Item key="overview">Lease Overview</Menu.Item>
    <Menu.Item key="units">Unit(s)</Menu.Item>
    <Menu.Item key="chargeSchedules">Charge Schedules</Menu.Item>
    <Menu.Item key="amendments">Amendments</Menu.Item>
    <Menu.Item key="clauses">Clauses</Menu.Item>
    <Menu.Item key="options">Options</Menu.Item>
    <Menu.Item key="contacts">Contacts</Menu.Item>
  </Menu>
);

export default LeaseDetailsSidebar;