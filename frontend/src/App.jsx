import React from "react";
import Navbar from "./Components/Navbar";
import Solution from "./pages/Solution";

import Header from "./pages/Header";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Whyus from "./pages/Whyus";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Solution />
        <Services />
        <Blogs />
        <About />
        <Founder />
        <Whyus />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
