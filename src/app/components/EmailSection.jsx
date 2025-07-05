"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/Instagram-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const formRef = useRef();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    console.log("Simulasi pengiriman email:", data); // Ini cuma log dummy
    setEmailSubmitted(true);
    e.target.reset();
  };

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

  const slideFadeIn = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="grid md:grid-cols-2 my-12 py-24 gap-4 relative overflow-hidden"
    >
      {/* LEFT: Text & Social Icons */}
      <motion.div
        className="z-10"
        variants={zoomInBounce}
        initial="hidden"
        animate={controls}
      >
        <h5 className="text-3xl font-extrabold text-white my-2 drop-shadow-lg">
          Let&apos;s Connect 🚀
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-lg">
          I&apos;m actively exploring new opportunities where I can contribute, grow,
          and make an impact. Feel free to reach out!
        </p>
        <div className="socials flex flex-row gap-4 mt-4">
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

      {/* RIGHT: Email Form */}
      <motion.div
        variants={slideFadeIn}
        initial="hidden"
        animate={controls}
        className="bg-[#0d0d0d] p-6 rounded-xl shadow-xl"
      >
        {emailSubmitted ? (
          <p className="text-green-500 text-lg font-semibold">
            ✅ Email sent successfully!
          </p>
        ) : (
          <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="text-white mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="mb-4 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg w-full p-2.5"
              placeholder="jacob@google.com"
            />

            <label
              htmlFor="subject"
              className="text-white mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="mb-4 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg w-full p-2.5"
              placeholder="Just saying hi"
            />

            <label
              htmlFor="message"
              className="text-white mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              className="mb-6 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-white text-sm rounded-lg w-full p-2.5"
              placeholder="Let’s talk about..."
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:scale-105 transition-transform text-white font-semibold py-3 px-5 rounded-lg w-full"
            >
              ✉️ Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default EmailSection;
