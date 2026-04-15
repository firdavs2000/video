import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../auth/MainLayout.tsx";
import Dashboard from "../components/Dashboard/Dashboard.tsx";
import FilmPage from "../page/FilmPage/House.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "films", element: <FilmPage /> },
    ],
  },
]);

