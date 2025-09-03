import React from "react";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contect";
import { FloatingNavDemo } from "./components/sections/NEvbar";
import { ThreeDMarqueeDemo } from "./components/sections/Project";
import { StickyScrollRevealDemo } from "./components/sections/content";

const App = () => {
  return (
    <main>
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
