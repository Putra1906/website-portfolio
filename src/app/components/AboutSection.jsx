"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const listItemClass =
  "flex items-center gap-3 py-1 text-white hover:text-cyan-400 transition duration-200";

// Motion Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0 },
};

const generateMotionList = (items, colorClass, animateControl, tabKey) => (
  <motion.ul
    key={tabKey}
    className="pl-2"
    variants={containerVariants}
    initial="hidden"
    animate={animateControl}
  >
    {items.map((item, index) => (
      <motion.li key={index} variants={itemVariants} className={listItemClass}>
        <FaCheckCircle className={colorClass} />
        {typeof item === "object" && item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300"
          >
            {item.label}
          </a>
        ) : (
          item.label || item // fallback kalau string biasa
        )}
      </motion.li>
    ))}
  </motion.ul>
);

const AboutSection = () => {
  const [tab, setTab] = useState("work");
  const [isPending, startTransition] = useTransition();

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  useEffect(() => {
    controls.start("hidden");
    controls.start("show");
  }, [tab]);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Work Experience",
      id: "work",
      content: generateMotionList(
        [
          "IT Support Operation Intern @Telkomsel (July 2025)",
          "Cyber Security Analyst Intern @Prodigy Infotech (May 2025)",
          "Cyber Security Researcher @MBC Laboratory (October 2024)",
        ],
        "text-cyan-400",
        controls,
        "work"
      ),
    },
    {
      title: "Soft Skills",
      id: "soft",
      content: generateMotionList(
        [
          "Problem Solving",
          "Attention to Detail",
          "Team Collaboration",
          "Time Management",
          "Growth Mindset",
          "Continuous Learner",
        ],
        "text-pink-300",
        controls,
        "soft"
      ),
    },
    {
      title: "Technical Skills",
      id: "skills",
      content: generateMotionList(
        ["Docker", "Wazuh", "Wireshark", "BurpSuite", "Splunk", "Cisco XDR"],
        "text-cyan-400",
        controls,
        "skills"
      ),
    },
    {
      title: "Education",
      id: "education",
      content: generateMotionList(
        ["Telecommunication Engineering", "Telkom University, Bandung"],
        "text-pink-400",
        controls,
        "education"
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: generateMotionList(
        [
          {
            label:
              "Certified Network Security Practitioner (CNSP) by TheSecOps Group",
            url: "https://drive.google.com/file/d/1cXPczM8Dk_AI8dnOJis7azSgI2xtdq0Y/view?usp=sharing",
          },
          {
            label: "Certified in Cyber Security by ISC2",
            url: "https://drive.google.com/file/d/1V412zLqf-nKODIoZHO-klfETmCO6kjYk/view?usp=sharing",
          },
          {
            label: "ISO/IEC 27001 by SkillFront",
            url: "https://drive.google.com/file/d/1LP0eQAsbg0plAfn8Yf-yB5hn4q-Gsxks/view?usp=sharing",
          },
          {
            label: "Certified Phishing Prevention Specialist by Hack & Fix",
            url: "https://drive.google.com/file/d/1gHYrZnpDR2qAVK5WkzByv8OQI_ec74YV/view?usp=sharing",
          },
        ],
        "text-cyan-500",
        controls,
        "certifications"
      ),
    },
  ];

  return (
    <section className="text-white" id="about" ref={ref}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <img
            src="/images/about/poetra.png"
            width={450}
            height={450}
            alt="About image"
          />
        </motion.div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            variants={fadeUpVariant}
            initial="hidden"
            animate={controls}
          >
            <span className="text-[#66FCF1]">About Me</span>
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg"
            variants={fadeVariant}
            initial="hidden"
            animate={controls}
          >
            Hello Everyone, My full name is Putra Alpa Omega Bangun. I&apos;m an
            enthusiastic and detail-oriented Telecommunications Engineering
            student with a strong passion for IT system security, particularly
            in defensive cybersecurity (Blue Team). I embrace a lifelong
            learning mindset and strive to contribute meaningfully to
            safeguarding digital infrastructures through analytical rigor and
            proactive defense strategies.
          </motion.p>

          <div className="flex flex-row flex-wrap justify-start mt-8 gap-2">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
