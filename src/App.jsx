import "./App.css";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* background image section */}
      <div className="w-screen h-full top-0 left-0 fixed border">
        <img src="/assets/sky.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="w-full absolute top-0 left-0  h-screen  overflow-x-hidden">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
