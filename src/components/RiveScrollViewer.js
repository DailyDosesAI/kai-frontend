import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const RiveComponent = dynamic(
  () => import("@rive-app/react-canvas").then((mod) => mod.default),
  { ssr: false }
);

const slides = [
  { src: "/1.riv", label: "Human Like AI Tutor" },
  { src: "/2.riv", label: "Your Personalized Road Map" },
  { src: "/2.1.riv", label: "" },
  { src: "/3.riv", label: "Voice and Video Calls and text" },
  { src: "/4.riv", label: "Your Personalized  Practices" },
];

export default function RiveScrollViewer({ activeIndex, setActiveIndex }) {
  const containerRef = useRef(null);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (cooldownRef.current) return;
      cooldownRef.current = true;

      if (e.deltaY > 0 && activeIndex < slides.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }

      setTimeout(() => (cooldownRef.current = false), 700);
    };

    const container = containerRef.current;
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [activeIndex, setActiveIndex]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[activeIndex].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-[800px] h-[800px] -mt-12"
        >
          <RiveComponent
            src={slides[activeIndex].src}
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </motion.div>
      </AnimatePresence>
      <motion.p
        key={`label-${activeIndex}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-2xl sm:text-3xl md:text-4xl font-semibold text-center select-none w-full px-4 break-words z-50 rounded-lg py-2"

      >
        <Typewriter
          words={[slides[activeIndex].label]}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </motion.p>
    </div>
  );
}
