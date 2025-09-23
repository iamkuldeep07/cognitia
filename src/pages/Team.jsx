import { useState } from "react";
import { motion } from "framer-motion";
import PixelBlast from "../components/PixelBlast";
import { teamData } from "../../constants";

const Team = () => {
  const [activeTab, setActiveTab] = useState("SAC");

  return (
    <section className="relative min-h-screen w-full text-white flex flex-col items-center justify-center overflow-hidden scroll-smooth px-6 py-16 bg-green-900">
      {/* Pixel Background */}
      <div className="absolute inset-0 w-full h-full">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      </div>

      {/* All content above background */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-8 mb-12"
        >
          <h2 className="text-5xl font-bold">
            Meet the <span className="text-green-400">Team</span>
          </h2>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto text-lg">
            A special thanks to all the wonderful people who contributed to the event!
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-12">
          {Object.keys(teamData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-lg font-semibold transition-all ${
                activeTab === tab
                  ? "border-b-2 border-green-400 text-green-400"
                  : "text-gray-300 hover:text-green-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {teamData[activeTab].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-green-800/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-green-500"
              style={{ borderColor: member.borderColor }}
            >
              {/* Image without lazy loading */}
              <img
                src={member.image}
                alt={member.title}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay text always visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                <h3 className="text-xl font-bold">{member.title}</h3>
                <p className="text-sm text-gray-200">{member.subtitle}</p>
                <span className="text-green-400">{member.handle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;