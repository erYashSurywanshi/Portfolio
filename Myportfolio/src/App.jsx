import React from "react";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contect";
import { FloatingNavDemo } from "./components/sections/NEvbar";
import { ThreeDMarqueeDemo } from "./components/sections/Project";
import { StickyScrollRevealDemo } from "./components/sections/content";
import { BackgroundBoxesDemo } from "./components/Models/TechLogos/BackgroundDemo";

const App = () => {
  return (
    <main className="relative">
      {/* Full body background */}
      <div className="fixed inset-0 -z-10 w-full">
        <BackgroundBoxesDemo />
      </div>

      {/* Foreground Content */}
      <FloatingNavDemo />
      <section id="hero">
        <Hero />
      </section>
      <section id="content">
        <StickyScrollRevealDemo />
      </section>
      <section id="tech">
        <TechStack />
      </section>
      <section id="projects">
        <ThreeDMarqueeDemo />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default App;
