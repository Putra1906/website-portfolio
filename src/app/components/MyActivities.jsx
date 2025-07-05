"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const activities = [
  {
    title: "Senior Staff of Academic Department (HMTT)",
    image: "/images/projects/akd.jpg",
    description:
      "Develop academic programs, coordinate tutoring, and organize Telco student learning support.",
  },
  {
    title: "Assistant Coordinator (Head) of MBC Laboratory",
    image: "/images/activities/mbc.jpg",
    description:
      "Coordinated, monitored, and led team operations while mentoring and delivering innovations.",
  },
  {
    title: "Event Committee of Telkom CyberFest 2024 by Digistar",
    image: "/images/activities/comvis.jpg",
    description:
      "Collaborated with team members to ensure event flow of Road to Telkom Cyberfest 2024 at Telkom Landmark Tower (TLT), Jakarta Selatan, Indonesia.",
  },
  {
    title: "Chairman of Komunitas Tentor",
    image: "/images/activities/komten.png",
    description:
      "Leading, coordinating, and enhancing tutoring programs for Telecommunication Engineering students.",
  },
  {
    title: "Tentor for Physics 1, Chemistry 1, Calculus 1",
    image: "/images/activities/tutor.png",
    description:
      "Providing academic guidance and tutoring in Physics 1, Chemistry 1, and Calculus 1 to support Telecommunication Engineering students' understanding and performance.",
  },
  {
    title: "Team Leader CTF Competition",
    image: "/images/activities/ctf.png",
    description:
      "Led a cybersecurity team in the Arkavidia: Capture The Flag (CTF) competition by HIMA IF ITB.",
  },
];

const CampusActivitiesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animasi tetap jalan saat scroll naik
      mirror: true,
    });
  }, []);

  return (
    <section id="activities" className="py-20 px-6 md:px-16">
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        Campus Activities
      </h2>

      <div className="flex flex-col gap-16">
        {activities.map((activity, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gambar responsif dengan bingkai */}
              <div className="w-full md:w-1/2">
                <div className="border-4 border-cyan-500 rounded-xl overflow-hidden shadow-lg group transition-transform duration-700 hover:scale-105">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    width={700}
                    height={450}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Deskripsi */}
              <div className="w-full md:w-1/2 text-white">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  {activity.title}
                </h3>
                <p className="text-lg text-gray-300">{activity.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CampusActivitiesSection;
