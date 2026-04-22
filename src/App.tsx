import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footers from "./components/Footers.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experience />
      <Contact />
      <Footers />
    </>
  );
}
