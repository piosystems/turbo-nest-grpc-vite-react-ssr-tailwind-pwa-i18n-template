import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home";
import Users from "./components/Users";
import { ThemeProvider } from "@/components/theme-provider"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const baseUrl = "/";
  //create a react query client at the top
  // Create a client
  const queryClient = new QueryClient()

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path={`${baseUrl}`} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="view-users" element={<Users />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
