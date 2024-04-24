/* eslint-disable react/no-unescaped-entities */

import { Tabs } from "flowbite-react"
import Struktura from "./About/struktura";
import Cele from "./About/cele";
import Historia from "./About/historia";
import Wydarzenia from "./About/wydarzenia";

const About = () => {
  return (
    <>
   
      <div className="grid justify-left sm:mx-0 md:mx-0 lg:mx-20 xl:mx-40 2xl:mx-80">

      <Tabs aria-label="Tabs with underline" style="underline">

       
        <Tabs.Item active title="Trochę historii">
          
          <Historia />

        </Tabs.Item>
       
        <Tabs.Item title="Wydarzenia">
          
          <Wydarzenia />

        </Tabs.Item>

        <Tabs.Item title="Cele statutowe">

          <Cele />

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