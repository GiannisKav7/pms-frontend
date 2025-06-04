import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";

interface BuildingDetailsSidebarProps {
  selectedMenuItem: string;
  setSelectedMenuItem: (key: string) => void;
}

const BuildingDetailsSidebar: React.FC<BuildingDetailsSidebarProps> = ({
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
      <Menu.Item key="general">General</Menu.Item>
      <Menu.Item key="units">Unit(s)</Menu.Item>
      <Menu.Item key="contacts">Contacts</Menu.Item>
    </Menu>
  );
};

export default BuildingDetailsSidebar;