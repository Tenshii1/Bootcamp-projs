import React from "react";

function Navigation() {
    return(
        <div className="menu fixed top-3 w-full max-w-4xl">
        <nav className="bg-[rgb(20_73_98)] rounded-md shadow-md p-4 mb-8">
          <ul className="flex justify-center gap-6 space-x-8 text-lg font-semibold text-white">
            <li>
              <a href="#home" className="hover:bg-[#4E8397] hover:text-white p-2 rounded-md">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:bg-[#4E8397] hover:text-white p-2 rounded-md">About</a>
            </li>
            <li>
              <a href="#services" className="hover:bg-[#4E8397] hover:text-white p-2 rounded-md">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:bg-[#4E8397] hover:text-white p-2 rounded-md">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Navigation;
