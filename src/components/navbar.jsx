import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
        <nav> 
            <ul  className="flex flex-row justify-end">
                <span className="flex flex-center flex-1"><li><Link to="/osa/"><img className="w-64" src="./images/Web_logo_fit2.png" alt="logo OSA"></img></Link></li></span>
                <li className="text-slate-500 font-bold font-mono space-x-2 p-4">
                <Link to="/osa/">Home</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/about">Stowarzyszenie</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/about">Działania</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/about">Wiedza</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/about">Galeria</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/about">Kontakt</Link>
                </li>
            </ul>
            <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
        </nav>
         </>
    )
  }
  