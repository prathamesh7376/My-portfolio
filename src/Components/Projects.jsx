import TopTaste from "../assets/TopTaste.png";
import currencyConverterImage from "../assets/Global_Currency_Converter.png";
import weatherWebsiteImage from "../assets/WeatherApp.png";
import Educity from "../assets/Educity.png";

const projects = [
  {
    name: "Food Ordering Website",
    description: " FrontEnd Website Built with Next.js, Tailwind CSS",
    link: "https://top-taste.vercel.app/",
    source: "https://github.com/prathamesh7376/TopTaste",
    image: TopTaste,
  },
  {
    name: "University  Website",
    description: "Built with React, Tailwind CSS",
    link: "https://educity-livid.vercel.app/",
    source: "https://github.com/prathamesh7376/educity",
    image: Educity,
  },
  {
    name: "Global Weather Website",
    description: "Built with React, Tailwind CSS & openWeatherMap Api (free)",
    link: "https://weather-web-ruby-nine.vercel.app/",
    source: "https://github.com/prathamesh7376/weather-web",
    image: weatherWebsiteImage,
  },
  {
    name: "Global Currency Converter",
    description:
      "Built with React, Tailwind CSS & open source Currency rate API",
    link: "https://prathamesh7376-web-currency-convertre.vercel.app/",
    source:
      "https://github.com/prathamesh7376/prathamesh7376-Web-Currency-Convertre",
    image: currencyConverterImage,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 border-8 border-yellow-500"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-100 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="mb-4 text-center">{project.description}</p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <a
                    href={project.link}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Visit
                  </a>
                  <a
                    href={project.source}
                    className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
