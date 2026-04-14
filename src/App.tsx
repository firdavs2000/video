import React from "react"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import { useQuery } from "@tanstack/react-query"
import { getTrendingTV } from "./services/api"
import { router } from "./app/router"

const App: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getTrendingTV,
  })

  if (isPending) return "Loading..."
  if (error) return "Error"

  return (
    <>
      <RouterProvider router={router} />
    
    </>
  )
}

export default App
