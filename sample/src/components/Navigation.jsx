import React from "react";

function Navigation() {
    return(
        <div className="menu fixed top-3 w-full max-w-4xl">
        <nav className="bg-sky-500/20 backdrop-blur-lg 
                border-b border-sky-300/30 rounded-md shadow-lg p-4 mb-8">
          <ul className="flex justify-center gap-6 space-x-8 text-lg font-semibold text-white tracking-wide">
            <li>
              <a href="#home" className="hover:bg-[#4E8397] hover:text-white p-2 rounded-md transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:bg-[#4E8397] hover:text-white p-2 rounded-md transition">About</a>
            </li>
            <li>
              <a href="#services" className="hover:bg-[#4E8397] hover:text-white p-2 rounded-md transition">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-[#4E8397] hover:text-white p-2 rounded-md transition">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Navigation;
