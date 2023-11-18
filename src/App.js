import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLogin from '../src/components/admin/adminLogin';
import DashBoard from '../src/components/admin/dashBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import BuildProfile from './components/buildProfile';
import ProfileForm from './components/profileForm';
import UploadPic from './components/uploadPic';
import Start from './components/start';
import Animation from './components/animation';



function App() {
   const router = createBrowserRouter([
   {
    path:"/",
    element: <Start/>
   },
   {
    path: "/animation",
    element: <Animation/>
   },
  
    { 
      path:"/profile=/:userId",
      element:<BuildProfile/>,
    },
   {
     path: "/profile/edit/:userId",
     element: <ProfileForm/>
   },

      {
        path:"/admin/login",
        element:<AdminLogin/>
      },
      {
        path: "/admin/dashboard",
        element: <DashBoard/>
      },
      {
        path: "/profile/edit-pic",
        element: <UploadPic/>
      }
     
   ])
  return (
    <div className="App">
             <RouterProvider router={router}/>
    </div>
  );
}

export default App;