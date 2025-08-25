// src/components/Footer.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const cognitiaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation: either on scroll or immediately if in viewport
      const tl = gsap.timeline();

      // Animate footer
      tl.from(footerRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }).from(
        cognitiaRef.current,
        {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // ScrollTrigger (optional if you want scroll-based animation)
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 85%",
        animation: tl,
      });

      // Infinite glow animation
      gsap.to(cognitiaRef.current, {
        textShadow:
          "0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88",
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
        {/* LEFT - NAV LINKS */}
        <div className="footer-links text-center lg:text-left">
          <ul className="space-y-3 text-lg">
            <li className="hover:text-green-400 transition cursor-pointer">Home</li>
            <li className="hover:text-green-400 transition cursor-pointer">Events</li>
            <li className="hover:text-green-400 transition cursor-pointer">Teams</li>
            <li className="hover:text-green-400 transition cursor-pointer">Report Bugs</li>
          </ul>
        </div>

        {/* CENTER - COGNITIA */}
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

        {/* RIGHT - SOCIALS & ADDRESS */}
        <div className="footer-social text-center lg:text-right">
          <div className="flex justify-center lg:justify-end gap-6 mb-6">
            <a href="#" className="hover:text-green-400 hover:scale-125 transition">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className="hover:text-green-400 hover:scale-125 transition">
              <FaInstagram size={22} />
            </a>
            <a href="#" className="hover:text-green-400 hover:scale-125 transition">
              <FaTwitter size={22} />
            </a>
          </div>
          <div className="footer-address text-gray-400 text-sm leading-relaxed">
            <p>Bijni Complex, Laitumkhrah Shillong</p>
            <p>Meghalaya, India - 793003</p>
            <p>Phone: 0364-2501294</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © 2025 COGNITIA. All rights reserved. | Built by NIT Meghalaya
      </div>
    </footer>
  );
};

export default Footer;