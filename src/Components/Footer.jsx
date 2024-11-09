import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Section 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p>
              I am a passionate developer focusing on creating user-centric,
              dynamic, and innovative web applications. I love to explore new
              technologies and keep myself updated.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white" // optional: to apply styles when active
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-400 hover:text-white"
                  activeClassName="text-white"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Section 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/prathamesh7376" // Updated GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/prathamesh-lokhande-92ab26223/" // Updated LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername" // Keep the placeholder for Twitter, replace it with your actual link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/_prathamesh_7376/" // Keep the placeholder for Facebook, replace it with your actual link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Prathamesh Lokhande. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
