import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Register from './Pages/Register/Register.jsx';
import AddNewHouse from './Pages/Dashboard/AddNewHouse/AddNewHouse.jsx';
import AllHouse from './Pages/Dashboard/AllHouse/AllHouse.jsx';
import UpdateHouse from './Pages/Dashboard/UpdateHouse/UpdateHouse.jsx';
import Home from './Pages/HomePage/Home/Home.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import Login from './Pages/Login/Login.jsx';
import DashboardOverview from './Pages/Dashboard/Dashbord/DashboardOverview.jsx';
import HouseBooking from './Pages/Dashboard/HouseBooking/HouseBooking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: 'update/:id',
        element: <UpdateHouse />,
        loader: ({ params }) => fetch(`https://house-hunter-server-production-10e7.up.railway.app/allHouse/${params.id}`)
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/overview",
        element: <DashboardOverview />
      },
      {
        path: "/dashboard/addNewHouse",
        element: <AddNewHouse />
      },
      {
        path: "/dashboard/allHouse",
        element: <AllHouse />
      },
      {
        path: "/dashboard/houseBooking",
        element: <HouseBooking />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)