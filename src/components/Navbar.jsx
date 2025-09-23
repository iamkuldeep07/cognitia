import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "rgba(0,0,0,0.5)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-5 px-5 lg:px-0 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/cognitia_logoc.jpg"
            alt="logo"
            className="rounded-full shadow-md"
            style={{ width: "40px", height: "40px", objectFit: "cover" }}
          />
          <p className="font-modern-negra text-3xl -mb-2">Cognitia</p>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.id === "home" ? (
                <Link to="/" className="cursor-pointer text-base">
                  {link.title}
                </Link>
              ) : link.id === "events" ? (
                <Link to="/events" className="cursor-pointer text-base">
                  {link.title}
                </Link>
              ) : link.id === "team" ? (
                <Link to="/team" className="cursor-pointer text-base">
                  {link.title}
                </Link>
              ) : (
                <a href={`#${link.id}`} className="cursor-pointer text-base">
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="text-white text-2xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;