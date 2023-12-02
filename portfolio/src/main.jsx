import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Components/Home";
import About from "./Components/About";
import Parent from "./PropsDrilling/Parent.jsx";
import Projects from "./Components/Projects";
import ToDo from "./ToDo/ToDo.jsx";
import store from "./Redux/store.js";
import { Provider  } from "react-redux";
// import CounterApp from "./Counter/CounterApp.jsx";
import "./main.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator.jsx";
// import TaskManager from "./Counter/TaskManager/TaskManager.jsx";
import TaskManager from "./TaskManager/TaskManager.jsx";
import LetMeToss from "./CoinGame/LetMeToss.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <About name="raja" designation="software developer" tech="MERN" />
        ),
      },
      {
        path: "/login",
        element: (
          <Login/>
        ),
      },
      {
        path: "/register",
        element: (
          <Register />
        ),
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/propdrilling",
        element: <Parent />,
      },
      {
        path: "/todo",
        element: <ToDo />,
      },
      {
        path: "/task-manager",
        element: <TaskManager />,
      },
      {
        path: "/toss",
        element: <LetMeToss />,
      },
      {
        path: "/password-generator",
        element: <PasswordGenerator />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
