import React from "react";
import { skills } from "../data";
import { StarIcon } from "@heroicons/react/solid";

export default function Skills() {
  const renderSkillBadge = (skill) => (
    <div key={skill} className="p-2">
      <div className="bg-gray-800 rounded flex items-center p-4 h-full justify-center">
        <img
          alt={`${skill} icon`}
          src={`./software/${skill.toLowerCase()}.svg`}
          className="w-6 h-6 flex-shrink-0 mr-4"
        />
        <span className="title-font font-medium text-white">{skill}</span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto">
        {/* Skills Heading */}
        <div className="text-center mb-20">
          <StarIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            These are the tools and technologies I have learnt so far.
          </p>
        </div>

        {/* Languages Section */}
        <div className="mb-10">
          <h2 className="text-center title-font font-medium text-white tracking-widest text-md mb-4">
            Languages
          </h2>
          <div className="flex flex-wrap justify-center -mx-2">
            {skills.languages.map(renderSkillBadge)}
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="mb-10">
          <h2 className="text-center title-font font-medium text-white tracking-widest text-md mb-4">
            Frameworks
          </h2>
          <div className="flex flex-wrap justify-center -mx-2">
            {skills.frameworks.map(renderSkillBadge)}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mb-10">
          <h2 className="text-center title-font font-medium text-white tracking-widest text-md mb-4">
            Technologies
          </h2>
          <div className="flex flex-wrap justify-center -mx-2">
            {skills.technologies.map(renderSkillBadge)}
          </div>
        </div>
      </div>
    </section>
  );
}
