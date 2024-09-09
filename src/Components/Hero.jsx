import { motion } from "framer-motion";
import Background_Hero from "../assets/Hero-Background.jpg";
import Background_Hero_Small from "../assets/Prathamesh_Square_Logo.jpg"; // New image for small screens
import linkdin from "../assets/linkedin-icon.png";
import instagram from "../assets/instagram-logo.png";
import github from "../assets/GitHub.png";
import resume from "../assets/Prathamesh lokhande-resume-2024.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center mt-18 lg:mt-20"
    >
      {/* Background image for larger screens */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background_Hero})` }}
      ></div>

      {/* Background color and image for smaller screens */}
      <div className="lg:hidden absolute inset-0 bg-[#ffddca] flex flex-col items-center justify-center">
        <img
          src={Background_Hero_Small}
          alt="Hero Small"
          className="w-64 h-64 rounded-full border-8 border-yellow-500"
          style={{ transform: "translateY(-10%)" }}
        />
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-3xl font-bold mb-4">Prathamesh Lokhande</h1>
            <p className="text-lg mb-4">
              Welcome! I am a <strong>Full Stack Developer.</strong>
            </p>
            <p className="text-lg mb-8">Connect with me on social media:</p>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/in/prathamesh-lokhande-92ab26223/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700"
              >
                <img src={linkdin} alt="LinkedIn" className="w-16 h-16" />
              </a>
              <a
                href="https://www.instagram.com/_prathamesh_7376/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700"
              >
                <img src={instagram} alt="Instagram" className="w-16 h-16" />
              </a>
              <a
                href="https://github.com/prathamesh7376"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700"
              >
                <img src={github} alt="GitHub" className="w-16 h-16" />
              </a>
            </div>
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main content for larger screens */}
      <div className="hidden lg:flex flex-col items-center justify-center relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Prathamesh Lokhande
          </h1>
          <p className="text-xl lg:text-2xl mb-4">
            Welcome! I am a Full Stack Developer.
          </p>
          <p className="text-xl lg:text-2xl mb-8">
            Connect with me on social media:
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="https://www.linkedin.com/in/prathamesh-lokhande-92ab26223/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <img src={linkdin} alt="LinkedIn" className="w-20 h-20" />
            </a>
            <a
              href="https://www.instagram.com/_prathamesh_7376/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <img src={instagram} alt="Instagram" className="w-20 h-20" />
            </a>
            <a
              href="https://github.com/prathamesh7376"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700"
            >
              <img src={github} alt="GitHub" className="w-20 h-20" />
            </a>
          </div>
          <motion.a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
