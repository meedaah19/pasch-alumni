import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import Alumni from "./pages/Alumni";
import ProfilePage from "./pages/ProfilePage";
import CommunityPage from "./pages/CommunityPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Application from "./pages/Application";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {index: true, element:<HomePage/>},
      { path: 'alumni', element: <Alumni /> }, 
      { path: 'alumni/:userEmail', element: <ProfilePage /> },
      {path: 'community', element: <CommunityPage/>},
      {path: 'signin', element: <SignInPage/>},
      {path: 'signup', element: <SignUpPage/>},
      {path: 'application', element: <Application/>}
    ]
  }
])

function App() {
  return( 
  <RouterProvider router={router}/> 
  
  )
}

export default App;
