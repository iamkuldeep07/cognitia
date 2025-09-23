import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Your GSAP animation for the background color is correct and doesn't need changes.
  useGSAP(() => {
    // This requires ScrollTrigger plugin to be registered, e.g., gsap.registerPlugin(ScrollTrigger)
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        toggleActions: "play none none reverse", // Makes the effect reversible on scroll up
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)", // Optional: adds a nice blur effect
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
  });

  return (
    // This is the full-width bar for background and positioning
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* FIX: This outer div is now the centered container. 
          It sets the max-width and centers the content. */}
      <div className="container mx-auto px-5">
        {/* FIX: This inner div now ONLY handles the flexbox layout. */}
        <div className="flex justify-between items-center gap-5 py-5">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/cognitia_logoc.jpg"
              alt="logo"
              className="rounded-full shadow-md"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
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
      </div>
    </nav>
  );
};

export default Navbar;