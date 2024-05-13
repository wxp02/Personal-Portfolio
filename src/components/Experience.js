import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="flex flex-col items-center w-full mb-20">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experience
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base text-center">
            I have completed 4 co-ops so far.
          </p>
        </div>
        <div className="flex flex-col items-center w-full">
          {experiences.map((exp, index) => (
            // Adjust width of experience box
            <div key={index} className="lg:w-2/3 w-full flex mb-10">
              <div className="flex flex-row items-start w-full bg-gray-800 text-white rounded-lg p-4 shadow-md">
                <img
                  src={exp.logoPath}
                  alt="company logo"
                  className="h-12 w-12 object-contain mr-8"
                />
                <div className="flex-grow">
                  <h2 className="text-lg title-font font-medium mb-1">
                    {exp.title} -{" "}
                    <span className="text-gray-400">{exp.type}</span>
                  </h2>
                  <p className="text-white mb-3">{exp.period}</p>
                  <p className="mb-4">{exp.description}</p>
                  <p className="italic">{exp.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
