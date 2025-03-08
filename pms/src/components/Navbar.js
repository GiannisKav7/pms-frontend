// Desc: Navbar component for the application
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ background: "#fff", padding: "0 24px" }}>
      <div className="logo" style={{ float: "left", marginRight: 24 }}>
        MyApp
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="leases">
          <Link to="/leases">Leases</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        {/* Add more nav items as needed */}
      </Menu>
    </Header>
  );
};

export default Navbar;
