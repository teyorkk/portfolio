import Hero from "./components/Hero";
import { About } from "./components/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact";
import BackgroundEffects from "./components/Ui/BackgroundEffects";
import Services from "./components/Services/Services";

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
