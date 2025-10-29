import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import Ecoscale from "../assets/images/logo_EcoScale.png";
import FeelGo from "../assets/images/logo_FeelGo.jpg";
import GaweKuy from "../assets/images/logo_GaweKuy.png";

// === PROJECT LIST ===
const projects = [
  {
    id: 1,
    title: "Eco Scale – Smart Waste Management System",
    category: "IoT & Front-End Development",
    image: Ecoscale,
    link: "https://www.instagram.com/pkmki_ecoscale?igsh=c3BldXR5ODhhbXBz",
  },
  {
    id: 2,
    title: "GaweKuy – Job Finder Web App",
    category: "Full-Stack Development",
    image: GaweKuy,
    link: "https://gawekuy-freelance.vercel.app/",
  },
  {
    id: 3,
    title: "FeelGo – Emotion-Based Travel App Concept",
    category: "UI/UX Design",
    image: FeelGo,
    link: "https://www.figma.com/proto/yrWIZ7Z36I4O2SucXMqyEJ/PROTOTYPE-Buat-Calon-user?page-id=6104%3A2631&node-id=6159-8523&p=f&viewport=161%2C115%2C0.06&t=9VfPJVskD6haqHKn-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6159%3A8529&show-proto-sidebar=1",
  },
];

// === CATEGORY FILTER ===
const categories = ["All", "UI/UX Design", "Full-Stack Development", "IoT & Front-End Development"];

function ProjectCard({ title, category, image, link }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl bg-white border border-border-gray transform hover:scale-[1.02] transition-transform duration-300">
      {/* Image Container */}
      <div className="h-56 w-full overflow-hidden flex items-center justify-center bg-gray-50">
        <img
          src={image}
          alt={`Portfolio Project: ${title}`}
          className="max-h-56 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="p-6">
        <span className="text-sm font-semibold text-primary-purple mb-1 block">
          {category}
        </span>
        <h3 className="text-xl font-bold text-dark-blue mb-4">{title}</h3>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-purple hover:text-primary-pink transition-colors font-semibold"
        >
          View Project <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#F9F9FB] px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-bold text-dark-blue mb-4">
            My Recent Work
          </h2>
          <p className="text-lg text-grayish-blue max-w-2xl mx-auto">
            Selected projects that showcase my expertise in design and development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-base font-semibold transition-all duration-200 
                ${
                  activeCategory === cat
                    ? "bg-btn-gradient text-white shadow-lg"
                    : "bg-white text-grayish-blue border border-border-gray hover:border-primary-purple"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;