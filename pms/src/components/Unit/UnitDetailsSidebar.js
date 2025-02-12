import React from "react";
import { Menu } from "antd";

const UnitDetailsSidebar = ({ selectedMenuItem, setSelectedMenuItem }) => (
  <Menu
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
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

export default UnitDetailsSidebar;