import React from "react";
import { Menu } from "antd";

const ContactDetailsSidebar = ({ selectedMenuItem, setSelectedMenuItem }) => (
  <Menu
    mode="inline"
    selectedKeys={[selectedMenuItem]}
    onClick={(e) => setSelectedMenuItem(e.key)}
    style={{ height: "100%", borderRight: 0 }}
  >
    <Menu.Item key="contactInfo">Contact Information</Menu.Item>
    <Menu.Item key="address">Address</Menu.Item>
    <Menu.Item key="contactDetails">Contact Details</Menu.Item>
    <Menu.Item key="contactTypeAssociation">Contact Type Association</Menu.Item>
  </Menu>
);

export default ContactDetailsSidebar;