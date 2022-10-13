import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import SignInUp from "./components/SignInUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignInUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
