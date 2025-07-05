"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import AnimatedProjectCard from "./AnimatedProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Denial of Service (DOS) Tools",
    description:
      "Foxie DDoS is a Python tool for performing DDoS attacks like UDP, HTTP, SYN Flood, and includes a port scanner using Nmap.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Putra1906/Foxie-DDOS",
    previewUrl: "https://github.com/Putra1906/Foxie-DDOS",
  },
  {
    id: 2,
    title: "Zero Trust Network Access (ZTNA)",
    description: "Research About ZTNA Technologies",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title:
      "Asymmetric Cryptography Performance Comparison: ECDH-AES vs ElGamal",
    description:
      "This project compares ECDH (with AES-GCM) and ElGamal in a Python client-server setup by measuring their computational and communication delays.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Putra1906/Asymmetric-Cryptography-Performance-Comparison",
    previewUrl: "https://github.com/Putra1906/Asymmetric-Cryptography-Performance-Comparison",
  },
  {
    id: 4,
    title: "Foxie Caesar Cipher",
    description:
      "A simple Caesar Cipher Encrypt/Decrypt Tool implemented in Python.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Putra1906/PRODIGY_CS_01",
    previewUrl: "https://github.com/Putra1906/PRODIGY_CS_01",
  },
  {
    id: 5,
    title: "Load Balancing Website with Docker",
    description:
      "This project demonstrates a simple web application deployed in multiple Docker containers and load balanced.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "OpenZiti Architecture Research",
    description:
      "This research examines the architecture of OpenZiti, a zero trust networking platform that embeds secure, identity-based access directly into applications, eliminating the need for traditional VPNs.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

// Animasi lebih heboh
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

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <AnimatedProjectCard key={project.id} project={project} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
