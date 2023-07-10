import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/Contact";
import Projects from "./pages/projects";
import Footer from "./components/footer";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState("about");

  const handleNavbarClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <RingLoader
            color="#00acee"
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar onNavbarClick={handleNavbarClick} />
          {activePage === "about" && <About />}
          {activePage === "resume" && <Resume />}
          {activePage === "projects" && <Projects />}
          {activePage === "Contact" && <Contact />}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
