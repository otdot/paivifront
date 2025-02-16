import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Container style={{ padding: "1rem", minHeight: "87vh" }} maxWidth="md">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
