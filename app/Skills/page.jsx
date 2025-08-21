"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';
import html from "@/public/html.png";
import css from "@/public/css.png";
import tailwind from "@/public/tailwind.png";
import javascript from "@/public/javascript.png";
import react from "@/public/react.png";
import typescript from "@/public/typescript.png";
import nextjs from "@/public/nextjs.png";
import nodejs from "@/public/nodejs.png";
import express from "@/public/express.png";
import mongodb from "@/public/mongodb.png";
import mongoose from "@/public/mongoose.png";
import postman from "@/public/postman.png";
import npm from "@/public/npm.png";
import php from "@/public/php.png";
import python from "@/public/python.png";
import sql from "@/public/sql.png";
import netlify from "@/public/netlify.png";
import github from "@/public/github.png";
import vercel from "@/public/vercel.png";

const Skills = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600
    });
  }, []);

  return (
    <div id="skills">
      <p className="skills-text"><span>Skills</span></p>
      <div className="skills1">
        <div className="skill-item" data-aos="fade-up"><Image src={html} alt="HTML5 logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">HTML</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={css} alt="CSS3 logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">CSS</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={tailwind} alt="Tailwind CSS framework logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Tailwind CSS</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={javascript} alt="JavaScript logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">JavaScript</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={react} alt="React library logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">React JS</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={typescript} alt="TypeScript logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">TypeScript</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={nextjs} alt="Next.js logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Next JS</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={nodejs} alt="Node.js logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Node JS</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={express} alt="Express.js logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Express JS</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={mongodb} alt="MongoDB logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">MongoDB</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={mongoose} alt="Mongoose.js logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Mongoose</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={postman} alt="Postman logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Postman</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={npm} alt="npm logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">NPM</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={php} alt="PHP logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">PHP</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={python} alt="Python logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Python</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={sql} alt="SQL logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">SQL</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={netlify} alt="Netlify logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Netlify</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={github} alt="GitHub logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">Github</p></div>
        <div className="skill-item" data-aos="fade-up"><Image src={vercel} alt="vercel logo" width={137} height={136}  placeholder="blur"/><p className="skill-txt">vercel</p></div>
      </div>
    </div>
  );
};
export default Skills;