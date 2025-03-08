// Desc: Navbar component for the application
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header style={{ background: "#ADB2D4", padding: "0 24px" }}>
      <div
        className="logo"
        style={{
          float: "left",
          marginRight: 24,
          color: "#fff",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        MyApp
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        style={{ background: "#ADB2D4" }}
      >
        <Menu.Item key="home">
          <Link to="/" style={{ color: "#fff" }}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="leases">
          <Link to="/leases" style={{ color: "#fff" }}>
            Leases
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about" style={{ color: "#fff" }}>
            About
          </Link>
        </Menu.Item>
        {/* Add more nav items as needed */}
      </Menu>
    </Header>
  );
};

export default Navbar;
