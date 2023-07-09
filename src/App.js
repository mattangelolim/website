import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import About from "./pages/about";
import Footer from "./components/footer";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false);

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
          <Navbar />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
