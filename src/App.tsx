import Hero from "./components/Hero";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import BackgroundEffects from "./components/BackgroundEffects";
import Services from "./components/Services";

function App() {
  return (
    <>
      <BackgroundEffects />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
