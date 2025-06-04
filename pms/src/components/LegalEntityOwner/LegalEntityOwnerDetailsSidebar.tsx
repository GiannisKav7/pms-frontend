import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";

interface LegalEntityOwnerDetailsSidebarProps {
  selectedMenuItem: string;
  setSelectedMenuItem: (key: string) => void;
}

const LegalEntityOwnerDetailsSidebar: React.FC<LegalEntityOwnerDetailsSidebarProps> = ({
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
      <Menu.Item key="properties">Properties</Menu.Item>
      <Menu.Item key="taxInformation">Tax Information</Menu.Item>
      <Menu.Item key="otherInformation">Other Information</Menu.Item>
      <Menu.Item key="paymentInformation">Payment Information</Menu.Item>
      <Menu.Item key="contacts">Contacts</Menu.Item>
    </Menu>
  );
};

export default LegalEntityOwnerDetailsSidebar;