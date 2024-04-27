import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "./footer"

function Layout() {
  return (
    <>
    <div className="min-h-screen dark:bg-indigo-950"> 
      <Header/>
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>

    </>
  )
}

export default Layout
