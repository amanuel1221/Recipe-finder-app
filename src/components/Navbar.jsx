import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // controls mobile menu

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      {/* 🌟 Logo Section */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="/logo.png" // 👈 put your navbar image in /public/logo.png
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <span className="text-2xl font-bold text-blue-600 hidden sm:inline">
          Recipe Finder 🍳
        </span>
      </Link>

      {/* 🧭 Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>

        {user && (
          <Link to="/favorites" className="text-gray-700 hover:text-blue-500">
            Favorites
          </Link>
        )}

        {!user ? (
          <>
            <Link to="/signin" className="text-gray-700 hover:text-blue-500">
              Sign In
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-blue-500">
              Sign Up
            </Link>
          </>
        ) : (
          <div className="flex items-center space-x-3">
            <Link to="/profile" className="flex items-center space-x-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="profile"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <span className="text-gray-700 font-medium hidden sm:inline">
                {user.displayName}
              </span>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* 🍔 Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-gray-700 focus:outline-none"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* 📱 Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 z-50 md:hidden transition-all duration-300">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500"
            onClick={toggleMenu}
          >
            Home
          </Link>

          {user && (
            <Link
              to="/favorites"
              className="text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Favorites
            </Link>
          )}

          {!user ? (
            <>
              <Link
                to="/signin"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-gray-700 hover:text-blue-500"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="profile"
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
                <span className="text-gray-700 font-medium">
                  {user.displayName}
                </span>
              </Link>

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
