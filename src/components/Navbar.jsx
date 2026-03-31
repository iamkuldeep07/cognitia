import { navLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    // Animate the navbar background on scroll
    gsap.to("nav", {
      backgroundColor: "rgba(0,0,0,0.7)",
      backdropFilter: "blur(10px)",
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "top -10%", // Start animation after scrolling 10% of the viewport height
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <nav>
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center py-5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/cognitia_logoc.jpg"
              alt="logo"
              className="rounded-full shadow-md"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <p>Cognitia</p>
          </Link>

          {/* Navigation Links Section */}
          <ul>
            {navLinks.map((link) => {
              // Create an array of IDs that should be full page routes
              const pageRoutes = ["home", "events", "team", "buy-merch"];

              return (
                <li key={link.id}>
                  {pageRoutes.includes(link.id) ? (
                    // If the ID is in our list, use React Router to navigate
                    <Link to={link.id === "home" ? "/" : `/${link.id}`}>
                      {link.title}
                    </Link>
                  ) : (
                    // If it's NOT in the list, treat it as a scroll-to-section link
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
