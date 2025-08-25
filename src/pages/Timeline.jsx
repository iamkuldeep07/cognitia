// src/pages/Timeline.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const lineFillRef = useRef(null);
  const itemRefs = useRef([]);

  const timelineData = [
    {
      day: "7th November",
      events: [
        "Official commencement of Cognitia 2024",
        "Inauguration Ceremony at 3:00 PM",
      ],
    },
    {
      day: "8th November",
      events: [
        "Coding Contest by the Coding Club",
        "Drone Event by the Robotics Club",
        "Pinnacle Perspective by the Taskforce Club",
      ],
    },
    {
      day: "9th November",
      events: ["Roborumble by the Robotics Club", "Jam Session"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate line fill on scroll
      gsap.fromTo(
        lineFillRef.current,
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Animate each card on scroll
      gsap.from(itemRefs.current, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0d0d1a] text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-20"
    >
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 max-w-xl">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Here's a <span className="text-cyan-400">Timeline</span> of the Events
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mt-4">
          Explore the exciting lineup of events over three days. Download the
          full brochure for detailed information.
        </p>
        <a
          href="https://drive.google.com/file/d/1PuwowhgQ74I52FGulV0SPLlwR9ccgexJ/view"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block mt-8 bg-green-500 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg overflow-hidden group"
        >
          {/* SVG Wave Overlay */}
          <span className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute w-full h-full -top-full group-hover:top-0 transition-all duration-700 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#00d084"
                fillOpacity="0.7"
                d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,128C672,117,768,139,864,170.7C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,96L1440,53.3V320H0Z"
              >
                <animate
                  attributeName="d"
                  dur="3s"
                  repeatCount="indefinite"
                  values="
          M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,128C672,117,768,139,864,170.7C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,96L1440,53.3V320H0Z;
          M0,80L60,120C120,160,240,200,360,200C480,200,600,160,720,140C840,120,960,120,1080,140C1200,160,1320,200,1440,180V320H0Z;
          M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,128C672,117,768,139,864,170.7C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,96L1440,53.3V320H0Z"
                />
              </path>

              {/* SECOND WAVE for Depth */}
              <path
                fill="#007a4d"
                fillOpacity="0.4"
                d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,112C672,96,768,128,864,160C960,192,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32V320H0Z"
              >
                <animate
                  attributeName="d"
                  dur="4s"
                  repeatCount="indefinite"
                  values="
          M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,112C672,96,768,128,864,160C960,192,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32V320H0Z;
          M0,32L60,80C120,128,240,192,360,176C480,160,600,96,720,112C840,128,960,192,1080,208C1200,224,1320,128,1440,64V320H0Z;
          M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,112C672,96,768,128,864,160C960,192,1056,224,1152,192C1248,160,1344,96,1392,64L1440,32V320H0Z"
                />
              </path>
            </svg>
          </span>

          {/* Button Text */}
          <span className="relative z-10 text-black">Download Brochure</span>
        </a>
      </div>

      {/* TIMELINE RIGHT */}
      <div className="relative w-full lg:w-1/2 max-w-2xl pl-10 sm:pl-16">
        {/* Background Line */}
        <div
          ref={lineRef}
          className="absolute left-4 sm:left-6 lg:left-4 top-0 w-[3px] bg-gray-600 rounded-full"
          style={{ height: "100%" }}
        ></div>

        {/* Filling Line (GSAP Animation) */}
        <div
          ref={lineFillRef}
          className="absolute left-4 sm:left-6 lg:left-4 top-0 w-[3px] bg-cyan-500 rounded-full shadow-[0_0_10px_#00ffff]"
        ></div>

        {/* Timeline Events */}
        <div className="flex flex-col space-y-24">
          {timelineData.map((day, i) => (
            <div
              key={i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="relative flex flex-col items-start"
            >
              {/* Date Badge ABOVE Card */}
              <div className="bg-cyan-500 text-black font-semibold px-4 py-2 rounded-full shadow-md mb-4">
                {day.day}
              </div>

              {/* Event Card */}
              <div className="bg-[#1f1f2e] rounded-xl p-6 shadow-lg transition-transform transform hover:scale-[1.03] relative group w-full border border-transparent hover:border-cyan-400 hover:shadow-[0_0_15px_#00ffff]">
                <ul className="space-y-3">
                  {day.events.map((event, idx) => (
                    <li
                      key={idx}
                      className="text-lg text-gray-200 flex items-start"
                    >
                      <span className="mr-2 text-cyan-400">•</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
