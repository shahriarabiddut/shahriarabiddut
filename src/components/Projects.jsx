import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Projects = () => {
  const projects = useLoaderData();
  console.log(projects);

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container text-center my-4 md:my-14 w-10/12 mx-auto">
        <p className="text-xl text-gray-500">What I Did ?</p>
        <h6 className="text-4xl font-bold mb-6 text-primary">Projects</h6>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="py-3 relative">
                <img src={project.image} className="h-64" alt={project.name} />
                <div className="absolute flex gap-1 flex-wrap bottom-0 right-2">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="badge badge-accent text-gray-600"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </figure>
              <div className="card-body">
                <h2 className="text-2xl font-semibold text-primary1 text-center">
                  {project.name}
                </h2>
                <p className="text-gray-600 text-justify">
                  {project.description}
                </p>
                <Link
                  to={`/project/${project.id}`}
                  className="px-6 py-3 bg-primary1 text-white rounded-3xl hover:bg-white hover:text-primary1 font-semibold transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
