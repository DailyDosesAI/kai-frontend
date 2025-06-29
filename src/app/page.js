"use client";

import RiveScrollViewer from "../components/RiveScrollViewer";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

const slides = [
  {
    src: "/1.riv",
    label: "Human-Like AI Tutor",
    subHeading: "Enjoy private sessions just like with a real tutor",
  },
  {
    src: "/2.riv",
    label: "Personalized Lesson Plan",
    subHeading: "Kai tailors lessons to your goals, level, and preferences.",
  },
  { src: "/2.1.riv", label: "", subHeading: "" },
  {
    src: "/3.riv",
    label: "Talk to Kai Anytime",
    subHeading: "Call or message Kai—voice, video, or chat, 24/7",
  },
  //{ src: "/4.riv", label: "Your Personalized  Practices" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isLockedRef = useRef(false);
  const touchStartYRef = useRef(0);
  const touchEndYRef = useRef(0);

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

    // Touch events for mobile devices
    const onTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e) => {
      if (isLockedRef.current) return;

      touchEndYRef.current = e.changedTouches[0].clientY;
      const touchDiff = touchStartYRef.current - touchEndYRef.current;
      const minSwipeDistance = 50; // Minimum distance for swipe

      if (Math.abs(touchDiff) > minSwipeDistance) {
        const direction = Math.sign(touchDiff);

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
      }
    };

    // Add event listeners
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen overflow-hidden"
    >
      <header className="bg-nav-bar py-4 sm:py-6 fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-10">
          <h1 className="text-xl sm:text-2xl font-bold text-black">Kai Language Lab</h1>
          <div className="bg-blue text-white rounded-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base cursor-pointer hover:bg-blue/90 transition-colors">
            <Link href="mailto:hi@dailydoses.ai" className="text-white no-underline">
              <h2>Get in Touch</h2>
            </Link>
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
                className={`relative w-[850px] h-[850px] ${
                  activeIndex === 2 ? "-mt-16" : "-mt-12"
                }`}
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
              className="absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-4xl font-semibold text-center select-none w-full px-4 break-words z-50 rounded-lg py-2"
            >
              {slides[activeIndex].label && (
                <Typewriter
                  words={[slides[activeIndex].label]}
                  loop={1}
                  cursor
                  cursorStyle=""
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              )}
            </motion.p>

            {slides[activeIndex].subHeading && (
              <motion.p
                key={`subheading-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-gray font-medium text-[1rem] w-full px-4 z-50"
              >
                {slides[activeIndex].subHeading}
              </motion.p>
            )}
          </div>
        </div>

        <AnimatePresence>
          {activeIndex === 3 && (
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
        {activeIndex === 3 && (
          <motion.footer
            key="sticky-footer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-x-0 bottom-0 bg-transparent border-t border-black/10 py-4 sm:py-6 flex flex-col items-center space-y-2 sm:space-y-4 z-50"
            style={{ minHeight: 120 }}
          >
            <p className="text-gray text-xs sm:text-xs">
              Made with ❤️ in Vancouver
            </p>
            <p className="text-gray text-xs sm:text-xs text-center max-w-xs sm:max-w-lg mx-auto leading-tight">
              Address: 456 Business Avenue, Suite 200, Vancouver, BC V6B 1A8,
              Canada
            </p>
          </motion.footer>
        )}
      </AnimatePresence>
    </div>
  );
}
