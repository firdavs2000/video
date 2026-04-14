import { createBrowserRouter } from "react-router-dom";


import MainLayout from "../auth/MainLayout.tsx";

import Dashboard from "../components/Dashboard/Dashboard.tsx";


export const router = createBrowserRouter([
 
  {
    path: "/",
    element: (
     
        <MainLayout />
    ),
    children: [
      { path: "/", element: <Dashboard /> },
    
     
    ]
  },
  
]);
