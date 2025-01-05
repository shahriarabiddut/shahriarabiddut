import React from "react";
import api from "../assets/imgs/api.webp";
import backend from "../assets/imgs/backend.webp";
import deployment from "../assets/imgs/deployment.webp";
import frontend from "../assets/imgs/frontend.webp";
const Services = () => {
  return (
    <>
      <section id="service" className="py-16 bg-gray-50 ">
        <div className="container text-center my-10 md:my-28 w-10/12 mx-auto">
          <p className="text-xl text-gray-500">What I Do ?</p>
          <h6 className="text-4xl font-bold mb-6 font-paaji text-primary1">
            Services
          </h6>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 0 flex flex-1">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4">
                <img
                  src={frontend}
                  alt="Frontend and Backend Development"
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h6 className="text-xl font-semibold font-paaji text-primary1">
                  Frontend Development
                </h6>
                <p className="text-gray-600 text-justify">
                  Build modern, responsive, and user-friendly interfaces using
                  React, Tallwind, and other frontend technologies.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 0 flex flex-1">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4">
                <img
                  src={backend}
                  alt="Backend Development"
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h6 className="text-xl font-semibold font-paaji text-primary1">
                  Backend Development
                </h6>
                <p className="text-gray-600 text-justify">
                  Create robust and scalable server-side applications with
                  Node.js, Express, Laravel, PHP and database technologies.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 0 flex flex-1">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4">
                <img
                  src={api}
                  alt="API Integration"
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h6 className="text-xl font-semibold font-paaji text-primary1">
                  API Development & Integration
                </h6>
                <p className="text-gray-600 text-justify">
                  Design and implement APIs for seamless communication between
                  client and server.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 0 flex flex-1">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4">
                <img
                  src={deployment}
                  alt="Deployment & Maintenance"
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h6 className="text-xl font-semibold font-paaji text-primary1">
                  Deployment & Maintenance
                </h6>
                <p className="text-gray-600 text-justify">
                  Deploy full-stack applications to cloud platforms and provide
                  ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
