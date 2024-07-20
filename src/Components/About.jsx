import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false }); // Set triggerOnce to false

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

  return (
    <section id="about" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          About Me
        </motion.h2>
        <div className="text-lg md:text-xl lg:text-2xl text-center leading-relaxed">
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, y: 50 }}
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
            className="mb-4"
            initial={{ opacity: 0, y: 50 }}
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
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Apart from technical skills, I possess strong problem-solving
            abilities and am adept at working in collaborative environments to
            deliver high-quality solutions. I am currently honing my skills in
            React Native to broaden my mobile development capabilities and stay
            updated with industry trends.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
