import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const cssClass = "cursor-pointer hover:bg-primary1 hover:text-white p-2";
  const cssActiveClass = "text-primary1";
  const links = (
    <>
      <li>
        {location.pathname == "/" ? (
          <Link
            to="home"
            className={cssClass}
            smooth={true}
            duration={1000}
            activeClass={cssActiveClass}
            spy={true}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        ) : (
          <NavLink to="/" className={cssClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
        )}
      </li>
      {location.pathname == "/" ? (
        <>
          <li>
            <Link
              to="about"
              className={cssClass}
              smooth={true}
              duration={1000}
              activeClass={cssActiveClass}
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              className={cssClass}
              smooth={true}
              duration={1000}
              activeClass={cssActiveClass}
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="service"
              className={cssClass}
              smooth={true}
              duration={1000}
              activeClass={cssActiveClass}
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              className={cssClass}
              smooth={true}
              duration={1000}
              activeClass={cssActiveClass}
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className={cssClass}
              smooth={true}
              duration={1000}
              activeClass={cssActiveClass}
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-1"
            : location.pathname != "/"
            ? "bg-primary1 p-1"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center py-3">
          <NavLink
            className={`text-3xl font-bold font-paaji ${
              isScrolled ? "text-primary1" : "text-white"
            }`}
            to={"/"}
          >
            Shahriar Ahmed
          </NavLink>
          <ul
            className={`hidden text-xl md:flex space-x-1 font-paaji ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {links}
          </ul>
          <button
            className="cursor-pointer bg-slate-100 p-2 rounded-xl md:hidden flex items-center space-x-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : <FaBars />}
          </button>
        </div>
        {/* Mobile Nav */}
        <div className="">
          <div
            className={`${
              isOpen ? "flex justify-center" : "hidden"
            } font-paaji bg-slate-300 mt-3 absolute top-16 right-0 mx-4 my-2 z-10 rounded-xl w-1/3 p-3`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-3 ">
              {links}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
