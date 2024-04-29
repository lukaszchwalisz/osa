/* eslint-disable react/no-unescaped-entities */

import { Tabs } from "flowbite-react"
import Struktura from "./About/struktura";
// import Cele from "./About/cele";
import Historia from "./About/historia";
import Wydarzenia from "./About/wydarzenia";
import Konfg from "./About/konfg";
import Konfr from "./About/konfr";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
   
      <div className="grid justify-left m-4 lg:mx-20 xl:mx-40 2xl:mx-80">

      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                  <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Trochę historii</a>
              </li>
              <li className="me-2">
                  <a href="konfg" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Gdańsk</a>
              </li>
              <li className="me-2">
                  <a href="cele" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Cele statutowe</a>
              </li>
              <li className="me-2">
                  <a href="konfr" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Racibórz</a>
              </li>
          </ul>
      </div>



      <Tabs aria-label="Tabs with underline" style="underline">
       
        <Tabs.Item active title="Trochę historii">
          
          <Historia />

        </Tabs.Item>
       
        <Tabs.Item title="Wydarzenia">
          
          <Wydarzenia />

        </Tabs.Item>

        <Tabs.Item title="Gdańsk">

          <Konfg />

        </Tabs.Item>
        <Tabs.Item title="Racibórz">

          <Konfr />

        </Tabs.Item>
       
        <Tabs.Item title="Struktura organizacyjna">

          <Struktura />

        </Tabs.Item>






      </Tabs>

    </div>

     </>

     );
  }

export default About