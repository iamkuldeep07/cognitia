import { navLinks } from "../../constants"; // Make sure you have this file with your links
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { Link } from "react-router-dom";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useGSAP(() => {
    // Animate the navbar background on scroll
    gsap.to("nav", {
      backgroundColor: "rgba(0,0,0,0.5)",
      backdropFilter: "blur(10px)",
      duration: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "body", // Use a reliable trigger like the body
        start: "top -10%", // Start the animation when scrolled 10% down
        toggleActions: "play none none reverse", // Play on scroll down, reverse on scroll up
      },
    });
  }, []); // Empty dependency array ensures this runs once

  return (
    // The main <nav> element gets its base styles from the CSS file
    <nav>
      {/* 1. The Container: Sets the max-width and centers the content. */}
      <div className="container mx-auto px-5">
        {/* 2. The Flex Wrapper: Arranges the logo and links. */}
        <div className="flex justify-between items-center py-5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/cognitia_logoc.jpg"
              alt="logo"
              className="rounded-full shadow-md"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            {/* The <p> tag gets its styles from `nav p` in the CSS */}
            <p>Cognitia</p>
          </Link>

          {/* Navigation Links Section */}
          {/* The <ul> and <a> tags get their styles from the CSS */}
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.id === "home" ? (
                  <Link to="/">{link.title}</Link>
                ) : link.id === "events" ? (
                  <Link to="/events">{link.title}</Link>
                ) : link.id === "team" ? (
                  <Link to="/team">{link.title}</Link>
                ) : (
                  <a href={`#${link.id}`}>{link.title}</a>
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