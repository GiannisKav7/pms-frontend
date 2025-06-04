import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";

interface RoomDetailsSidebarProps {
  selectedMenuItem: string;
  setSelectedMenuItem: (key: string) => void;
}

const RoomDetailsSidebar: React.FC<RoomDetailsSidebarProps> = ({
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
      <Menu.Item key="attributes">Attributes</Menu.Item>
      <Menu.Item key="beds">Beds</Menu.Item>
      <Menu.Item key="general">General</Menu.Item>
    </Menu>
  );
};

export default RoomDetailsSidebar;