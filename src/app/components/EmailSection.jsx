"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/Instagram-icon.svg";

const EmailSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  const zoomInBounce = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="grid md:grid-cols-1 my-12 py-24 gap-4 relative overflow-hidden"
    >
      <motion.div
        className="z-10 text-center"
        variants={zoomInBounce}
        initial="hidden"
        animate={controls}
      >
        <h5 className="text-3xl font-extrabold text-white my-2 drop-shadow-lg">
          Let&apos;s Connect 🚀
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-xl mx-auto text-lg">
          I&apos;m actively exploring new opportunities where I can contribute, grow,
          and make an impact. Feel free to reach out through my social media!
        </p>
        <div className="socials flex justify-center gap-6 mt-6">
          <Link
            href="https://github.com/Putra1906?tab=repositories"
            target="_blank"
          >
            <Image src={GithubIcon} alt="Github Icon" width={50} height={50} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/putra-alpa-omega-bangun-18222b241/"
            target="_blank"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://www.instagram.com/ptraalpha_/" target="_blank">
            <Image
              src={InstagramIcon}
              alt="Instagram Icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
