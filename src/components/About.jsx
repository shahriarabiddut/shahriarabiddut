import React from "react";
import cv from "../assets/resume.pdf";
import user from "../assets/imgs/user.png";

const About = () => {
  return (
    <>
      <section id="about" className="z-20 bg-gray-50 ">
        <div className="flex flex-col md:flex-row  md:py-20 py-10 items-center justify-center gap-10 w-10/12 mx-auto">
          <div className="w-full md:w-1/2 rounded-xl flex justify-center">
            <img src={user} className="w-64 h-64 object-cover" alt="About Me" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-start md:items-start gap-3">
            <p className="text-gray-500 my-2 font-sans">Who Am I ?</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 font-paaji text-primary1">
              About Me
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I am a tech-savvy individual with a BSc. Engineering degree in
              Computer Science and Engineering. With expertise in
              problem-solving, decision-making, and project management, I excel
              in fast-paced environments. I possess strong analytical skills,
              effective communication, and presentation abilities, making me a
              valuable team player. <br />
              <br /> My goal is to contribute to a progressive organization,
              applying my skills to drive success while continuously learning
              and staying ahead of industry trends. Outside of work, I enjoy
              reading, traveling, volunteering, and exploring new technologies.
            </p>
            <a href={cv} download className="">
              <button className="px-6 my-4 py-3 bg-primary1 text-white rounded-3xl hover:bg-white hover:text-primary1 font-semibold transition">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
