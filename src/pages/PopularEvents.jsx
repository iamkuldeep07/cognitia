import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const events = [
  {
    title: "Robo Rumble",
    description: "Battle it out with your custom-built robots in an electrifying arena combat competition.",
    image: "/roborumble.png",
    tag: "ROBOTICS",
    accent: "#00ff88",
  },
  {
    title: "Hackathon",
    description: "48 hours of innovation, coding, and problem-solving with industry-grade prizes.",
    image: "/hackathon.jpg",
    tag: "CODING",
    accent: "#00e5ff",
  },
  {
    title: "Drone Racing",
    description: "Show off your piloting skills in this high-speed FPV drone racing spectacle.",
    image: "/drone.jpg",
    tag: "AERIAL",
    accent: "#ff6b35",
  },
  {
    title: "Tech Talks",
    description: "Industry leaders share raw insights from the frontier of technology.",
    image: "/techtalk.jpg",
    tag: "KEYNOTE",
    accent: "#a855f7",
  },
  {
    title: "Maze Runner",
    description: "Watch cutting-edge autonomous robots navigate through complex labyrinths.",
    image: "/mazerunner.jpg",
    tag: "AUTONOMOUS",
    accent: "#facc15",
  },
  {
    title: "Code Conquest",
    description: "An epic multi-round algorithmic odyssey testing your competitive programming limits.",
    image: "/codeconquest.png",
    tag: "COMPETITIVE",
    accent: "#f43f5e",
  },
];

const EventCard = ({ event, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "translateY(-10px)" : "translateY(0px)",
        transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className="relative group cursor-pointer"
    >
      {/* Glow border effect */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${event.accent}60, transparent 60%)`,
          filter: "blur(1px)",
        }}
      />

      {/* Card body */}
      <div className="relative bg-[#0e0e1a] rounded-2xl overflow-hidden border border-white/[0.06] group-hover:border-white/20 transition-all duration-500 h-full flex flex-col">
        
        {/* Image */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{ pointerEvents: "none" }}
          />
          {/* Dark gradient overlay — pointer-events NONE so it never blocks hover */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0e0e1a] via-[#0e0e1a]/40 to-transparent"
            style={{ pointerEvents: "none" }}
          />
          {/* Tag badge */}
          <div
            className="absolute top-4 left-4 text-[10px] font-black tracking-[0.2em] px-3 py-1 rounded-full"
            style={{
              background: `${event.accent}22`,
              color: event.accent,
              border: `1px solid ${event.accent}44`,
              pointerEvents: "none",
            }}
          >
            {event.tag}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3
            className="text-xl font-black mb-2 tracking-tight transition-colors duration-300"
            style={{
              fontFamily: "'Orbitron', 'Exo 2', sans-serif",
              color: hovered ? event.accent : "#ffffff",
            }}
          >
            {event.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors duration-300 flex-1">
            {event.description}
          </p>

          {/* Arrow link */}
          <div
            className="mt-5 flex items-center gap-2 text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ color: event.accent }}
          >
            LEARN MORE
            <svg className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          className="h-[2px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ background: `linear-gradient(to right, ${event.accent}, transparent)` }}
        />
      </div>
    </motion.div>
  );
};

const PopularEvents = () => {
  const navigate = useNavigate();

  const handleRedirectToEvents = () => {
    navigate("/events");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-[#07070f] text-white py-28 px-6 lg:px-16 overflow-hidden"
      id="popular-events"
    >
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Syne:wght@400;700;800&display=swap');`}</style>

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-12 bg-green-400/50" />
            <span
              className="text-[11px] tracking-[0.3em] font-bold text-green-400"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              COGNITIA 2K25
            </span>
            <div className="h-[1px] w-12 bg-green-400/50" />
          </div>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            <span className="text-white">FLAGSHIP</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #00ff88, #00e5ff)",
              }}
            >
              EVENTS
            </span>
          </h2>

          <p
            className="text-gray-400 text-base mt-6 max-w-xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Six arenas. One festival. Compete, build, and connect at the biggest tech fest of the year.
          </p>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <EventCard key={event.title} event={event} index={index} />
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 flex justify-center mt-20">
        <motion.button
          onClick={handleRedirectToEvents}
          whileTap={{ scale: 0.96 }}
          className="group relative overflow-hidden px-10 py-4 font-black text-sm tracking-[0.2em] rounded-full text-[#07070f] transition-all duration-300"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            background: "linear-gradient(90deg, #00ff88, #00e5ff)",
            boxShadow: "0 0 40px rgba(0,255,136,0.25)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 0 60px rgba(0,255,136,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 40px rgba(0,255,136,0.25)";
          }}
        >
          <span className="relative z-10 flex items-center gap-3">
            VIEW ALL EVENTS
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </motion.button>
      </div>
    </section>
  );
};

export default PopularEvents;