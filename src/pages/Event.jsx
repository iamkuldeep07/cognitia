import React, { useState, useEffect, useRef } from "react";

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
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// === Event Data ===
const eventsData = {
  Coding: [
    {
      title: "Code Conquest",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?code,computer",
      desc: "Competitive coding challenge.",
    },
    {
      title: "Capture the Flag",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?hacker,cyber",
      desc: "Unleash your inner hacker!",
    },
    {
      title: "Hackathon",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?hackathon,team",
      desc: "Build innovative solutions in 24hrs.",
    },
  ],
  Robotics: [
    {
      title: "Robo Race",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?robot,competition",
      desc: "Fastest robot wins the race!",
    },
    {
      title: "Line Follower",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?robotics,ai",
      desc: "Robots that follow the line track.",
    },
  ],
  Dept: [
    {
      title: "Paper Presentation",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?presentation,seminar",
      desc: "Showcase your research ideas.",
    },
    {
      title: "Project Expo",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?project,expo",
      desc: "Innovative projects on display.",
    },
  ],
  Astro: [
    {
      title: "Stargazing Night",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?astronomy,stars",
      desc: "Enjoy the stars with telescopes.",
    },
    {
      title: "Astro Quiz",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?space,quiz",
      desc: "Quiz competition about astronomy.",
    },
  ],
  Other: [
    {
      title: "Gaming Tournament",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?gaming,tournament",
      desc: "Battle it out in esports tournaments.",
    },
    {
      title: "Treasure Hunt",
      time: "To be announced",
      img: "https://source.unsplash.com/600x400/?treasure,hunt",
      desc: "Solve clues to find hidden treasures.",
    },
  ],
};

// === Categories for Infinite Scroll ===
const eventCategories = [
  { title: "CODING", icon: <Code className="w-6 h-6 text-cyan-400" /> },
  { title: "ROBOTIC", icon: <Cpu className="w-6 h-6 text-green-400" /> },
  {
    title: "ASTRONOMY",
    icon: <Telescope className="w-6 h-6 text-purple-400" />,
  },
  { title: "DEPARTMENTAL", icon: <Layers className="w-6 h-6 text-pink-400" /> },
  { title: "GAMING", icon: <Gamepad2 className="w-6 h-6 text-yellow-400" /> },
  { title: "WORKSHOPS", icon: <Wrench className="w-6 h-6 text-orange-400" /> },
  { title: "HACKATHONS", icon: <Rocket className="w-6 h-6 text-red-400" /> },
];

const Event = () => {
  const [activeTab, setActiveTab] = useState("Coding");
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  // GSAP stagger animation when switching tabs
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, [activeTab]);

  // GSAP infinite scroll for categories
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


      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white">
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
            className="text-5xl md:text-6xl font-bold"
          >
            Explore your <span className="text-cyan-400">Cognitia</span> Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            Browse all the upcoming events of Cognitia 2K25 compiled for you.
          </motion.p>
          <button className="mt-6 bg-cyan-400 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-cyan-500 transition-transform transform hover:scale-105">
            Register Now!
          </button>
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

        <div className="absolute bottom-8 z-10 flex flex-col items-center">
          <p className="text-white/70 text-sm mb-2">Scroll Down</p>
          <ChevronDown className="text-cyan-400 w-8 h-8" />
        </div>
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
              className={`pb-2 text-lg font-semibold transition-all ${
                activeTab === tab
                  ? "border-b-2 border-green-400 text-green-400"
                  : "text-gray-400 hover:text-green-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
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
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <FaClock className="mr-2 text-green-400" />
                  {event.time}
                </div>
                <h3 className="text-xl font-bold">{event.title}</h3>
                <p className="text-gray-400 mt-1">{event.desc}</p>
                <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </>
  );
};

export default Event;
