import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import "./index.css";
// import Home from "./Components/Home.jsx";
// import Home from "./Components/Home.jsx";
import Home from "./Components/Home.jsx";
// import ContactMe from "./Components/ContactMe.jsx";
import Skills from "./Components/Skills.jsx";
import Resume from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx";
import About from "./Components/About.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    {/* <Route path="/" element={<Home />} ></Route> */}
    <Route path="/" element={<Home />} ></Route>
    <Route path="/skills" element={<Skills />} ></Route>
    <Route path="/about" element={<About />} ></Route>
    <Route path="/projects" element={<Projects/>} ></Route>
  </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
