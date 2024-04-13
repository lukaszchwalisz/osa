
import { Link } from "react-router-dom"
// import { Navbar } from 'flowbite-react';

export function Header() {
    return (
        <>
        <nav> 
            <div className="dark:bg-gradient-to-r from-sky-100 from-10% to-indigo-200 to-90%">
            <ul  className="sm:grid md:flex flex-row">
                <span className="flex flex-center flex-1"><li><Link to="/osa"><img className="w-64 m-4 sm:grid" src="https://raw.githubusercontent.com/lukaszchwalisz/osa/main/public/images/Web_logo.svg" alt="logo OSA"></img></Link></li></span>
                <li className="text-slate-500 font-bold font-mono space-x-2 p-4">
                <Link to="/osa"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg></Link>
                </li>
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
                <Link to="/osa/about">Galeria</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/about">1,5%</Link>
                </li>
                <li className="text-slate-400 font-bold font-mono hover:text-slate-500 space-x-2 p-4">
                <Link to="/osa/kontakt">Kontakt</Link>
                </li>
            </ul>
            {/* <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/> */}
           
            </div>
        </nav>

         </>
    )
  }
  