import { useState } from "react";
import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.to("nav", {
      backgroundColor: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(10px)",
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "top -10%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  const pageRoutes = ["home", "events", "team", "buy-merch"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white">
      {/* Background layer for GSAP */}
      <div className="nav-container absolute inset-0 -z-10 bg-transparent border-b border-transparent"></div>

      <div className="container mx-auto px-5 relative">
        <div className="flex justify-between items-center py-4 w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 z-50"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/cognitia_logoc.jpg"
              alt="logo"
              className="w-10 h-10 rounded-full shadow-md object-cover"
            />
            <p className="text-xl font-bold tracking-wide">Cognitia</p>
          </Link>

          {/* --- DESKTOP MENU --- */}
          {/* The "hidden md:flex" ensures it hides on mobile and only flexes on desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                {pageRoutes.includes(link.id) ? (
                  <Link
                    to={link.id === "home" ? "/" : `/${link.id}`}
                    className="hover:text-green-400 font-medium transition-colors"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <a
                    href={`#${link.id}`}
                    className="hover:text-green-400 font-medium transition-colors"
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* --- MOBILE HAMBURGER --- */}
          {/* The "flex md:hidden" ensures it shows on mobile and hides on desktop */}
          <div className="flex md:hidden items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 focus:outline-none hover:text-green-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-lg transition-all duration-300 ease-in-out border-b border-white/10 ${
            isOpen
              ? "opacity-100 visible max-h-screen py-6"
              : "opacity-0 invisible max-h-0 py-0"
          } overflow-hidden`}
        >
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full text-center">
                {pageRoutes.includes(link.id) ? (
                  <Link
                    to={link.id === "home" ? "/" : `/${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-lg font-medium hover:text-green-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-lg font-medium hover:text-green-400 transition-colors"
                  >
                    {link.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
