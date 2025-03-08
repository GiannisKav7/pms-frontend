// Desc: Main layout for the application
import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Content style={{ padding: "24px", background: "#f0f2f5" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©2025 PMS. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default MainLayout;
