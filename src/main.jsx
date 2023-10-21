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
import Error from './components/Error/Error';




const router = createBrowserRouter([

  {
    path: '/',
    element: <App></App>,
    loader: () => fetch('https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/coffee'),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/coffee')
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/mycard",
        element: <MyCard></MyCard>,
        loader: () => fetch('https://car-brand-shop-server-i6v9pxbdj-mehraz2035.vercel.app/cart')
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
        element: <PrivateRoute><Details></Details></PrivateRoute>
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
