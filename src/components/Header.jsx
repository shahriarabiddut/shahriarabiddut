import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import headerImg from "../assets/imgs/header.jpg";

const Header = () => {
  return (
    <>
      <header
        id="home"
        className="relative bg-cover bg-center h-screen pt-10"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center container mx-auto">
          <h1 className="text-gray-600 text-5xl md:text-6xl font-bold mb-4">
            <span className="block font-paaji">HI!</span>
            <span className="block font-paaji">
              I am <br /> Shahriar Ahmed
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            FULL STACK DEVELOPER
          </p>
          <div className="flex gap-4 m-2 justify-start py-4">
            <p>
              <a href="https://www.facebook.com/shahriarhmed">
                <FaFacebook className="text-gray-700 hover:text-purple-600 rounded-full text-5xl" />
              </a>
            </p>
            <p>
              <a href="https://github.com/shahriarabiddut">
                <FaGithub className="text-gray-700 hover:text-purple-600 rounded-full text-5xl" />
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/shahriarahmedbiddut/">
                <FaLinkedin className="text-gray-700 hover:text-purple-600 rounded-full text-5xl" />
              </a>
            </p>
          </div>
          <Link
            to="projects"
            className="cursor-pointer"
            smooth={true}
            duration={1000}
          >
            <button className="px-6 py-3 bg-primary1 text-white rounded-3xl hover:bg-white hover:text-primary1 font-semibold transition">
              Visit My Works
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
