import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
