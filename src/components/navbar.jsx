import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
        <nav> 
            <ul  className="flex flex-row justify-end">
                <span className="flex flex-center flex-1"><li><Link to="/"><img className="w-64" src="/src/assets/web_logo_fit2.png" alt="logo OSA"></img></Link></li></span>
                <li className="text-slate-500 font-bold space-x-2 p-4">
                <Link to="/">Home</Link>
                </li>
                <li className="text-slate-400 font-bold space-x-2 p-4">
                <Link to="/about">About</Link>
                </li>
            </ul>
            
        </nav>
         </>
    )
  }
  