"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const ProjectItem = ({ project, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.li
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      transition={{ delay: index * 0.15 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.4)",
      }}
    >
      <ProjectCard
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
      />
    </motion.li>
  );
};

export default ProjectItem;
