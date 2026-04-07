import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGoogle, FaInstagram, FaEye } from "react-icons/fa"; // Added FaEye
import { Link } from "react-router-dom"; 

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const cognitiaRef = useRef(null);
  
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(footerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }).from(
        cognitiaRef.current,
        { scale: 0.9, opacity: 0, duration: 1, ease: "power2.out" },
        "-=0.5",
      );

      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 85%",
        animation: tl,
      });

      gsap.to(cognitiaRef.current, {
        textShadow: "0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  // Visitor Counter Logic
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const namespace = "cognitia2k26_nitm";
        const key = "total_visits";
        const hasVisited = localStorage.getItem("cognitia_has_visited");
        
        let url = `https://abacus.jsn.cam/get/${namespace}/${key}`;
        
        if (!hasVisited) {
          url = `https://abacus.jsn.cam/hit/${namespace}/${key}`;
          localStorage.setItem("cognitia_has_visited", "true");
        }

        const response = await fetch(url);
        
        if (response.ok) {
          const data = await response.json();
          // Note: Abacus uses .value instead of .count
          setVisitorCount(data.value); 
        } else {
          setVisitorCount("...");
        }
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        setVisitorCount("..."); // Fallback if completely blocked
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black text-white border-t border-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Navigation Links */}
        <div className="footer-links text-center lg:text-left">
          <ul className="space-y-3 text-lg">
            <li>
              <Link to="/" className="hover:text-green-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-green-400 transition">
                Events
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-green-400 transition">
                Teams
              </Link>
            </li>
            <li>
              <a href="mailto:b23ec019@nitm.ac.in" className="hover:text-green-400 transition">
                Report Bugs
              </a>
            </li>
          </ul>
        </div>

        {/* Center Logo/Title */}
        <div className="text-center">
          <h1
            ref={cognitiaRef}
            className="footer-title font-modern-negra text-[18vw] lg:text-[8vw] leading-none tracking-tight"
          >
            COGNITIA
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            The official Tech Fest of NIT Meghalaya.
          </p>
        </div>

        {/* Socials & Address */}
        <div className="footer-social text-center lg:text-right">
          <div className="flex justify-center lg:justify-end gap-6 mb-6">
            <a
              href="mailto:cognitia@nitm.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 hover:scale-125 transition"
            >
              <FaGoogle size={22} />
            </a>
            <a
              href="https://www.instagram.com/cognitia_nitm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 hover:scale-125 transition"
            >
              <FaInstagram size={22} />
            </a>
          </div>
          <div className="footer-address text-gray-400 text-sm leading-relaxed">
            <p>Saitsohpen Sohra, East Khasi Hills</p>
            <p>Meghalaya, India - 793003</p>
            <p>Phone: 0364-2501294</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Visitor Count */}
      <div className="border-t border-gray-800 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
  © 2026 COGNITIA. All rights reserved. | Built by{" "}
  <a
    href="https://www.linkedin.com/in/kuldeep-chaudhary-55a830278/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:text-green-300 hover:underline transition-colors font-semibold"
  >
    Kuldeep Chaudhary
  </a>
</p>
        
        {/* New Visitor Counter Display */}
        <div className="mt-4 md:mt-0 flex items-center gap-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-800">
          <FaEye className="text-green-400" size={16} />
          <span className="font-medium text-gray-300">
            Total Visitors: <span className="text-green-400 font-bold ml-1">{visitorCount !== null ? visitorCount : "..."}</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
