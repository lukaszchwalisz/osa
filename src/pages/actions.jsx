/* eslint-disable react/no-unescaped-entities */
import { Tabs } from "flowbite-react"

const Actions = () => {
  return (
    <>
    <div className="grid justify-center sm:mx-0 md:mx-0 lg:mx-20 xl:mx-40 2xl:mx-80">

    <Tabs aria-label="Tabs with underline" style="underline">
      <Tabs.Item active title="Programy">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
      </Tabs.Item>
      <Tabs.Item title="Komunikaty">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
      </Tabs.Item>
      <Tabs.Item title="Wydarzenia">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
      </Tabs.Item>
      <Tabs.Item title="Archiwum">
        <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
      </Tabs.Item>
    </Tabs>

    </div>
    </>

  )
}

export default Actions