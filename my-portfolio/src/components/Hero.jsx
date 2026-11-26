
import React from "react";
import { Code2, Globe, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I'm Arpit Barnwal
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Building Digital
          <br />
          Experiences That
          <br />
          <span className="gradient-text">Make an Impact.</span>
        </motion.h1>

        <p className="hero-description">
          I'm an MCA student and aspiring software developer
          passionate about Java, Web Development, DSA and
          creating meaningful digital solutions.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explore My Work <ArrowUpRight size={18} />
          </a>

          <a href="/resume.pdf" className="btn btn-outline" download>
            Download CV <Download size={18} />
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://github.com/Arpitbarnwal0712"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Globe />
          </a>
        </div>
      </div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-glow"></div>

        <img src={profile} alt="Arpit Barnwal" />

        <div className="floating-card">
          <span>💻</span>
          <div>
            <strong>Developer</strong>
            <small>Always Learning</small>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
