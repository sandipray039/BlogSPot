import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { MdOutlineMenu } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const {token,logout}=useAuth();
  const navigate=useNavigate();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const items = [
    { path: "/", link: "Home" },
    
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];
  const handleLogout=()=>{
    logout();
    navigate("/login");

  }

  return (
    <header className="bg-black text-white w-full py-4 fixed top-0 left-0 right-0 z-10">
      {/* Navbar container */}
      <div className="flex justify-between items-center px-5 lg:px-10">
        {/* Logo & Menu (for small & medium screens) */}
        <div className="flex items-center justify-between w-full lg:w-auto ">
          <a href="/" className="text-2xl  font-bold text-white">
            Blog<span className="text-orange-500">Spot</span>
          </a>

          
        </div>

        {/* Navigation Links (hidden on small screens, visible on large screens) */}
        <ul className="hidden lg:flex gap-10 w-[50%] justify-center align-item-center text-white">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className="hover:text-orange-500">
            <span style={{color:'white',fontWeight:600,fontSize:'2.5vh'}}>{item.link} </span> 
              </NavLink>
            </li>
          ))}
        </ul>
      
     
 {/* Social Links & Login Button (visible on all screens) */}
<div className="flex items-center gap-2">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 py-2 px-4 ml-3 rounded-md cursor-pointer text-white"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="bg-orange-600 py-2 px-4 ml-3 rounded-md cursor-pointer text-white"
            >
              Login
            </NavLink>
          )}
        </div>
        {/* Menu Icon (visible only on small & medium screens) */}
        <button className=" ml-2 lg:hidden text-3xl" onClick={toggleMenu}>
            <MdOutlineMenu />
          </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden ${menu ? "block" : "hidden"} bg-white absolute top-[100%] right-0 w-2/3 shadow-lg z-20`}
      >
      
        <ul className="flex flex-col text-black py-3">
          {items.map((item) => (
            <li key={item.path} className="px-5 py-2 hover:bg-orange-500">
              <NavLink to={item.path} className="block">
              {item.link} 
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
