import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footers";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
