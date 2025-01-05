import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { FaCheck, FaCircle } from "react-icons/fa";

export default function Project() {
  const projectData = useLoaderData();
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));
  console.log(project);

  return (
    <>
      <Navbar />
      <section className="bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 py-16 md:py-24  w-10/12 mx-auto items-center justify-center">
          <div>
            <img src={project.image} className="w-full " alt={project.name} />
          </div>
          <div className="card-body">
            <h2 className="text-3xl text-primary1 font-paaji text-center">
              {project.name}
            </h2>
            <p className="text-gray-600 text-justify">{project.briefDetails}</p>
            <div className="card-actions justify-between mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-500 hover:bg-primary1 text-white p-2 rounded-2xl text-lg font-paaji"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-red-600 text-white p-2 rounded-2xl text-lg font-paaji"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-200">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 w-10/12 mx-auto items-center justify-center">
          <div className="">
            <h2 className="text-3xl font-paaji font-semibold">Features</h2>
            <table className="table my-3">
              <tbody>
                {project.features.map((feature, featureIndex) => (
                  <tr key={featureIndex}>
                    <td className="text-lg">
                      <FaCheck className="text-green-400" />
                    </td>
                    <td className="text-lg">{feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="">
            <h2 className="text-3xl font-paaji font-semibold">
              Technologies Used
            </h2>
            <table className="table my-3">
              <tbody>
                {project.technologies.map((tech, techIndex) => (
                  <tr key={techIndex}>
                    <td className="flex items-center gap-4">
                      <FaCircle className="text-green-400" /> {tech}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
