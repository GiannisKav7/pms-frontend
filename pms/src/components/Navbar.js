// Desc: Navbar component for the application
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>MyApp</div>
      <Menu mode="horizontal" defaultSelectedKeys={["home"]} className={styles.menu}>
        <Menu.Item key="home">
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="leases">
          <Link to="/leases" className={styles.navLink}>
            Leases
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
