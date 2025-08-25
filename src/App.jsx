import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CanvasCursor from "./components/CanvasCursor";
import Hero from "./pages/Hero";
import PopularEvent from "./pages/PopularEvents"
import Event from "./pages/Event";
import Team from "./pages/Team";
import Timeline from "./pages/Timeline";

const App = () => {
  return (
    <Router>
      <CanvasCursor />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <Timeline />
              <PopularEvent />
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
