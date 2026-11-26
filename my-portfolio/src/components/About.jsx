
import React from "react";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const qualities = [
    {
      icon: <Code2 />,
      title: "Problem Solver",
      description: "Enjoy solving programming challenges and learning DSA."
    },
    {
      icon: <Lightbulb />,
      title: "Creative Thinker",
      description: "Love turning ideas into useful digital experiences."
    },
    {
      icon: <Rocket />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving skills."
    }
  ];

  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <span className="section-tag">GET TO KNOW ME</span>
        <h2>About <span className="gradient-text">Me</span></h2>
        <p>A little introduction about who I am.</p>
      </div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Turning Ideas Into Reality Through Code.</h3>

          <p>
            I'm Arpit Barnwal, currently pursuing MCA at GLA University.
            I have a strong interest in software development,
            programming and problem-solving.
          </p>

          <p>
            I enjoy working with Java, React and modern web technologies.
            My goal is to become a skilled software developer and
            build applications that solve real-world problems.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </motion.div>

        <div className="about-cards">
          {qualities.map((item, index) => (
            <motion.div
              className="about-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="about-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
