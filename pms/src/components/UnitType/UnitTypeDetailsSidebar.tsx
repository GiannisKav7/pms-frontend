import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";

interface UnitTypeDetailsSidebarProps {
  selectedMenuItem: string;
  setSelectedMenuItem: (key: string) => void;
}

const UnitTypeDetailsSidebar: React.FC<UnitTypeDetailsSidebarProps> = ({
  selectedMenuItem,
  setSelectedMenuItem,
}) => {
  const handleClick: MenuProps["onClick"] = (e) => {
    setSelectedMenuItem(e.key);
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedMenuItem]}
      onClick={handleClick}
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.Item key="basicInfo">Basic Information</Menu.Item>
      <Menu.Item key="rentInfo">Rent Information</Menu.Item>
      <Menu.Item key="featuresOptions">Features &amp; Options</Menu.Item>
    </Menu>
  );
};

export default UnitTypeDetailsSidebar;