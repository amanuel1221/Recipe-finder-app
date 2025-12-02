import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); 

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const base = "px-3 py-2 rounded-md text-sm font-medium";
  const active = "text-white bg-blue-600";
  const inactive = "text-gray-700 hover:text-blue-500";

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <NavLink to="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-600 hidden sm:inline">
          Recipe Finder 🍳
        </span>
      </NavLink>

      <div className="hidden md:flex items-center space-x-6">
        <NavLink to="/" end className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
          Home
        </NavLink>

        {user && (
          <NavLink to="/favorites" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
            Favorites
          </NavLink>
        )}

        <NavLink to="/about" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
          About
        </NavLink>

        {!user ? (
          <>
            <NavLink to="/signin" className={({ isActive }) => `${base} ${isActive ? active : inactive}`}>
              Sign In
            </NavLink>
            <NavLink to="/signup" className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
              Sign Up
            </NavLink>
          </>
        ) : (
          <div className="flex items-center space-x-3">
            <NavLink to="/profile" className="flex items-center space-x-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <span className="text-gray-700 font-medium hidden sm:inline">
                {user.displayName}
              </span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 z-50 md:hidden transition-all duration-300">
          <NavLink to="/" end className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>
            Home
          </NavLink>

          {user && (
            <NavLink to="/favorites" className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>
              Favorites
            </NavLink>
          )}

          <NavLink to="/about" className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>
            About
          </NavLink>

          {!user ? (
            <>
              <NavLink to="/signin" className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>
                Sign In
              </NavLink>
              <NavLink to="/signup" className="text-gray-700 hover:text-blue-500" onClick={toggleMenu}>
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile" className="flex items-center space-x-2" onClick={toggleMenu}>
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="profile"
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
                <span className="text-gray-700 font-medium">
                  {user.displayName}
                </span>
              </NavLink>

              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
