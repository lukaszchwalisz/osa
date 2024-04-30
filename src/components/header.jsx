
import { Link } from "react-router-dom"
// import {HomeIcon} from '@heroicons/react/24/outline'

export function Header() {
    return (
        <>


        <nav className="sticky top-0 z-10 h-max max-w-full"> 
            <div className="bg-sky-50 dark:bg-gradient-to-r from-sky-100 from-10% to-indigo-200 to-90%">
                
            <ul  className="container mx-auto text-center sm:justify-center sm:items-center sm:grid md:flex flex-row">
                <span className="flex flex-center flex-1"><li><Link to="/osa"><img className="w-64 m-4 sm:grid" src="/osa/images/Web_logo.svg" alt="logo OSA"></img></Link></li></span>
                {/* <li className="text-slate-500 space-x-2 p-4">
                <Link to="/osa">
                <HomeIcon className="size-6 text-slate-400 hover:text-slate-500 p-4" />
                </Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2">
                <Link to="/osa/">Home</Link>
                </li> */}
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/about">O nas</Link>
                </li>

                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/działania">Działania</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/wiedza">Wiedza</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/galeria">Galeria</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/kontakt">Kontakt</Link>
                </li>
            </ul>
           
            </div>
        </nav>

         </>
    )
  }
  