import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { eventsData } from "../../constants";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { FaClock } from "react-icons/fa";
import {
  Code,
  Cpu,
  Telescope,
  Layers,
  Gamepad2,
  Wrench,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const eventCategories = [
  { title: "Coding", icon: <Code className="w-6 h-6 text-cyan-400" /> },
  { title: "Robotics", icon: <Cpu className="w-6 h-6 text-green-400" /> },
  { title: "Astro", icon: <Telescope className="w-6 h-6 text-purple-400" /> },
  { title: "Dept", icon: <Layers className="w-6 h-6 text-pink-400" /> },
  { title: "Other", icon: <Gamepad2 className="w-6 h-6 text-yellow-400" /> },
  { title: "Workshops", icon: <Wrench className="w-6 h-6 text-orange-400" /> },
  { title: "Hackathons", icon: <Rocket className="w-6 h-6 text-red-400" /> },
];

const Event = () => {
  const [activeTab, setActiveTab] = useState("Coding");
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, [activeTab]);

  useEffect(() => {
    const el = scrollerRef.current;
    const tl = gsap.to(el, {
      xPercent: -50,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

    el.addEventListener("mouseenter", () => tl.pause());
    el.addEventListener("mouseleave", () => tl.resume());

    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        tl.timeScale(self.direction === -1 ? -1 : 1);
      },
    });

    return () => {
      el.removeEventListener("mouseenter", () => tl.pause());
      el.removeEventListener("mouseleave", () => tl.resume());
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white">
        {/* Background */}
        <ShaderGradientCanvas
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={8}
            uSpeed={0.3}
            uStrength={1.5}
            uDensity={1.5}
            uFrequency={0}
            uAmplitude={0}
            positionX={0}
            positionY={0}
            positionZ={0}
            rotationX={50}
            rotationY={0}
            rotationZ={-60}
            color1="#242880"
            color2="#8d7dca"
            color3="#212121"
            reflection={0.1}
            cAzimuthAngle={180}
            cPolarAngle={80}
            cDistance={2.8}
            cameraZoom={9.1}
            lightType="3d"
            brightness={1}
            envPreset="city"
            grain="on"
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            enableTransition={false}
          />
        </ShaderGradientCanvas>

        {/* Headline */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            Discover <span className="text-cyan-400">Cognitia</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-2xl md:text-3xl text-white/80 font-light max-w-3xl mx-auto"
          >
            Where ideas ignite, and brilliance takes the stage.
          </motion.p>
        </div>

        {/* Infinite Scroller */}
        <div className="relative w-full overflow-hidden mt-20 z-10">
          <div
            ref={scrollerRef}
            className="flex gap-6 whitespace-nowrap w-[200%]"
          >
            {[...eventCategories, ...eventCategories].map((cat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="group flex items-center gap-3 border-2 border-cyan-400 rounded-lg px-8 py-4 text-lg font-bold text-white cursor-pointer min-w-[220px] justify-center transition-colors duration-300"
              >
                <div className="group-hover:text-green-400 transition-colors">
                  {cat.icon}
                </div>
                <span className="group-hover:text-green-400 transition-colors">
                  {cat.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bold Closing Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mt-24 text-center px-6"
        >
          <p className="text-4xl md:text-5xl font-semibold text-white/90 leading-snug">
            One fest.{" "}
            <span className="text-cyan-400">Endless experiences.</span>
          </p>
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="bg-black text-white py-20 px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-center mb-12"
        >
          Browse All Events
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-12">
          {Object.keys(eventsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-lg font-semibold ${
                activeTab === tab
                  ? "border-b-2 border-green-400 text-green-400"
                  : "text-gray-400 hover:text-green-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {eventsData[activeTab].map((event, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-gray-800 hover:border-green-400"
              onClick={() => navigate(`/events/${event.slug}`)}
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <FaClock className="mr-2 text-green-400" /> {event.time}
                </div>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-400 mt-1">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Event;
