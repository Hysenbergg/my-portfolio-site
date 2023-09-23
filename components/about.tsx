"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After graduating in{" "}
        <span className="font-medium">Computer Engineering</span>, I had a
        <span className="italic">special interest in mobile programming</span>.
        However, the dynamism and ease of use of JavaScript language attracted
        me, so I focused on <span className="font-medium">React Native</span>{" "}
        for <span className="font-medium">1 year</span>. I also received
        training in web development with{" "}
        <span className="font-medium">React</span> and improved my skills in
        this area. In the software development process,{" "}
        <span className="italic">
          what I enjoy the most is being able to create solutions to people&apos;s
          problems
        </span>
        . Although I am mainly interested in{" "}
        <span className="font-medium">React Native</span>, I am also very
        interested in technologies such as{" "}
        <span className="font-medium">React</span> and{" "}
        <span className="font-medium">Next.js</span>. I am always up to date
        with the latest technologies and strive to keep improving myself. I am
        currently looking for a{" "}
        <span className="font-medium">
          full-time software developer position
        </span>
        .
      </p>
    </motion.section>
  );
}
