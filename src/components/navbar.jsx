import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
        <nav> 
            <ul  className="flex flex-row justify-end">
                <span className="flex flex-center flex-1"><li><Link to="/osa"><img className="w-64" src="https://raw.githubusercontent.com/lukaszchwalisz/osa/main/src/assets/images/Web_logo_fit2.png" alt="logo OSA"></img></Link></li></span>
                <li className="text-slate-500 font-bold font-mono space-x-2 p-4">
                <Link to="/osa"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg></Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/about">Stowarzyszenie</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/about">Działania</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/about">Wiedza</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/about">Galeria</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/about">Kontakt</Link>
                </li>
            </ul>
            <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>
        </nav>
         </>
    )
  }
  