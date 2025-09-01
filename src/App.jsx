import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CanvasCursor from "./components/CanvasCursor";
import Hero from "./pages/Hero";
import Event from "./pages/Event";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./pages/Timeline";
import PopularEvent from "./pages/PopularEvents";
import ScrollToTop from "./components/ScrollToTop";
import EventDetails from "./pages/EventDetails"; // 👈 Import

const App = () => {
  return (
    <Router>
      <CanvasCursor />
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Timeline />
                <PopularEvent />
              </>
            }
          />

          {/* Event listing page */}

          {/* Team page */}
          <Route path="/team" element={<Team />} />

          <Route path="/events" element={<Event />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
