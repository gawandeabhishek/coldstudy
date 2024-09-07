"use client";

import Image from "next/image";
import image1 from "../images/home-1.svg";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Card from "@/components/ui/Card";

const tempdata = [
  {
    src: html,
    alt: "HTML",
    title: "HTML",
    description:
      "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.",
  },
  {
    src: css,
    alt: "CSS",
    title: "CSS",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML.",
  },
  {
    src: javascript,
    alt: "JavaScript",
    title: "JavaScript",
    description:
      "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
  },
  {
    src: react,
    alt: "React",
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
  },
];

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

  return (
    <main className="p-10 md:p-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-32 min-h-[72vh]">
        <motion.span
          variants={{
            hidden: { opacity: 0, x: -500 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.5, duration: 0.55 }}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={image1}
            alt="home-1"
            className="w-[15rem] md:w-[25rem] rounded-md object-cover"
          />
        </motion.span>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{
            delayChildren: 1,
            staggerChildren: 0.2,
          }}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10"
        >
          <motion.h4
            className="text-3xl md:text-6xl font-bold text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {Array.from(
              "Welcome to Cool Study! Master coding once and for all."
            ).map((char, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h4>
          <motion.p
            className="text-xs md:text-sm text-secondary w-[80%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {Array.from(
              "When I started learning to code I realized that when I learn coding by actually coding different things I can remember all of that coding concept. so that's why I will teach you by that method."
            ).map((char, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.03 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
      {/* to animate */}
      <motion.div
        className="flex flex-wrap items-center justify-center py-10 gap-20"
        style={{ scale }}
      >
        {tempdata.map((item, idx) => (
          <Card item={item} key={idx} />
        ))}
      </motion.div>
    </main>
  );
}
