import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1A237E] text-white p-4 flex justify-between items-center">
      <div className="font-bold text-lg">VerifySpace</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/verify">Verify</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
