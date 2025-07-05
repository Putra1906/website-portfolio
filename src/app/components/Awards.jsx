"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const awards = [
  {
    title: "Gold Medalist in The Physics Olympiad University-Level 2024",
    image: "/images/awards/piagam1.png",
  },
  {
    title: "Cyber Security by ISC2",
    image: "/images/awards/piagam2.png",
  },
];

const AwardsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // biar animasi bisa jalan berulang
      mirror: true, // animasi aktif juga saat scroll ke atas
    });
  }, []);

  return (
    <section id="awards" className="py-20 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        Achievement
      </h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-12">
        {awards.map((award, index) => (
          <div
            key={index}
            className="w-96 h-64 relative rounded-lg overflow-hidden border-4 border-pink-300 shadow-xl group transition-transform duration-500 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Image
              src={award.image}
              alt={award.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 rounded-lg border-4 border-transparent group-hover:border-pink-300 animate-glow" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
