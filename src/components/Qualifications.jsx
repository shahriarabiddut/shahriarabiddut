import React from "react";
import SkillsSlider from "./SkillSlider";
import EducationTimeline from "./EducationTimeline ";

const Qualifications = () => {
  return (
    <section id="skills" className="space-y-16 ">
      <div className="w-10/12 mx-auto mt-10">
        <SkillsSlider />
        <EducationTimeline />
      </div>
    </section>
  );
};

export default Qualifications;
