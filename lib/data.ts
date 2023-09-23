import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import certificationProject2 from '@/public/certification_project2.png';
import lazaImagesss from '@/public/thirdlaza.png';
import mydictionary from '@/public/mydictionary.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Burdur Mehmet Akif Ersoy University",
    location: "Burdur, TR",
    description: "I graduated from university as a Computer Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Software Intern",
    location: "Ankara, TR",
    description:
      "I did an internship at AFAD, Turkey's disaster management and international aid organization. I developed the AYDES project, which is being developed with Kotlin, with React Native, and developed an entry-level case imaging application.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Mobile & Front-End Developer",
    location: "Balıkesir, TR",
    description:
      "I am currently a freelance mobile app and front-end developer. I have knowledge in React, React Native, Next.js, TypeScript and Tailwind technologies. I am open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Certification Project",
    description:
      "The voluntary project has developed a mobile application to be used on tablets by audit teams in certification processes.",
    tags: ["React Native", "Realm DB", "Context", "AsyncStorage", "React Navigation"],
    imageUrl: certificationProject2,
  },
  {
    title: "Laza E-Commerce",
    description:
      "It is the front-end work of Laza e-commerce design, a figma design. Developed as a modern commerce mobile application view.",
    tags: ["React Native", "React Navigation", "Clon App"],
    imageUrl: lazaImagesss,
  },
  {
    title: "MyDictionary",
    description:
      "It is a personal dictionary app where users can add, delete and exercise with words to memorize English vocabulary.",
    tags: ["React Native", "Realm DB", "React Navigation"],
    imageUrl: mydictionary,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React Native",
  "React",
  "Next.js",
  "Kotlin",
  "Flutter",
  "Tailwind",
  "TypeScript",
  "Git",
  "Redux",
  "Realm DB",
] as const;
