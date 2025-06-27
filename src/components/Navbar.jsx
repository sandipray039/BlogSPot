import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const items = [
    { path: "/", link: "Home" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="bg-black text-white w-full py-4 fixed top-0 left-0 right-0 z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center px-5 lg:px-10">
        {/* Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a href="/" className="text-2xl font-bold text-white">
            Blog<span className="text-orange-500">Spot</span>
          </a>
          {/* Mobile Menu Icon */}
          <button className="text-3xl lg:hidden" onClick={toggleMenu}>
            <MdOutlineMenu />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10  justify-center items-center text-white">
          {items.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className="hover:text-orange-500"
              >
                <span style={{ fontWeight: 600, fontSize: "2.5vh" }}>{item.link}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section: Login / Logout / Dashboard */}
        <div className="hidden lg:flex items-center gap-2">
          {token ? (
            <>
              {location.pathname !== "/dashboard" && (
                <NavLink
                  to="/dashboard"
                  className="bg-blue-600 py-2 px-4 ml-3 rounded-md text-white"
                >
                  Go to Dashboard
                </NavLink>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-600 py-2 px-4 ml-3 rounded-md text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="bg-orange-600 py-2 px-4 ml-3 rounded-md text-white"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menu && (
        <div className="lg:hidden bg-white w-full shadow-lg z-40">
          <ul className="flex flex-col text-black py-3 px-5">
            {items.map((item) => (
              <li key={item.path} className="py-2 border-b border-gray-300">
                <NavLink
                  to={item.path}
                  className="block"
                  onClick={() => setMenu(false)}
                >
                  {item.link}
                </NavLink>
              </li>
            ))}
            {token ? (
              <>
                {location.pathname !== "/dashboard" && (
                  <li className="py-2 border-b border-gray-300">
                    <NavLink
                      to="/dashboard"
                      className="block"
                      onClick={() => setMenu(false)}
                    >
                      Go to Dashboard
                    </NavLink>
                  </li>
                )}
                <li className="py-2">
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenu(false);
                    }}
                    className="w-full text-left text-red-600"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="py-2">
                <NavLink
                  to="/login"
                  className="block text-orange-600"
                  onClick={() => setMenu(false)}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
