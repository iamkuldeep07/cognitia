import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teamData } from "../../constants";

const Team = () => {
  const tabOrder = [
    "SAC", "Dev", "Core", "Sponsor and Marketing", "Publicity and Social Media",
    "Robotics", "Coding", "Task Force Club", "Dance & Drama",
    "Photography and fine arts", "E-Cell", "Energy and Sustainability Club",
    "Design Club", "Astronomy Club", "Departmental", "Design", "Volunteer",
    "Gaming", "Management", "Hospitality", "Food Committee"
  ];

  const [activeTab, setActiveTab] = useState(tabOrder[0]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen w-full text-white flex flex-col items-center px-4 py-16 bg-[#021505]">

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold italic tracking-tighter">
            MEET THE <span className="text-green-400">TEAM</span>
          </h2>
          <p className="text-gray-300 mt-3 text-lg font-medium opacity-90 max-w-2xl mx-auto">
            A special thanks to all the wonderful people who contributed to the event!
          </p>
        </div>

        {/* Tabs */}
        <div className="relative w-full max-w-5xl mb-16 flex items-center">
          <button
            onClick={() => scroll("left")}
            className="shrink-0 z-20 p-2 mr-2 bg-white/5 hover:bg-green-500 rounded-full border border-white/10 transition cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center space-x-4 overflow-x-auto no-scrollbar py-2 px-2 w-full"
          >
            {tabOrder.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 text-sm font-bold uppercase tracking-widest whitespace-nowrap transition cursor-pointer ${
                  activeTab === tab
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-green-400 rounded-lg -z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="shrink-0 z-20 p-2 ml-2 bg-white/5 hover:bg-green-500 rounded-full border border-white/10 transition cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          <AnimatePresence mode="wait">
            {teamData[activeTab]?.map((member, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.3 },
                  },
                }}
                className="relative h-[420px] rounded-3xl overflow-hidden bg-black border border-white/10 cursor-pointer"
              >

                {/* Image */}
                <motion.img
                  src={member.image}
                  alt={member.title}
                  variants={{
                    hover: {
                      scale: 1.1,
                      transition: { duration: 0.7, ease: "easeOut" },
                    },
                  }}
                  className="w-full h-full object-cover"
                />

                {/* Overlay (keep pointer-events-none here only) */}
                <motion.div
                  variants={{
                    hover: { opacity: 1 },
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"
                />

                {/* Text (FIXED: removed pointer-events-none) */}
                <motion.div
                  variants={{
                    hover: { y: 0 },
                  }}
                  className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end"
                >
                  <span className="text-green-400 text-xs font-black uppercase tracking-[0.2em] mb-2">
                    {member.subtitle}
                  </span>

                  <motion.h3
                    variants={{
                      hover: { color: "#86efac" },
                    }}
                    className="text-2xl font-bold mb-1"
                  >
                    {member.title}
                  </motion.h3>

                  <motion.div
          
            
                  >
                    <p className="text-gray-400 text-sm">
                      {member.handle}
                    </p>
                  </motion.div>
                </motion.div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Team;