import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import DecoderMotion from "../components/DecoderMotion";
import { ChevronDown } from "lucide-react"; // Icon for scroll down


gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heading = sectionRef.current.querySelector("h1");
      const paragraph = sectionRef.current.querySelector("p");
      const button = sectionRef.current.querySelector("button");

      const headingSplit = new SplitText(heading, { type: "words,chars" });
      const paragraphSplit = new SplitText(paragraph, { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      tl.from(headingSplit.chars, {
        opacity: 0,
        y: 80,
        stagger: 0.03,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          paragraphSplit.words,
          { opacity: 0, y: 30, stagger: 0.05, duration: 0.8, ease: "power2.out" },
          "-=0.8"
        )
        .from(
          button,
          { opacity: 0, scale: 0.8, duration: 0.7, ease: "back.out(1.7)" },
          "-=0.5"
        );

      // Scroll Down Icon Animation
      gsap.to(".scroll-down-icon", {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Shader Background */}
      <ShaderGradientCanvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uTime={8}
          uSpeed={0.3}
          uStrength={1.5}
          uDensity={1.5}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          color1="#242880"
          color2="#8d7dca"
          color3="#212121"
          reflection={0.1}
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={2.8}
          cameraZoom={9.1}
          lightType="3d"
          brightness={1}
          envPreset="city"
          grain="on"
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          enableTransition={false}
        />
      </ShaderGradientCanvas>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1200px] px-6 md:px-10 text-center flex flex-col items-center justify-center gap-8 py-20">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-wide"
          style={{ fontFamily: "PPNeueMontreal, sans-serif" }}
        >
          Welcome to{" "}
          <span
            className="text-cyan-400 italic"
            style={{ fontFamily: "PPEiko, serif" }}
          >
            Cognitia 2K25
          </span>
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "PPEiko, serif" }}
        >
          NIT Meghalaya’s Annual Tech Fest. <br />
          Dive into{" "}
          <span className="text-cyan-300 font-semibold">Workshops</span>,{" "}
          <span className="text-cyan-300 font-semibold">Competitions</span>, and{" "}
          <span className="text-cyan-300 font-semibold">Hackathons</span> like
          never before. Get ready to innovate, compete & create history!
        </p>
        <button className="bg-cyan-400 text-black font-semibold py-4 px-10 rounded-lg shadow-lg hover:bg-cyan-500 transition-transform transform hover:scale-105">
          Get Started
        </button>

        {/* Dynamic Glitch Taglines */}
        <DecoderMotion />
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 z-10 flex flex-col items-center">
        <p className="text-white/70 text-sm mb-2">Scroll Down</p>
        <ChevronDown className="scroll-down-icon text-cyan-400 w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;