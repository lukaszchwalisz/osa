import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'

import Home from "./pages/home";
import About from "./pages/about";
import Actions from "./pages/actions";
import Wiedza from "./pages/wiedza";
import Galeria from "./pages/galeria";
import Kontakt from "./pages/kontakt";

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter(

  createRoutesFromElements(

    <Route element={<Layout />}>
      <Route index path='/osa/' element={<Home/>} />
      <Route path="/osa/about" element={<About/>} />
      <Route path="/osa/projekty" element={<Actions/>} />
      <Route path="/osa/wiedza" element={<Wiedza/>} />
      <Route path="/osa/galeria" element={<Galeria/>} />
      <Route path="/osa/kontakt" element={<Kontakt/>} />
    </Route>
  

  
  ),

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
