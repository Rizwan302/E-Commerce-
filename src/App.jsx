import React from "react";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Feeter from "./components/Feeter/Feeter";
import Product from "./pages/Product/Product";
import './App.scss'


const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Feeter/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
    ]
  }
]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
