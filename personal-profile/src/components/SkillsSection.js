// src/components/SkillsSection.js
import React from "react";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const skillsData = [
  {
    title: "UI/UX Design",
    description: "Figma, Sketch, Prototyping, Usability Testing.",
    Icon: Palette,
    bg: "bg-[#4300FF]",
  },
  {
    title: "Front-End Development",
    description: "React, Next.js, JavaScript, HTML, CSS, Tailwind.",
    Icon: Code,
    bg: "bg-[#0065F8]",
  },
  {
    title: "Mobile Development",
    description: "React Native, Flutter, Basic iOS/Android principles.",
    Icon: Smartphone,
    bg: "bg-[#00CAFF]",
  },
  {
    title: "Team Collaboration & Agile Workflow",
    description:
      "Collaborative in cross-functional teams using GitHub, Trello, and agile methods to ensure efficient project delivery.",
    Icon: Zap,
    bg: "bg-[#00FFDE]",
  },
];

function SkillCard({ title, description, Icon, bg }) {
  return (
    <div
      className={`p-8 rounded-2xl shadow-lg border border-border-gray ${bg} hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center`}
    >
      {/* Icon */}
      <div className="p-4 rounded-full bg-white shadow-md flex items-center justify-center mb-6">
        <Icon size={40} className="text-[#4300FF]" />
      </div>

      {/* Text */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-base text-white/90 leading-relaxed">{description}</p>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-white px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-bold text-dark-blue mb-4">
            My Skills
          </h2>
          <p className="text-lg text-grayish-blue max-w-2xl mx-auto">
            These are the technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
