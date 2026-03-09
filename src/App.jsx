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
import EventDetails from "./pages/EventDetails";

const App = () => {
  return (
    <Router>
      <CanvasCursor />
      <ScrollToTop />

      {/* Full Page Layout */}
      <div className="flex flex-col min-h-screen">

        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>

            {/* Home */}
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

            {/* Team */}
            <Route path="/team" element={<Team />} />

            {/* Events */}
            <Route path="/events" element={<Event />} />
            <Route path="/events/:id" element={<EventDetails />} />

          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
};

export default App;