/* eslint-disable react/no-unescaped-entities */

import { Tabs } from "flowbite-react"
import Struktura from "./About/struktura";
import Cele from "./About/cele";
import Historia from "./About/historia";
import Wydarzenia from "./About/wydarzenia";
import { Helmet } from "react-helmet";

// import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
          <title>O nas. - Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA"</title>
      </Helmet>
      <div className="grid justify-left m-4 lg:mx-20 xl:mx-40 2xl:mx-80">

        <Tabs aria-label="Tabs with underline" style="underline">
        
          <Tabs.Item active title="POCZĄTKI">

            <Historia />

          </Tabs.Item>
        
          <Tabs.Item title="WYDARZENIA">
            
            <Wydarzenia />

          </Tabs.Item>

          <Tabs.Item title="CELE">
            
            <Cele />

          </Tabs.Item>
        
          <Tabs.Item title="STRUKTURA">

            <Struktura />

          </Tabs.Item>

        </Tabs>

      </div>

     </>

     );
  }

export default About