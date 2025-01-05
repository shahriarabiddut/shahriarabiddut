import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Qualifications from "./components/Qualifications";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Qualifications />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
