/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"

const Struktura = () => {
  return (
        <dev>

        <article>
        <h1 className="text-indigo-700 dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">Struktura organizacyjna.</h1>
        
        <p className="text-slate-500 dark:text-slate-200 font-bold underline mb-4">Zarząd stowarzyszenia:</p>
        <table className="mb-4">
            <tbody>
            <tr>
                <td className="text-left  dark:text-slate-200"><b>Prezes</b></td>
                <td className="text-right  dark:text-slate-200">Mariola Żarnoch-Elas</td>
            </tr>
            <tr>
                <td className="text-left  dark:text-slate-200"><b>Wiceprezes</b></td>
                <td className="text-right  dark:text-slate-200">Małgorzata Kopydłowska</td>
            </tr>
            <tr>
                <td className="text-left p dark:text-slate-200"><b>Członek Zarządu</b></td>
                <td className="text-right  dark:text-slate-200">Łukasz Chwalisz</td>
            </tr>
            <tr>
                <td className="text-left  dark:text-slate-200"><b>Członek Zarządu</b></td>
                <td className="text-right dark:text-slate-200">Barbara Cichosz</td>
            </tr>
            <tr>
                <td className="text-left dark:text-slate-200"><b>Członek Zarządu</b></td>
                <td className="text-right dark:text-slate-200">Jadwiga Mucha</td>
            </tr>
            </tbody>
        </table>

        <p className="text-slate-500 dark:text-slate-200 font-bold underline mb-4">Komisja rewizyjna:</p>
        <table className="mb-4">
            <tbody>
            <tr>
                <td className="text-left  dark:text-slate-200"><b>Przewodnicząca</b></td>
                <td className="text-center px-7  dark:text-slate-200">Bożena Luchowska</td>
            </tr>
            <tr>
                <td className="text-left dark:text-slate-200"><b>Członek komisji</b></td>
                <td className="text-right px-7  dark:text-slate-200">Elżbieta Król</td>
            </tr>
    
            </tbody>
        </table>

        <p className="text-slate-500 dark:text-slate-200 font-bold underline hover:text-indigo-400 mb-4"><Link to="/osa/kontakt">Punkty konsultacyjne:</Link></p>
        <table className="mb-4">
            <tbody>

            <tr>
                <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><Link to="mailto:osa_stowarzyszenie@wp.pl">Gdańsk</Link></b></td>
                <td className="text-right dark:text-slate-200">Mariola Żarnoch</td>
            </tr>
            <tr>
                <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><Link to="mailto:osa-lublin@wp.pl">Lublin</Link></b></td>
                <td className="text-right dark:text-slate-200">Jadwiga Mucha</td>
            </tr>
            <tr>
                <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><Link to="mailto:osa-jeleniagora@wp.pl">Jelenia Góra</Link></b></td>
                <td className="text-right dark:text-slate-200">Lech Rębisz</td>
            </tr>
            <tr>
                <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><Link to="mailto:osa-leczyca@wp.pl">Łęczyca</Link></b></td>
                <td className="text-right dark:text-slate-200">Katarzyna Ratajczyk - Rusek</td>
            </tr>
            <tr>
                <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><Link to="mailto:osa-luban@wp.pl">Lubań</Link></b></td>
                <td className="text-right dark:text-slate-200">Katarzyna Urbaniak</td>
            </tr>
            <tr>
                <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><Link to="mailto:osa-poznan@wp.pl">Poznań</Link></b></td>
                <td className="text-right dark:text-slate-200">Łukasz Chwalisz</td>
            </tr>

            </tbody>
        </table>
        
        </article>
        </dev>
  )
}

export default Struktura