import { useState } from "react";
import { Link } from "react-router-dom";
import mylogo from "../assets/Prathamesh_Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-700 shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <div className="flex items-center">
          <img
            src={mylogo}
            alt="Logo"
            className="h-12 w-auto md:h-16 rounded-sm pr-8"
          />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/skills" className="text-white hover:text-gray-300">
            Skills
          </Link>
          <Link to="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link to="/projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link
            to="/contact"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-gray-700 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center space-y-4 py-8">
          <button
            onClick={toggleMenu}
            className="text-white self-end mr-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <Link
            to="/"
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
