import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../../constants";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Phone, Award, FileDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((e) => e.slug === id);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!event) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-section").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [event]);

  if (!event) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col justify-center items-center text-center p-12"
      >
        <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
        <Link
          to="/events#all-events"
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 mb-8"
        >
          <ArrowLeft size={20} /> Back to Events
        </Link>
      </motion.div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 pt-25"
    >
      {/* Back Button */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/events#all-events"
          className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 mb-8"
        >
          <ArrowLeft size={20} /> Back to Events
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center"
      >
        <motion.img
          src={event.img}
          alt={event.title}
          className="w-full md:w-1/2 rounded-2xl shadow-2xl border border-gray-700"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="flex-1"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent">
            {event.title}
          </h1>
          <p className="text-gray-300 leading-relaxed">{event.desc}</p>
          <div className="mt-6 space-y-3 text-lg">
            <p>
              <span className="font-semibold text-red-400">📍 Venue:</span>{" "}
              {event.venue}
            </p>
            <p>
              <span className="font-semibold text-red-400">🗓 Schedule:</span>{" "}
              {event.schedule}
            </p>
            <p>
              <span className="font-semibold text-red-400">🏆 Prize Pool:</span>{" "}
              {event.prize}
            </p>
          </div>
          <motion.a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-xl hover:scale-105 transform transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Modern Event Brochure Button */}
      {event.rulebookLink && (
        <div className="max-w-6xl mx-auto mt-16 fade-section flex justify-center">
          <motion.a
            href={event.rulebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gray-800/50 border border-gray-700 rounded-full shadow-lg overflow-hidden text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Subtle glowing background on hover */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <FileDown
              className="text-red-400 group-hover:-translate-y-1 transition-transform duration-300"
              size={22}
            />
            <span className="relative z-10 tracking-wide">
              View Rulebook
            </span>

            {/* Animated bottom highlight edge */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </div>
      )}

      {/* Contacts */}
      {event.contacts && (
        <div className="max-w-6xl mx-auto mt-20 fade-section">
          <h2 className="text-3xl font-bold mb-6">Contacts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {event.contacts.map((c, i) => (
              <motion.div
                key={i}
                className="flex items-center  gap-4 p-5 bg-gray-800 rounded-xl border border-gray-700 shadow hover:scale-105 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="p-3 bg-red-500/20 rounded-full">
                  <Phone className="text-red-400" size={28} />
                </div>
                <p className="text-gray-300 text-lg">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
