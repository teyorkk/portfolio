import Hero from "./components/Hero";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  return (
    <>
      <BackgroundEffects />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
