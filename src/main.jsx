import React from 'react';
import ReactDOM from 'react-dom/client'
import Layout from './components/layout.jsx'

import Home from "./pages/home";
import About from "./pages/about";
import Actions from "./pages/actions";
import Wiedza from "./pages/wiedza";
import Galeria from "./pages/galeria";
import Kontakt from "./pages/kontakt";
import Form from "./pages/form";

import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom';


const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "about",
        element: <About />,

      },

      {
        path: "projekty",
        element: <Actions />,

      },
      {
        path: "wiedza",
        element: <Wiedza />,
        
      },
      {
        path: "galeria",
        element: <Galeria />,
        
      },
      {
        path: "kontakt",
        element: <Kontakt />,
        
      },
      {
        path: "form",
        element: <Form />,
        
      },

    ],

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
)
