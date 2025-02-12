import React from "react";
import { Menu } from "antd";

const PropertyDetailsSidebar = ({ selectedMenuItem, setSelectedMenuItem }) => (
  <Menu
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
    style={{ height: "100%", borderRight: 0 }}
  >
    <Menu.Item key="basicInfo">Basic Information</Menu.Item>
    <Menu.Item key="attributes">Attributes</Menu.Item>
    <Menu.Item key="contacts">Contacts</Menu.Item>
    <Menu.Item key="taxInfo">Tax Info</Menu.Item>
  </Menu>
);

export default PropertyDetailsSidebar;