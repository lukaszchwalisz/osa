/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"

const Struktura = () => {
  return (
        <div>

        <article>
        <h1 className="text-indigo-700 bg-slate-50 p-4 text-center dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">STRUKTURA</h1>
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
                <td className="text-center px-11  dark:text-slate-200">Bożena Luchowska</td>
            </tr>
            <tr>
                <td className="text-left dark:text-slate-200"><b>Członek komisji</b></td>
                <td className="text-right px-11  dark:text-slate-200">Elżbieta Król</td>
            </tr>
    
            </tbody>
        </table>

        <p className="text-slate-500 dark:text-slate-200 font-bold underline hover:text-indigo-400 mb-4"><Link to="../kontakt">Punkty konsultacyjne:</Link></p>
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
        <article className="pt-4">
            <p className="text-slate-500 dark:text-slate-200 font-bold underline mb-4">Sprawozdania finansowe i merytoryczne</p>
            <p className="text-slate-500 dark:text-slate-200 mb-4">Sprawozdania stowarzyszenia "OSA" dostępne są w bazie sprawozdań organizacji pożytku publicznego na stronie:  
            <p><Link className="underline hover:text-indigo-400" to="https://sprawozdaniaopp.niw.gov.pl/" type="application/pdf" target="_blank">Narodowy Instytut Wolności Centrum Rozwoju Społeczeństwa Obywatelskiego</Link></p></p>
            <p className="text-slate-500 dark:text-slate-200 mb-4">W celu wyszukania sprawozdań stowarzyszenia wpisz w zakładce KRS nr:  <b>0000088951</b></p>        
        </article>

        </div>
  )
}

export default Struktura