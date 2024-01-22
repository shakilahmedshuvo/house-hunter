import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/HomePage/Login/Login.jsx';
import Dashboard from './Layout/dashboard.jsx';
import AddNewHouse from './Pages/Dashboard/AddNewHouse/AddNewHouse.jsx';
import AllHouse from './Pages/Dashboard/AllHouse/AllHouse.jsx';
import UpdateHouse from './Pages/Dashboard/UpdateHouse/UpdateHouse.jsx';

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
        path: 'update/:id',
        element: <UpdateHouse />,
        loader: ({ params }) => fetch(`http://localhost:5000/allHouse/${params.id}`)
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/addNewHouse",
        element: <AddNewHouse />
      },
      {
        path: "/dashboard/allHouse",
        element: <AllHouse />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)