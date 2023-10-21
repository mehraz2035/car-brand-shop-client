import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './components/AddProduct/AddProduct.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';
import Home from './components/Home/Home.jsx';
import MyCard from './components/MyCard/MyCard.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvidres from './providres/AuthProvidres.jsx';
import Cars from './components/AllCarBrand/Cars.jsx';
import Details from './components/Details.jsx';
import PrivateRoute from './providres/PrivateRoute.jsx';




const router = createBrowserRouter([

  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee'),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/mycard",
        element: <MyCard></MyCard>,
        loader: () => fetch('http://localhost:5000/cart')
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>
      },
      {
        path: "/cars/:brand",
        element: <Cars></Cars>
      },
      {
        path: "/details/:id",
        element:<Details></Details>
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvidres>
      <RouterProvider router={router} />
    </AuthProvidres>
  </React.StrictMode>,
)
