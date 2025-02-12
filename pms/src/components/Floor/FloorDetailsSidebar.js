import React from "react";
import { Menu } from "antd";

const FloorDetailsSidebar = ({ selectedMenuItem, setSelectedMenuItem }) => (
  <Menu
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
    style={{ height: "100%", borderRight: 0 }}
  >
    <Menu.Item key="basicInfo">Basic Information</Menu.Item>
    <Menu.Item key="general">General</Menu.Item>
    <Menu.Item key="units">Units</Menu.Item>
  </Menu>
);

export default FloorDetailsSidebar;