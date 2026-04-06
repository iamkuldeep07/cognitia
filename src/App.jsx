import { useState, useEffect } from "react"; // <-- Import hooks
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CanvasCursor from "./components/CanvasCursor";
import Hero from "./pages/Hero";
import Event from "./pages/Event";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./pages/Timeline";
import Merch from "./pages/Merch";
import PopularEvent from "./pages/PopularEvents";
import ScrollToTop from "./components/ScrollToTop";
import EventDetails from "./pages/EventDetails";
import Guest from "./components/Guest";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {/* Conditionally render CanvasCursor only if it's a desktop */}
      {isDesktop && <CanvasCursor />} 
      
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
                <Guest />
                <PopularEvent />
                <Footer />
              </>
            }
          />

          {/* Event listing page */}
          <Route path="/buy-merch" element={<Merch />} />
          {/* Team page */}
          <Route path="/team" element={<Team />} />

          <Route path="/events" element={<Event />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
