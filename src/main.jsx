
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'

import Home from "./pages/home";
import About from "./pages/about";
import Actions from "./pages/actions";
import Wiedza from "./pages/wiedza";
import Galeria from "./pages/galeria";
import Kontakt from "./pages/kontakt";

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

    ],

  },

]);


 

    // <Route path='/osa' element={<Layout />}>
    //   <Route path='' element={<Home />} />
    //   <Route path="/osa/about" element={<About />} />
    //   <Route path="/osa/projekty" element={<Actions />} />
    //   <Route path="/osa/wiedza" element={<Wiedza />} />
    //   <Route path="/osa/galeria" element={<Galeria />} />
    //   <Route path="/osa/kontakt" element={<Kontakt />} />
    // </Route>



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
 
)
