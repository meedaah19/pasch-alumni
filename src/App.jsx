import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import Alumni from "./pages/Alumni";
import Community from "./pages/Community";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {index: true, element:<HomePage/>},
      {path: 'alumni', element: <Alumni/>},
      {path: 'community', element: <Community/>}
    ]
  }
])

function App() {
  return( <>
  <RouterProvider router={router}/> 
  </>
  )
}

export default App;
