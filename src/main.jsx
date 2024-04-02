import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Reg from './components/reg/Reg';
import AuthProvider from './provider/AuthProvider';
import Orders from './components/oeders/Orders';
import PrivetRoutes from './components/privt/PrivetRoutes';
import Profile from './components/profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
     { path:'/',
     element: <Home></Home>
    
    
    },
     { path:'/login',
     element: <Login></Login>
    
    
    },
     { path:'/reg',
     element: <Reg></Reg>
    
    
    },
     { path:'/orders',
     element: <PrivetRoutes><Orders></Orders></PrivetRoutes>
    
    
    },
     { path:'/profile',
     element: <PrivetRoutes> <Profile></Profile> </PrivetRoutes>
    
    
    },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
