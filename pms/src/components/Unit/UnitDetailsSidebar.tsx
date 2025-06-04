import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";

interface UnitDetailsSidebarProps {
  selectedMenuItem: string;
  setSelectedMenuItem: (key: string) => void;
}

const UnitDetailsSidebar: React.FC<UnitDetailsSidebarProps> = ({
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
      <Menu.Item key="occupancyInfo">Occupancy Information</Menu.Item>
      <Menu.Item key="roomTotals">Room Totals</Menu.Item>
      <Menu.Item key="rooms">Rooms</Menu.Item>
      <Menu.Item key="userDefinedFields">User Defined Fields</Menu.Item>
      <Menu.Item key="residentialRules">Residential Rules</Menu.Item>
      <Menu.Item key="contacts">Contacts</Menu.Item>
      <Menu.Item key="academicTerms">Academic Terms</Menu.Item>
    </Menu>
  );
};

export default UnitDetailsSidebar;