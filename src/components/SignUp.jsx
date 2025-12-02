import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    if (pwd.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(pwd)) return "Password must contain at least 1 uppercase letter";
    return null;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }


    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }


    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success(" Congratulation u create sucessfully "),{
        duration:3000,
        style:{
          background:"blue",
          color:"green"
        }
      };
      navigate("/"); 
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Email already in use. Try signing in.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
        toast.error(" sorry u couldnot create the page");
      } else {
        setError(err.message);
        
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded mb-4"
          required
        />

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition hover:cursor-pointer"
        >
          Sign Up
        </button>
        <Link to="/signin" className="mt-2 mx-auto "> Already have an account ?<span Link to="/signin" className="text-blue-700 font-bold m-1">Sign In </span> </Link>
      </form>
    </div>
  );
};

export default SignUp;
