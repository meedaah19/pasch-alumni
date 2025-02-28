import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import Alumni from "./pages/Alumni";
import ProfilePage from "./pages/ProfilePage";
import CommunityPage from "./pages/CommunityPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Application from "./pages/Application";
import DiscussionPage from "./pages/DiscussionPage";
import EventsPage from "./pages/EventsPage";
import JobBoard from "./pages/JobBoardPage";
import JobForm from "./pages/JobFormPage";
import EditJobForm from "./pages/EditJobForm";
import { editJobLoader } from "./loaders/editJobLoader";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {index: true, element:<HomePage/>},
      { path: 'alumni', children: [
        { index: true, element: <Alumni /> },
        { path: ':userEmail', element: <ProfilePage /> },
        {path: 'jobBoard', children: [
          {index: true,  element: <JobBoard/>},
          {path: 'edit/:id', element: <EditJobForm/>, loader: editJobLoader}
        ]},
        {path: 'jobForm', element: <JobForm/>}
      ]}, 
      {path: 'community', children: [
        {index: true, element: <CommunityPage/>},
        {path: 'discussion', element: <DiscussionPage/>},
        {path: 'events', element: <EventsPage/>},
        {path:  ':userEmail', element: <ProfilePage />}
      ]},
      {path: 'signin', element: <SignInPage/>},
      {path: 'signup', element: <SignUpPage/>},
      {path: 'application', element: <Application/>},
    ]
  }
])

function App() {
  return( 
  <RouterProvider router={router}/> 
  
  )
}

export default App;
