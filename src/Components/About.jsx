import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures animation happens only once when the section is fully visible
    threshold: 0.5, // Ensures the section is 50% visible before starting animation
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [controls, inView]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when this component is rendered
  }, []);

  return (
    <section
      id="about"
      className="pt-32 md:pt-40 pb-16 md:pb-20 lg:pb-24 bg-slate-100"
      style={{ minHeight: "100vh" }} // Full viewport height
    >
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }} // Slightly adjusted for smoother entry
          animate={controls}
        >
          About Me
        </motion.h2>

        <div className="text-base md:text-lg lg:text-xl text-center leading-relaxed">
          <motion.p
            className="mb-4 px-4 sm:px-8 lg:px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I am a passionate Full Stack Developer with a strong foundation in
            both front-end and back-end development technologies. After
            graduating with a BSc in Computer Science, I pursued advanced
            certifications in Java Full Stack Development and gained hands-on
            experience with a variety of technologies including HTML, CSS,
            JavaScript, Bootstrap, SQL (MySQL), React, and Hibernate.
          </motion.p>

          <motion.p
            className="mb-4 px-4 sm:px-8 lg:px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.4 }}
          >
            During my internship at Convergex Digital, I transitioned from Java
            to Next.js, MongoDB, and Tailwind CSS, where I contributed to
            building scalable and efficient web applications. I am skilled in
            designing and developing responsive, user-friendly interfaces and
            have a solid understanding of RESTful APIs and state management.
          </motion.p>

          <motion.p
            className="px-4 sm:px-8 lg:px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Apart from technical skills, I possess strong problem-solving
            abilities and am adept at working in collaborative environments to
            deliver high-quality solutions. I am currently honing my skills in
            Spring Boot, Microservices, and Docker to broaden my development
            capabilities and stay updated with industry trends.
          </motion.p>

          <motion.p
            className="px-4 sm:px-8 lg:px-20 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Currently, I am continuously learning and building projects to
            enhance my skills in modern technologies like Spring Boot,
            Microservices, Docker, and GraphQL. I aim to create applications
            that are not only functional but also scalable and maintainable.
          </motion.p>

          <motion.p
            className="px-4 sm:px-8 lg:px-20 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: 1 }}
          >
            Feel free to connect with me for potential collaborations, learning
            opportunities, or any questions related to Full Stack Development.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
