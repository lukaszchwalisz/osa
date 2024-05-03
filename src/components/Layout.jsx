/* eslint-disable react/no-unescaped-entities */

import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"

import { useState } from "react";
// import { Button } from "flowbite-react";

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

            <div className="bg-lime-100 dark:bg-gray-800">
              <div className="mx-auto w-full max-w-screen-xl">

                <div className="px-4 py-6 md:flex md:items-center md:justify-between">

                  <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA", 2024
                  </span>

                  <div className="self-end mx-3 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    onClick={toggleDarkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-4 sm:mt-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                  </div>

                </div>
                
              </div>

            </div>

            <Footer />

          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
