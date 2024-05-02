import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"

function Layout() {
  return (
    <>
    <div className="min-h-screen dark:bg-stone-950"> 
      <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="mb-auto">
        <div className="container mx-auto mb-30">
        <Outlet />
      </div>
      </div>
      <Footer />
      </div>
    </div>

    </>
  )
}

export default Layout
