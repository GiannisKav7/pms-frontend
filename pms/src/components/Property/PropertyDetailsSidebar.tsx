import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";

interface PropertyDetailsSidebarProps {
  selectedMenuItem: string;
  setSelectedMenuItem: (key: string) => void;
}

const PropertyDetailsSidebar: React.FC<PropertyDetailsSidebarProps> = ({
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
      <Menu.Item key="contacts">Contacts</Menu.Item>
      <Menu.Item key="taxInfo">Tax Info</Menu.Item>
    </Menu>
  );
};

export default PropertyDetailsSidebar;