import { useEffect } from "react";
import webLogo from "../assets/WebDevelopment_logo.jpeg";
import APILogo from "../assets/API_logo.jpeg";
import FrountEndLogo from "../assets/FrountEnd_logo.jpeg";
import BackEndLogo from "../assets/BackendDeveloper_logo.jpeg";
import FullStackLogo from "../assets/Full-Stack_logo.jpeg";
import MobileDevLogo from "../assets/Mobile-Development_logo.jpeg";
import MySQLLogo from "../assets/MySQL_logo.jpeg";
import UIUX from "../assets/UIUX_logo.jpeg";
import OptimizationLogo from "../assets/Optimization_logo.jpeg";
import ConsultingLogo from "../assets/Consulting_logo.jpeg";

const services = [
  {
    name: "Web Development",
    description: "Building responsive and performant web applications.",
    image: webLogo,
  },
  {
    name: "API Development",
    description: "Creating robust and scalable APIs.",
    image: APILogo,
  },
  {
    name: "Front-End Development",
    description: "Crafting visually appealing and user-friendly interfaces.",
    image: FrountEndLogo,
  },
  {
    name: "Back-End Development",
    description: "Implementing server-side logic and database management.",
    image: BackEndLogo,
  },
  {
    name: "Full Stack Development",
    description:
      "Combining front-end and back-end development for comprehensive solutions.",
    image: FullStackLogo,
  },
  {
    name: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications using React Native.",
    image: MobileDevLogo,
  },
  {
    name: "Database Management",
    description: "Designing and maintaining MySQL and MongoDB databases.",
    image: MySQLLogo,
  },
  {
    name: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences.",
    image: UIUX,
  },
  {
    name: "Performance Optimization",
    description: "Enhancing application performance and loading times.",
    image: OptimizationLogo,
  },
  {
    name: "Consulting Services",
    description: "Providing expert advice and solutions for your projects.",
    image: ConsultingLogo,
  },
];

const Services = () => {
  // Scroll to top when this page is rendered
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-100 mt-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-4 border-yellow-500"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-24 h-24 mx-auto mb-4 object-contain" // Ensures images maintain aspect ratio and fit well
              />
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
