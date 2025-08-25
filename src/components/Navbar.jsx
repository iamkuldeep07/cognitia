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
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/cognitia_logoc.jpg"
            alt="logo"
            className="rounded-full shadow-md"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <p className="font-modern-negra text-3xl -mb-2">Cognitia</p>
        </Link>

        <ul className="flex-center lg:gap-12 gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.id === "home" ? (
                <Link to="/" className="cursor-pointer md:text-base text-sm">
                  {link.title}
                </Link>
              ) : link.id === "events" ? (
                <Link to="/events" className="cursor-pointer md:text-base text-sm">
                  {link.title}
                </Link>
              ) : link.id === "team" ? (
                <Link to="/team" className="cursor-pointer md:text-base text-sm">
                  {link.title}
                </Link>
              ) : (
                <a
                  href={`#${link.id}`}
                  className="cursor-pointer md:text-base text-sm"
                >
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;