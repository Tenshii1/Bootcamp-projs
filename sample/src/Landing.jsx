// src/LandingPage.jsx
import React from 'react';

function Landing() {
  return (
    <div className=" bg-blue-300 p-8 text-center min-h-screen flex flex-col items-center justify-center">
      <div class="menu" className='fixed top-3 w-full max-w-4xl'>
        <nav className="bg-white rounded-md shadow-md p-4 mb-8">
          <ul className="flex justify-center gap-15 space-x-8 text-lg font-semibold text-emerald-700">
            <li><a href="#home" className="hover:text-emerald-900">Home</a></li>
            <li><a href="#about" className="hover:text-emerald-900">About</a></li>
            <li><a href="#services" className="hover:text-emerald-900">Services</a></li>
            <li><a href="#contact" className="hover:text-emerald-900">Contact</a></li>
          </ul>
        </nav>
      </div>
      <h1 className="text-5xl font-extrabold text-emerald-700 flex justify-center items-center bg-transparent shadow-lg border-2 w-200 h-50  p-16 rounded-md focus:outline-none">
        Welcome to the Landing Page! 🚀
      </h1>
    </div>
  );
}

export default Landing;