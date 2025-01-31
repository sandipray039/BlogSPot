import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, RouterProvider,createBrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { Home } from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import OneBlog from "./pages/OneBlog.jsx";


const router=createBrowserRouter([
  {
    path:"/", element:<App/>,
    children:[
      {
        path:"/", element:<Home/>
      },
      {
        path:"/blogs", element:<Blogs/>
      },
      {
        path: "/blogs/:id", element: <OneBlog />  
      },
      {
        path:"/contact", element:<Contact/>
      },
      {
        path:"/services", element:<Services/>
      },
      {
        path:"/about", element:<About/>
      },
      {
        path:"/login", element:<Login/>
      },

    ]
  }
])

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>
);
