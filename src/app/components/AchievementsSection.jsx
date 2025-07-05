"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    metric: "Certification",
    value: "4",
  },
  {
    metric: "Learning Courses",
    value: "10",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    } else {
      setHasAnimated(false); // jika ingin reset saat keluar dari view
    }
  }, [inView]);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" ref={ref}>
      <div className="sm:border-black-300 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                {hasAnimated ? (
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                ) : (
                  <span className="text-white text-4xl font-bold">
                    0
                  </span>
                )}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
