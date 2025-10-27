import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// IMPORT the necessary Router tools
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

import App from './App.jsx';
import LandingPage from './Landing.jsx'; // IMPORT your destination component

// 3. DEFINE the routes (URL paths mapped to components)
const router = createBrowserRouter([
  {
    path: "/",         // The root URL (yourdomain.com/)
    element: <App />,  // Renders the Login component
  },
  {
    path: "/Landing",  // The path your <Link to="/Landing"> points to
    element: <LandingPage />, // Renders the LandingPage component
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 4. RENDER the app using the RouterProvider */}
    <RouterProvider router={router} /> 
  </StrictMode>,
);