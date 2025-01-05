import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import Project from "../pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: () => fetch("/projects.json"),
  },
  {
    path: "/project/:id",
    element: <Project />,
    errorElement: <ErrorPage />,
    loader: () => {
      const response = fetch("/projects.json");
      return response;
    },
  },
]);

export default router;
