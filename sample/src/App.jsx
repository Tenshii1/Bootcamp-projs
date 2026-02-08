import React from 'react';
import { Link } from "react-router-dom";
import Landing from "./Landing.jsx";

function App() {
  return (
    <div className="min-h-screen bg-sky-500 flex items-center justify-center p-4 md:p-10 font-sans">
      
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl min-h-[600px]">
        
        
        <div className="relative w-full md:w-1/2 overflow-hidden">
          <img 
            src="https://img.redbull.com/images/c_crop,x_1015,y_0,h_1320,w_990/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2025/8/11/dcusojkfgapu4zxe3gtb/minecraft-landscape" 
            alt="minecraft" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-10 p-12 flex flex-col items-center text-center text-white bg-black/10 h-full">
            <h1 className="text-5xl font-serif italic mb-4 drop-shadow-md">MineServer</h1>
            <p className="text-sm font-medium max-w-xs leading-relaxed drop-shadow-sm">
              Dive in the vast world of minecraft with friends and explore the endless terrain.
            </p>
          </div>
        </div>

        
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-white">
          
          
          <div className="absolute top-8 left-[350px] text-sky-400 opacity-60">
            <img 
            src="..\src\assets\image\block.png" 
            className="w-32 h-auto"/>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold text-sky-500 tracking-tight">Welcome</h2>
            <p className="text-gray-400 font-medium mt-2">Login with Email</p>
          </div>

          <form className="space-y-6">
            
            {/* <div className="relative">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs text-sky-500 font-bold z-10">Email ID</label>
              <div className="flex items-center border-2 border-sky-100 rounded-xl px-4 py-3 focus-within:border-sky-400 transition-colors">
                <span className="text-gray-400 mr-3">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                <input type="email" placeholder="thisuix571@gmail.com" className="w-full outline-none text-gray-700 font-medium placeholder-gray-300" />
              </div>
            </div> */}

            <div className="relative">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs text-sky-500 font-bold z-10">Account</label>
              <div className="flex items-center border-2 border-sky-100 rounded-xl px-4 py-3 focus-within:border-sky-400 transition-colors">
                <span className="text-gray-400 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                </span>
                <input type="Gmail" placeholder="tcunista@gmail.com" className="w-full outline-none text-gray-700 font-medium placeholder-gray-300" />
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2.5 left-4 bg-white px-2 text-xs text-sky-500 font-bold z-10">Password</label>
              <div className="flex items-center border-2 border-sky-100 rounded-xl px-4 py-3 focus-within:border-sky-400 transition-colors">
                <span className="text-gray-400 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                </span>
                <input type="password" placeholder="••••••••••••••" className="w-full outline-none text-gray-700 font-medium placeholder-gray-300" />
              </div>
            </div>

            <div className="text-right">
              <a href="#" className="text-xs text-gray-400 hover:text-sky-500 transition-colors">Forgot your password?</a>
            </div>

            <Link to="/Landing">
              <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-black py-4 rounded-xl shadow-lg shadow-sky-200 transition-all active:scale-[0.98]">
                LOGIN
              </button>
            </Link> 
          </form>

          
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <div className="flex justify-center mb-8">
            <button className="flex items-center justify-center p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              <img 
                src="https://www.svgrepo.com/show/475656/google-color.svg" 
                className="w-6 h-6" 
                alt="Google" 
              />
              {/* Optional: Add text if you want it to be a wide button */}
              {/* <span className="ml-3 font-semibold text-gray-600">Continue with Google</span> */}
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Don't have account? <a href="#" className="text-sky-500 font-bold hover:underline">Register Now</a>
          </p>

          
        </div>
      </div>
    </div>
  );
}

export default App;