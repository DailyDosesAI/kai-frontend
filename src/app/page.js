"use client";

import Link from "next/link";
import RiveScrollViewer from "../components/RiveScrollViewer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const slides = [
  { src: "/1.riv", label: "Human Like AI Tutor" },
  { src: "/2.riv", label: "Your Personalized Road Map" },
  { src: "/2.1.riv", label: "" },
  { src: "/3.riv", label: "Voice and Video Calls and text" },
  { src: "/4.riv", label: "Your Personalized  Practices" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isLockedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();

      if (isLockedRef.current) return; // اگر قفل فعاله، نادیده بگیر

      const direction = Math.sign(e.deltaY);

      if (direction === 0) return; // اسکرول صفر یعنی تغییر نکن

      setActiveIndex((prevIndex) => {
        if (direction > 0 && prevIndex < slides.length - 1) {
          return prevIndex + 1;
        } else if (direction < 0 && prevIndex > 0) {
          return prevIndex - 1;
        }
        return prevIndex;
      });

      
      isLockedRef.current = true;

      setTimeout(() => {
        isLockedRef.current = false;
      }, 2000);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen overflow-hidden">
      <header className="bg-nav-bar py-4 sm:py-6 fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-10">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Kai</h1>
          <div className="bg-blue text-white rounded-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">
            <h2>Get in touch</h2>
          </div>
        </div>
      </header>

      <div className="h-[60px] sm:h-[72px]" />

      <main className="flex flex-col items-center flex-grow relative">
        <div className="max-w-full sm:max-w-[600px] w-full flex flex-col items-center">
          <div className="w-full h-screen flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[activeIndex].src}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative w-[900px] h-[900px] -mt-12"
              >
                <RiveScrollViewer src={slides[activeIndex].src} />
              </motion.div>
            </AnimatePresence>

            <motion.p
              key={`label-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-2xl sm:text-3xl md:text-4xl font-semibold text-center select-none w-full px-4 break-words z-50 rounded-lg py-2"
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
        </div>

        <AnimatePresence>
          {activeIndex === 4 && (
            <motion.div
              key="download-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed bottom-[130px] md:bottom-[170px] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-40 w-full"
            >
              <h4 className="text-gray text-[14px] mb-3 sm:mb-4 text-center">
                Coming Soon
              </h4>
              <div className="flex flex-row items-center gap-2 sm:gap-4">
                <Image
                  src="/app_store.svg"
                  alt="App Store"
                  width={119}
                  height={40}
                  className="w-32 sm:w-36 md:w-[119px] h-10"
                />
                <Image
                  src="/google_play.svg"
                  alt="Google Play"
                  width={119}
                  height={40}
                  className="w-32 sm:w-36 md:w-[119px] h-10"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {activeIndex === 4 && (
          <motion.footer
            key="sticky-footer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-x-0 bottom-0 bg-transparent border-t border-black/10 py-4 sm:py-6 flex flex-col items-center space-y-2 sm:space-y-4 z-50"
            style={{ minHeight: 120 }}
          >
            <p className="text-gray text-xs sm:text-xs">Made with ❤️ in Vancouver</p>
            <p className="text-gray text-xs sm:text-xs text-center max-w-xs sm:max-w-lg mx-auto leading-tight">
              Address: 456 Business Avenue, Suite 200, Vancouver, BC V6B 1A8, Canada
            </p>
            <div className="flex items-center gap-2 sm:gap-4 mt-1 sm:mt-2">
              <Link href="https://google.com" className="hover:opacity-80 transition-opacity">
                <Image src="/linkdein.svg" alt="LinkedIn" width={20} height={20} />
              </Link>
            </div>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
}
