import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
        <nav> 
            <ul  className="flex flex-row">
                <li><Link to="/"><img className="" src="/src/assets/web_logo_fit2.png" alt="logo OSA"></img></Link></li>
                <li className="text-cyan-500 font-bold justify-end space-x-2 p-4">
                <Link to="/">Home</Link>
                </li>
                <li className="text-cyan-500 font-bold justify-end space-x-2 p-4">
                <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
         </>
    )
  }
  