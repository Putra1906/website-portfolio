"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import ProjectItem from "./ProjectItem"; // 🔹 Komponen baru

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
  // ... (sisa data tetap sama)
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

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
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
