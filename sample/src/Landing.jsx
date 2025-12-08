// src/Landing.jsx
import React from "react";
import LandBG from "./assets/image/harbor.jpg";

function Landing() {
  return (
    <div
      className="p-8 text-center min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${LandBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="menu fixed top-3 w-full max-w-4xl">
        <nav className="bg-white-5 rounded-md shadow-md p-4 mb-8">
          <ul className="flex justify-center gap-6 space-x-8 text-lg font-semibold text-emerald-700">
            <li>
              <a href="#home" className="hover:bg-blue-400 hover:text-white p-2 rounded-md">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:bg-blue-400 hover:text-white p-2 rounded-md">About</a>
            </li>
            <li>
              <a href="#services" className="hover:bg-blue-400 hover:text-white p-2 rounded-md">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-blue-400 hover:text-white p-2 rounded-md">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <h1 className="text-5xl font-extrabold text-white shadow-lg border-2 p-16 rounded-md bg-black/40">
        Welcome to the Landing Page! 🚀
      </h1>

    </div>
  ); 
}

export default Landing;
