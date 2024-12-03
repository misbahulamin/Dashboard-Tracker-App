import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import SignUpLayout from "../../features/userManagement/pages/signUpLayout/signUpLayout";
import Home from "../../features/landingPage/pages/home/Home";
import MainDashboard from "../../features/maintenance/pages/mainDashboard/MainDashboard";
import MachineDetailsDashboard from "../../features/maintenance/pages/machineDetailsDashboard/MachineDetailsDashboard";
import About from "../../features/landingPage/pages/about/About";
import MachineFormLayout from "../../features/maintenance/pages/machineForm/MachineFormLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/", // Default route
          element: <Home></Home>, // Sign-up layout
        },
        {
          path: "/dashboard", // Default route
          element: <MainDashboard></MainDashboard>, // Sign-up layout
        },
        {
          path: "/machine-details", // Default route
          element: <MachineDetailsDashboard></MachineDetailsDashboard>, // Sign-up layout
        },
        {
          path: "/about", // Default route
          element: <About></About>, // Sign-up layout
        },
        {
          path: "/signup", // Dashboard route
          element: <SignUpLayout></SignUpLayout>, // Example new page
        },
        {
          path: "/machines", // Dashboard route
          element: <MachineFormLayout></MachineFormLayout>, // Example new page
        },
      ],
    },
  ]);