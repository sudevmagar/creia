"use client";

import { ArrowRightCircle } from "lucide-react";
import animationData from "../../public/assets/Meeting-Time.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const textVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <div className="lg:h-[80vh] flex flex-col lg:flex-row items-center justify-between bg-hero-gradient text-foreground px-6 lg:px-12 py-12 lg:py-0 overflow-hidden">
      {/* Text Side */}
      <motion.div
        className="flex flex-col gap-6 justify-center w-full lg:w-1/2 order-2 lg:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Headline */}
        <motion.h1
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl lg:text-7xl font-bold leading-tight"
        >
          Creia.
        </motion.h1>

        <motion.h2
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200"
        >
          Create together.
        </motion.h2>

        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-2xl"
        >
          A modern workspace for real-time collaboration. Build, organize, and
          communicate with your team seamlessly.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          {/* Get Started */}
          <button
            type="submit"
            className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-secondary border-2 border-primary rounded-md px-6 py-3 text-lg font-semibold transition-all duration-500 hover:scale-105 cursor-pointer group"
          >
            <span>Get Started</span>{" "}
            <ArrowRightCircle className="ml-2 w-8 h-8 transition-transform duration-500 ease-linear -rotate-45 group-hover:rotate-0" />
          </button>

          {/* Learn More */}
          <button
            type="button"
            className="flex justify-center items-center gap-2 bg-primary/10 hover:bg-primary/20 text-foreground border-2 border-primary/40 rounded-md px-6 py-3 text-lg font-semibold transition-all duration-500 hover:scale-105 cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Animation Side */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-10 lg:mb-0"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
