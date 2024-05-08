import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Home1 from "pages/Home1";
import Projects from "pages/Projects";
import About from "pages/About";
import Contacts from "pages/Contacts";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "home1",
      element: <Home1 />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contacts",
      element: <Contacts />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
