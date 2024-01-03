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
        Fresh off the coding tracks at Guru Nanak College, BSc in hand (with an
        8.9% GPA that practically glistens!), I&apos;m ready to unleash my
        techie superpowers on the world. My journey wasn&apos;t just about
        equations and algorithms (though I did geek out over those too). It was
        about building things that matter, using code to tackle real-world
        problems like a digital Robin Hood.
        <span className="font-medium">
          So, picture this: me, eyes glued to the screen, fingers flying across
          the keyboard, conjuring websites that sing, apps that dance, and
          solutions that leave everyone saying, &quot;Whoa, that&apos;s
          smart.&quot; That&apos;s my happy place.
        </span>
      </p>
      <p>
        I&apos;m a tech enthusiast with a passion for{" "}
        <span className="underline decoration-dashed">React & NEXTJS</span> and
        all things <span className="underline">MERN</span>, but honestly, the
        framework doesn&apos;t matter as much as the impact. If I can use my
        skills to make someone&apos;s life easier, brighter, or just plain
        cooler - sign me up!
      </p>

      <p>
        <span className="font-medium">
          So, if you&apos;re looking for a coder who&apos;s equal parts brain
          and heart,
        </span>
        ,with a thirst for innovation and a smile that rivals any compiler error
        message (okay, maybe not that good),{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">
          hit me up! Let&apos;s build something awesome together.
        </span>
      </p>
    </motion.section>
  );
}
