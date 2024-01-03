import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mongramImg from "@/public/mongram.png";
import pythonWebScrappingImg from "@/public/pythonWebScrapping.png";
import portfolioImg from "@/public/portfolio.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Mongram",
    description:
      "Created a full stack social media clone with create New post, Update, Delete, Like and save Post operations.",
    tags: ["React", "TypeScript", "Zod", "ShadCN", "Tailwind", "Appwrite"],
    imageUrl: mongramImg,
  },
  {
    title: "Product Analysis System",
    description:
      "Created a Python Webscrapping Website for fetching the data from E-commerce websites, ",
    tags: ["Python", "Flask", "HTMl", "CSS", "BeautifullSoup"],
    imageUrl: pythonWebScrappingImg,
  },
  {
    title: "Portfolio Front-end",
    description: "Created My first Portfolio website using HTML, CSS, JS.",
    tags: ["HTML", "CSS", "GIT", "GITHUB", "JAVSCRIPT"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "Bootstrap",
  "redux",
  "SQL",
  "MongoDB",
  "MySQL",
] as const;
