import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Recipe Finder 🍳
      </Link>

      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>

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
              <span className="text-gray-700 font-medium">
                {user.displayName || user.email.split("@")[0]}
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
    </nav>
  );
};

export default Navbar;
