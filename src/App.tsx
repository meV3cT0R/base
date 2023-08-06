import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import Task from "./pages/Task"
import { ColorScheme, MANTINE_SIZES, MantineProvider } from "@mantine/core"
import { createContext, useContext, useState } from "react"
import Home from "./pages/Home"


function App() {
  const [theme,setTheme] = useState<ColorScheme>('light');
  return (
    <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        colorScheme:theme,

      }}
    >

      <RouterProvider router={
        createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<RootLayout theme={theme} setTheme={setTheme}/>}>
              <Route index element={<Home/>}/>
              <Route path="task" element={<Task/>}/>
            </Route>
          )
          )
        }/>
    </MantineProvider>
  )
}

export default App
