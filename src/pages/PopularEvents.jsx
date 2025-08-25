import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Robo Rumble",
    description: "Battle it out with your custom-built robots in an electrifying competition.",
    image: "/roborumble.png",
  },
  {
    title: "Hackathon",
    description: "48 hours of innovation, coding, and problem-solving with great prizes.",
    image: "/hackathon.jpg",
  },
  {
    title: "Drone Racing",
    description: "Show off your piloting skills in this high-speed drone racing event.",
    image: "/drone.jpg",
  },
  {
    title: "Tech Talks",
    description: "Listen to industry experts sharing their knowledge and experience.",
    image: "/techtalk.jpg",
  },
  {
    title: "Maze Runner",
    description: "Meet our cutting-edge maze-solving robot!",
    image: "/mazerunner.jpg",
  },
  {
    title: "Code Conquest",
    description: "Embark on an Epic Coding Odyssey!",
    image: "/codeconquest.png",
  },
];

const PopularEvents = () => {
  return (
    <section className="bg-[#0d0d1a] text-white py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold">
          Popular <span className="text-green-400">Events</span>
        </h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          Here are some of the most exciting events you can't miss at Cognitia 2K25.
        </p>
      </div>

      {/* Event Cards */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-[#1f1f2e] rounded-xl overflow-hidden shadow-lg border border-transparent hover:border-green-400 hover:shadow-[0_0_12px_#22c55e] transition-all"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-green-400">
                {event.title}
              </h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularEvents;