import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
