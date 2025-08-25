// src/Layout.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="pt-14 min-h-screen">{children}</main> {/* offset for fixed navbar */}
    <Footer />
  </>
);

export default Layout;