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


const Wiedza = () => {
  return (
      <>
        <div className="grid justify-center sm:mx-0 md:mx-0 lg:mx-20 xl:mx-40 2xl:mx-80">
        
        <Tabs aria-label="Pills" style="pills">
        
        <Tabs.Item title="Mobbing jako zjawisko społeczne">
          
          <M_zjawisko />    
        
        </Tabs.Item>
        
        <Tabs.Item title="Przyczyny">
        
          <Przyczyny />
        
        </Tabs.Item>
        
        <Tabs.Item title="Płaszczyzny występowania">

          <Płaszczyzny />

        </Tabs.Item>

        <Tabs.Item title="Skutki">

          <Skutki />

        </Tabs.Item>

        <Tabs.Item title="Etapy">

          <Etapy />

        </Tabs.Item>

        <Tabs.Item title="Cechy">
        
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
        
        <Tabs.Item title="Przeciwdziałanie mobbingowi (pracodawcy)">

          <Pracodawcy />

        </Tabs.Item>

        <Tabs.Item title="Przeciwdziałanie mobbingowi (pracownicy)">
  
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