import React from "react";
import { Menu } from "antd";

const UnitTypeDetailsSidebar = ({ selectedMenuItem, setSelectedMenuItem }) => (
  <Menu
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
    style={{ height: "100%", borderRight: 0 }}
  >
    <Menu.Item key="basicInfo">Basic Information</Menu.Item>
    <Menu.Item key="rentInfo">Rent Information</Menu.Item>
    <Menu.Item key="featuresOptions">Features & Options</Menu.Item>
  </Menu>
);

export default UnitTypeDetailsSidebar;