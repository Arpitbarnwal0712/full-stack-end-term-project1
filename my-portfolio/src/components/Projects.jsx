
import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Morse Code Studio",
    category: "Web Development",
    description:
      "A web application that converts text into Morse code and Morse code back into readable text.",
    tech: ["React", "TypeScript", "CSS"],
    github: "https://github.com/Arpitbarnwal0712/morse_code",
    live: "https://morse-code-lilac.vercel.app/",
    number: "01"
  },
  {
    title: "Marvel Characters",
    category: "Frontend Development",
    description:
      "An interactive platform to explore Marvel characters with an engaging user interface.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Arpitbarnwal0712/marvel_characters",
    live: "https://marvel-characters-bhov.vercel.app/",
    number: "02"
  },
  {
    title: "Campus2Career",
    category: "Full Stack Development",
    description:
      "A career assistance platform focused on connecting students with career opportunities.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Arpitbarnwal0712",
    live: "#",
    number: "03"
  }
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <span className="section-tag">MY PORTFOLIO</span>
        <h2>Featured <span className="gradient-text">Projects</span></h2>
        <p>Some things I've built with passion and code.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                <code2 size={19} /> GitHub
              </a>

              {project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo <ExternalLink size={17} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
