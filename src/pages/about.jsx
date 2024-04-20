/* eslint-disable react/no-unescaped-entities */

import { Tabs } from "flowbite-react"
import Struktura from "./About/struktura";
import Cele from "./About/cele";
import Nowy from "./About/nowy";
import Historia from "./About/historia";


const About = () => {
  return (
    <>
   
      <div className="grid justify-left sm:mx-0 md:mx-0 lg:mx-20 xl:mx-40 2xl:mx-80">

      <Tabs aria-label="Tabs with underline" style="underline">

        <Tabs.Item active title="Struktura organizacyjna">

          <Struktura />

        </Tabs.Item>

        <Tabs.Item title="Cele statutowe">

          <Cele />
  
        </Tabs.Item>

        <Tabs.Item title="Jak dołączyć ?">

          <Nowy />

        </Tabs.Item>

        <Tabs.Item title="Trochę historii">
        
          <Historia />

      </Tabs.Item>

    </Tabs>

    </div>

     </>

     );
  }

export default About