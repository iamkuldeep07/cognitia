import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; 

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const cognitiaRef = useRef(null);

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

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-black text-white border-t border-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
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

        <div className="text-center">
          <h1
            ref={cognitiaRef}
            className="footer-title font-modern-negra text-[18vw] lg:text-[8vw] leading-none tracking-tight"
          >
            COGNITIA
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            The official Tech & Cultural Fest of NIT Meghalaya.
          </p>
        </div>

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

      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © 2026 COGNITIA. All rights reserved. | Built by Cognitia
      </div>
    </footer>
  );
};

export default Footer;
