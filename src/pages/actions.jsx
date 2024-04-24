/* eslint-disable react/no-unescaped-entities */
import { Tabs } from "flowbite-react"
import Programy from "./Actions/programy"
import Komunikaty from "./Actions/komunikaty"
import Archiwum from "./Actions/archiwum"
import Nowy from "./Actions/nowy"

const Actions = () => {
  return (
    <>
    <div className="grid justify-center sm:mx-0 md:mx-0 lg:mx-20 xl:mx-40 2xl:mx-80">

    <Tabs aria-label="Tabs with underline" style="underline">
      
      <Tabs.Item active title="Programy">

        <Programy />

      </Tabs.Item>

      <Tabs.Item title="Komunikaty">
      
        <Komunikaty />

      </Tabs.Item>

      <Tabs.Item title="Archiwum">

        <Archiwum />
    
      </Tabs.Item>

      <Tabs.Item title="Jak dołączyć ?">

          <Nowy />

        </Tabs.Item>
    
    </Tabs>

    </div>
    </>

  )
}

export default Actions