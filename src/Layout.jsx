import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Home/> */}
      {/* <About/>
      <Skills/>
      <Projects/>
      <Experience/> */}

      <Footer />
    </>
  );
};

export default Layout;
