
import { Link } from "react-router-dom"

export function Header() {
    return (
        <>


        <nav className="sticky top-0 z-10 h-max max-w-full"> 
            <div className="bg-lime-100 dark:bg-gradient-to-r from-gray-400 from-20% to-gray-800 to-80%">
                
            <ul  className="container mx-auto text-center sm:justify-center sm:items-center sm:grid md:flex flex-row">
                <span className="flex flex-center flex-1"><li><Link to="/"><img className="w-64 m-4 sm:grid" src="/osa/images/Web_logo.svg" alt="logo OSA"></img></Link></li></span>
                {/* <li className="text-slate-500 space-x-2 p-4">
                <Link to="/osa">
                <HomeIcon className="size-6 text-slate-400 hover:text-slate-500 p-4" />
                </Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2">
                <Link to="/osa/">Home</Link>
                </li> */}
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="about">O NAS</Link>
                </li>

                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="projekty">PROJEKTY</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="wiedza">WIEDZA</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="galeria">GALERIA</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="kontakt">KONTAKT</Link>
                </li>
            </ul>
           
            </div>
        </nav>

         </>
    )
  }
  