import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.tsx";

import MainLayout from "../auth/MainLayout.tsx";
import AuthLayout from "../auth/AuthLayout.tsx";

import AuthLogin from "../pages/AuthLogin.tsx";
import Dashboard from "../components/Dashboard/Dashboard.tsx";


export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <AuthLogin /> }
    ]
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Dashboard /> },
    
     
    ]
  },
  
]);
