import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <ProfileCard />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;