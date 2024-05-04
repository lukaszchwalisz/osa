/* eslint-disable react/no-unescaped-entities */

import { Outlet, ScrollRestoration } from "react-router-dom"
import { Header } from "./header"
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
              
            <Header />

            <div className="mb-auto">
              <div className="container mx-auto mb-30">
                <Outlet />
              </div>
            </div>

            <Footer />

            <div className="fixed bottom-5 right-5 text-gray-400 hover:text-gray-900 dark:hover:text-yellow-300"
            onClick={toggleDarkMode}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4 sm:mt-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            </div>
       
            <div className="fixed bottom-9 right-4 before:px-4 py-6 flex md:items-center">
              <a href="https://www.facebook.com/osamobbing" target="_blank" className="text-gray-400 hover:text-gray-900 mx-2 dark:hover:text-white">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">OSA na Fb</span>
              </a>
            </div>
          
          

          </div>
        </div>
        <ScrollRestoration />
      </div>
    </>
  )
}

export default Layout
