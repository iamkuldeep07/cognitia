import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const characters = "!<>-_\\/[]{}—=+*^?#________";
const taglines = ["Workshops", "Competitions", "Hackathons", "Tech Talks"];

const getRandomChar = () =>
  characters[Math.floor(Math.random() * characters.length)];

const DecoderMotion = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["#00F5FF", "#FF4E50", "#FFD700", "#00FF7F"]; // Cyan, Red, Gold, Green

  useEffect(() => {
    let interval;
    let reveal = 0;
    let currentTagline = taglines[index];

    const scramble = () => {
      const scrambled = currentTagline
        .split("")
        .map((char, i) => (i < reveal ? currentTagline[i] : getRandomChar()))
        .join("");

      setText(scrambled);

      if (reveal < currentTagline.length) {
        reveal++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % taglines.length);
          setColorIndex((prev) => (prev + 1) % colors.length);
        }, 2000); // Hold full word for 2s
      }
    };

    interval = setInterval(scramble, 50);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.h2
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: 1,
        y: 0,
        color: colors[colorIndex],
        textShadow: `0 0 10px ${colors[colorIndex]}, 0 0 20px ${colors[colorIndex]}`,
      }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6 }}
      className="font-final text-lg sm:text-xl md:text-2xl mt-6 uppercase tracking-widest"
    >
      {text || " "}
    </motion.h2>
  );
};

export default DecoderMotion;