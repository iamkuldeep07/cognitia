import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Mic, Award, Sparkles } from 'lucide-react';

const guests = [
  {
    id: 1,
    name: "Dr. Bharat Newalkar",
    currentPost: "Chief General Manager & HEAD (R&D) Corporate Research & Development Centre Bharat Petroleum Corporation Limited",
    eventRole: "Chief Guest",
    image: "/bharatnewalkar.jpeg",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    name: "Dr. Pranab Kumar Rakshit",
    currentPost: "Deputy General Manager (R&D) Corporate Research & Development Centre Bharat Petroleum Corporation Limited",
    eventRole: "Guest of Honor",
    image: "/drpranab.png",
    color: "from-pink-500 to-purple-500"
  },
  {
    id: 3,
    name: "Prof. Sridhar Pabbisetty",
    currentPost: "Board Member, BrandVelocity AI",
    eventRole: "Keynote Speaker",
    image: "/sridhar.jpeg",
    color: "from-green-400 to-emerald-500"
  },
  {
    id: 4,
    name: "Prof. Praveen C Ramamurthy",
    currentPost: "Professor, Department of Materials Engineering & Chair, Interdisciplinary Centre for Water Research, IISC Bangalore",
    eventRole: "Keynote Speaker",
    image: "/praveen.webp",
    color: "from-orange-400 to-red-500"
  }
];

const Guest = () => {
  return (
    <section className="relative min-h-screen bg-[#030303] py-24 px-6 overflow-hidden flex flex-col items-center">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-medium tracking-wider uppercase text-gray-300">Esteemed Lineup</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
            Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Guests</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Industry leaders, innovators, and visionaries joining us to make Cognitia 2K26 an unforgettable experience.
          </p>
        </motion.div>

        {/* Guests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guests.map((guest, index) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-72 overflow-hidden bg-gray-900">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={guest.image} 
                  alt={guest.name} 
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                />
                {/* Gradient Overlay to blend image into card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
                
                {/* Floating Role Badge */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${guest.color} text-white text-xs font-bold shadow-lg flex items-center gap-1.5`}>
                    {guest.eventRole.includes("Speaker") ? <Mic size={14} /> : <Award size={14} />}
                    {guest.eventRole}
                  </div>
                </div>
              </div>

              {/* Text Details Container */}
              <div className="p-6 flex-grow flex flex-col justify-start relative z-10 bg-[#0a0a0a]/50">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {guest.name}
                </h3>
                
                <div className="flex items-start gap-2 text-gray-400 mt-2">
                  <Briefcase size={18} className="shrink-0 mt-0.5 text-gray-500" />
                  <p className="text-sm font-medium leading-relaxed">
                    {guest.currentPost}
                  </p>
                </div>
              </div>

              {/* Animated Bottom Border Highlight */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${guest.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Guest;
