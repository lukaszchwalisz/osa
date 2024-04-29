import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Layout from './components/Layout.jsx'

import Home from "./pages/home";
import About from "./pages/about";
import Actions from "./pages/actions";
import Wiedza from "./pages/wiedza";
import Galeria from "./pages/galeria";
import Kontakt from "./pages/kontakt";

import Cele from './pages/About/cele.jsx';
import Konfg from './pages/About/konfg.jsx';
import Konfr from './pages/About/konfr.jsx';

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';



const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/osa' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path="about" element={<About/>} />
        <Route path='cele' element={<Cele/>} />
        <Route path='konfg' element={<Konfg/>} />
        <Route path='konfr' element={<Konfr/>} />
      <Route path="działania" element={<Actions/>} />
      <Route path="wiedza" element={<Wiedza/>} />
      <Route path="galeria" element={<Galeria/>} />
      <Route path="kontakt" element={<Kontakt/>} />
    </Route>
  

  
  ),

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
