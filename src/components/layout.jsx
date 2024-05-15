/* eslint-disable react/no-unescaped-entities */

import { Link, NavLink, Outlet, ScrollRestoration } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
// import { Header } from "./header"
import { Footer } from "./footer"
import { useState } from "react";

function Layout() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className="min-h-screen dark:bg-stone-950">
          <div className="flex flex-col min-h-screen">
              
          <nav className="md:sticky top-0 z-10 h-max max-w-full"> 
            <div className="bg-sky-100 drop-shadow dark:bg-gray-800">
                
            <ul  className="container mx-auto text-center justify-center items-center grid md:flex flex-row">
                <span className="flex flex-center flex-1"><li><Link to="/"><img className="w-64 m-4 items-center sm:grid" src="/osa/images/Web_logo.svg" alt="logo OSA"></img></Link></li></span>
                
                <NavLink
                    to="about"
                    className={({ isActive,  isTransitioning }) =>
                        [  
                     
                        isActive ? "text-slate-700 dark:text-slate-300" : "text-gray-400 font-bold font-mono space-x-2 p-4",
                        isTransitioning ? "" : "text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 font-bold font-mono space-x-2 p-4",
                        ].join(" ")
                    }
                    >
                    O NAS
                </NavLink>
                <NavLink
                    to="projekty"
                    className={({ isActive,  isTransitioning }) =>
                        [  
                            isActive ? "text-slate-700 dark:text-slate-300" : "text-gray-400 font-bold font-mono space-x-2 p-4",
                            isTransitioning ? "" : "text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 font-bold font-mono space-x-2 p-4",
                        ].join(" ")
                    }
                    >
                    PROJEKTY
                </NavLink>
                <NavLink
                    to="wiedza"
                    className={({ isActive,  isTransitioning }) =>
                        [  
                            isActive ? "text-slate-700 dark:text-slate-300" : "text-gray-400 font-bold font-mono space-x-2 p-4",
                            isTransitioning ? "" : "text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 font-bold font-mono space-x-2 p-4",
                        ].join(" ")
                    }
                    >
                    WIEDZA
                </NavLink>
                <NavLink
                    to="galeria"
                    className={({ isActive,  isTransitioning }) =>
                        [  
                            isActive ? "text-slate-700 dark:text-slate-300" : "text-gray-400 font-bold font-mono space-x-2 p-4",
                            isTransitioning ? "" : "text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 font-bold font-mono space-x-2 p-4",
                        ].join(" ")
                    }
                    >
                    GALERIA
                </NavLink>
                <NavLink
                    to="kontakt"
                    className={({ isActive,  isTransitioning }) =>
                        [  
                            isActive ? "text-slate-700 dark:text-slate-300" : "text-gray-400 font-bold font-mono space-x-2 p-4",
                            isTransitioning ? "" : "text-gray-400 hover:text-slate-700 dark:hover:text-slate-300 font-bold font-mono space-x-2 p-4",
                        ].join(" ")
                    }
                    >
                    KONTAKT
                </NavLink>

                <li>
                <div className=" text-gray-400 space-x-2 p-4 hover:text-gray-900 dark:hover:hover:text-slate-300"
                onClick={toggleDarkMode}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 my-4 inline-flex items-center">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </div>
                </li>

                <li className="text-slate-500 dark:text-slate-300"><a href="https://www.facebook.com/osamobbing" target="_blank" className="text-gray-400 hover:text-gray-900 mx-2 dark:hover:text-white">
                <svg className="w-5 h-5 my-4 inline-flex items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                </a>
                </li>

                </ul>
           
            </div>
        </nav>

            <div className="mb-auto">
              <div className="container mx-auto mb-30">
                <Outlet />
              </div>
            </div>

            <Footer />

          </div>
        </div>
        <ScrollRestoration smooth/>
        <ScrollToTop
        smooth
        bgcolor="#000"
        color="#9ca3af"
        top="20"
        viewBox="0 0 15 24"
        className="text-center"
        svgPath="M4 2C3.44772 2 3 2.44772 3 3C3 3.55228 3.44772 4 4 4H20C20.5523 4 21 3.55228 21 3C21 2.44772 20.5523 2 20 2H4Z 
        M6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L11 10.4142L11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21L13 10.4142L16.2929 13.7071C16.6834 14.0976 17.3166 14.0976 17.7071 13.7071C18.0976 13.3166 18.0976 12.6834 17.7071 12.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071Z" fill="#000000"
        
        />
        </div>
      

    </>
  )
}

export default Layout
