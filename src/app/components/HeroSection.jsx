"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <section className="lg:py-16" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          <motion.h1
            className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.8 },
              },
            }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-500">
              Hello, I&apos;m Putra{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Cyber Security",
                1000,
                "IT Support",
                1000,
                "Network Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.8 },
              },
            }}
          >
            Dedicated to creating impact through technology and security.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 0.8 },
              },
            }}
          >
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1qMTBVHSBjHOf8bZppnYLNpbNvCmL4vsE/view?usp=sharing"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View My CV
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Optional image placeholder with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
          }
          transition={{ duration: 0.8 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          {/* Optional hero image can go here */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
