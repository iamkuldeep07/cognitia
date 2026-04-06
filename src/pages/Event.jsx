import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
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
import Footer from "../components/Footer";

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
  const location = useLocation(); 

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromUrl = params.get("tab");
    
    
    if (tabFromUrl && eventsData[tabFromUrl]) {
      setActiveTab(tabFromUrl);
    }
  }, [location.search]);


  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
      );
    }
  }, [activeTab]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

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
      <section
        className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white"
        id="events"
      >
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

        <div className="hidden md:block relative w-full overflow-hidden mt-20 z-10">
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

      <section className="bg-black text-white py-16 md:py-20 px-4 sm:px-8 md:px-16" id="all-events">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-10 md:mb-12"
        >
          Browse All Events
        </motion.h2>
        
        <div className="max-w-6xl mx-auto w-full mb-12 px-2 md:px-0">
          <div className="flex justify-start gap-6 md:gap-8 overflow-x-auto no-scrollbar pb-2 w-full snap-x">
            {Object.keys(eventsData).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  navigate(`/events?tab=${tab}#all-events`, { replace: true });
                }}
                className={`pb-2 text-base md:text-lg font-semibold whitespace-nowrap snap-start transition-colors ${
                  activeTab === tab
                    ? "border-b-2 border-green-400 text-green-400"
                    : "text-gray-400 hover:text-green-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {eventsData[activeTab]?.map((event, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-gray-800 hover:border-green-400 flex flex-col"
              onClick={() => navigate(`/events/${event.slug}`)}
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex-grow">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <FaClock className="mr-2 text-green-400" /> {event.schedule}
                </div>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-400 mt-2 text-sm md:text-base line-clamp-3">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="pt-8">
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Event;
