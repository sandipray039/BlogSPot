// index.tsx (entry point)
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Login from "./pages/Login";
import OneBlog from "./pages/OneBlog";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BlogProvider } from "./Context/BlogContext";
import Home from "./pages/Home";
import './App.css'
import { AuthProvider } from "./Context/AuthContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/", element:<Home/> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/:id", element: <OneBlog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/dashboard", element: <Dashboard /> },
        { path: "/privacy-policy", element: <PrivacyPolicy/> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BlogProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </BlogProvider>
  </React.StrictMode>
);
