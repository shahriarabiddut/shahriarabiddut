import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../assets/study.json";

const EducationTimeline = () => {
  const educationData = [
    {
      year: "2024",
      title: "Bachelor of Science in Engineering (B.Sc.)",
      subtitle: "Computer Science & Engineering",
      institute: "Jashore University of Science & Technology",
      location: "Jashore,Khulna",
      result: "3.00",
    },
    {
      year: "2017",
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Science",
      institute: "Sonar Bangla College",
      location: "Burichang,Cumilla",
      result: "5.00",
    },
    {
      year: "2015",
      title: "Secondary School Certificate (SSC)",
      subtitle: "Science",
      institute: "Muradnagar D.R. Govt. High School",
      location: "Muradnagar,Cumilla",
      result: "5.00",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-6 mx-auto">
        <p className="text-xl text-gray-500 my-4">Qualifications I Have!</p>
        <h2 className="text-4xl font-semibold font-paaji text-primary1  mb-20">
          Education
        </h2>
        <div className="relative border-l-4 border-gray-300">
          {educationData.map((item, index) => (
            <div key={index} className="mb-10 ml-6 flex items-start">
              {/* Year Circle */}
              <div className="relative flex-shrink-0 w-12 h-12 p-10 bg-gray-800 text-white flex items-center justify-center rounded-full font-bold text-lg shadow-md">
                {item.year}
              </div>
              {/* Timeline Content */}
              <div className="ml-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <h4 className="text-gray-700">{item.subtitle}</h4>
                <p className="text-gray-600">{item.institute}</p>
                <p className="text-gray-600">{item.location}</p>
                {/* <p className="text-gray-600">Result: {item.result}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden justify-center items-center md:flex">
        <Lottie
          loop
          animationData={animationData}
          play
          className="w-full max-w-md h-auto"
        />
      </div>
    </div>
  );
};

export default EducationTimeline;
