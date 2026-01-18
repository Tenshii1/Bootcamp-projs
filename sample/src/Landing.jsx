// src/Landing.jsx
import React from "react";
import LandBG from "./assets/image/harbor.jpg";
import Navigations from "./components/Navigation"
import Footer from "./components/Footer";

function Landing() {
  return (
    
    <div className="flex w-screen items-center flex-col">
    <Navigations />
      <div
      className="p-8 text-center w-full min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${LandBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      



    </div>
    <Footer />
    </div>
  ); 
}

export default Landing;
