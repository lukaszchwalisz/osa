
import { Link } from "react-router-dom"

export function Header() {
    return (
        <>


        <nav className="md:sticky top-0 z-10 h-max max-w-full"> 
            <div className="bg-sky-100 drop-shadow dark:bg-gray-800">
                
            <ul  className="container mx-auto text-center sm:justify-center sm:items-center sm:grid md:flex flex-row">
                <span className="flex flex-center flex-1"><li><Link to="/"><img className="w-64 m-4 items-center sm:grid" src="/osa/images/Web_logo.svg" alt="logo OSA"></img></Link></li></span>
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
                <li className="text-slate-500 dark:text-slate-300"><a href="https://www.facebook.com/osamobbing" target="_blank" className="text-gray-400 hover:text-gray-900 mx-2 dark:hover:text-white">
                <svg className="w-5 h-5 my-2 inline-flex items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                </a></li>
                </ul>
           
            </div>
        </nav>

         </>
    )
  }
  