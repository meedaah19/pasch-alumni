import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import Alumni from "./pages/Alumni";
import AlumniPage from "./pages/AlumniPage";
import Community from "./pages/Community";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Application from "./pages/Application";
import { AuthProvider } from "./context/AuthContext";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {index: true, element:<HomePage/>},
      { path: 'alumni', element: <Alumni /> }, 
      { path: 'alumni/:userEmail', element: <AlumniPage /> },
      {path: 'community', element: <Community/>},
      {path: 'signin', element: <SignInPage/>},
      {path: 'signup', element: <SignUpPage/>},
      {path: 'application', element: <Application/>}
    ]
  }
])

function App() {
  return( 
  <AuthProvider>
  <RouterProvider router={router}/> 
  </AuthProvider>
  
  )
}

export default App;
