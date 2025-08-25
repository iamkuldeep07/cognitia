// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Hero from "./pages/Hero";
import Timeline from "./pages/Timeline";
import PopularEvents from "./pages/PopularEvents";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import CanvasCursor from "./components/CanvasCursor";

import Event from "./pages/Event";
import Team from "./pages/Team";

gsap.registerPlugin(ScrollTrigger, SplitText);

// ✅ Layout wrapper
const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <CanvasCursor /> {/* Cursor stays on top of everything */}
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Timeline />
              <PopularEvents />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <Event />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
