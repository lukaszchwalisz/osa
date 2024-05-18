/* eslint-disable react/no-unescaped-entities */

import { Tabs } from "flowbite-react"
import { M_zjawisko } from "./Wiedza/m_zjawisko"
import { Przyczyny } from "./Wiedza/przyczyny"
import { T_mobberów } from "./Wiedza/t_mobberów"
import { T_ofiar } from "./Wiedza/t_ofiar"
import { Cechy } from "./Wiedza/cechy"
import { Płaszczyzny } from "./Wiedza/płaszczyzny"
import { Skutki } from "./Wiedza/skutki"
import { Etapy } from "./Wiedza/etapy"
import { Pracownicy } from "./Wiedza/pracownicy"
import { Pracodawcy } from "./Wiedza/pracodawcy"
import { Uregulowania } from "./Wiedza/uregulowania"
import { Literatura } from "./Wiedza/literatura"
import { Helmet } from "react-helmet";

const Wiedza = () => {
  return (
      <>
        <Helmet>
            <title>Wiedza - Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA"</title>
        </Helmet>
        <div className="grid justify-center m-4 lg:mx-20 xl:mx-40 2xl:mx-80">
        
        <Tabs aria-label="Pills" style="pills">
        
        <Tabs.Item title="Charakterystyka zjawiska mobbingu">
          
          <M_zjawisko />    
        
        </Tabs.Item>
        
        <Tabs.Item title="Przyczyny">
        
          <Przyczyny />
        
        </Tabs.Item>
        
        <Tabs.Item title="Płaszczyzny występowania">

          <Płaszczyzny />

        </Tabs.Item>

        <Tabs.Item title="Skutki mobbingu">

          <Skutki />

        </Tabs.Item>

        <Tabs.Item title="Etapy">

          <Etapy />

        </Tabs.Item>

        <Tabs.Item title="Cechy mobbingu">
        
          <Cechy />

        </Tabs.Item>

        <Tabs.Item title="Typologie mobberów">
        
          <T_mobberów />
        
        </Tabs.Item>

        <Tabs.Item title="Typologia ofiar mobbingu">
          
          <T_ofiar />
        
        </Tabs.Item>

        <Tabs.Item title="Uregulowania prawne">
        
          <Uregulowania />

        </Tabs.Item>
        
        <Tabs.Item title="Przeciwdziałanie (pracodawcy)">

          <Pracodawcy />

        </Tabs.Item>

        <Tabs.Item title="Przeciwdziałanie (pracownicy)">
  
          <Pracownicy />
       
        </Tabs.Item>
        
        <Tabs.Item title="Literatura">

          <Literatura />

        </Tabs.Item>

        </Tabs>

      </div>
         
    </>
  )
}

export default Wiedza