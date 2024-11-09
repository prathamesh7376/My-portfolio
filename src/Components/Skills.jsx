import java from "../assets/Java_logo.jpeg";
import javascript from "../assets/JavaScript_logo.jpeg";
import react from "../assets/React_logo.jpeg";
import html from "../assets/HTML_logo.jpeg";
import css from "../assets/CSS_logo.jpeg";
import bootstrap from "../assets/Bootstrap_logo.jpeg";
import mysql from "../assets/MySQL_logo.jpeg";
import mongodb from "../assets/MongoDB_logo.jpeg";
import nextjs from "../assets/Next_logo.jpeg";
import tailwindcss from "../assets/TailwindCSS_logo.jpeg";
import hibernate from "../assets/Hibernate_logo.jpeg";
import reactnative from "../assets/ReactNative_logo.jpeg";

const skills = [
  { name: "Java", image: java },
  { name: "JavaScript", image: javascript },
  { name: "React", image: react },
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "Bootstrap", image: bootstrap },
  { name: "SQL (MySQL)", image: mysql },
  { name: "MongoDB", image: mongodb },
  { name: "Next.js", image: nextjs },
  { name: "Tailwind CSS", image: tailwindcss },
  { name: "Hibernate", image: hibernate },
  { name: "React Native", image: reactnative },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-stone-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 mt-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-4 border-yellow-500"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-28 h-28 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
