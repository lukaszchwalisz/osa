/* eslint-disable react/no-unescaped-entities */

const Kontakt = () => {
  return (
    <>
    <div className="grid justify-center sm:mx-0 md:mx-0 lg:mx-20 xl:mx-40 2xl:mx-80">
    <article>
    <h1 className="text-indigo-700 dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">Kontakt.</h1>
      
      <p className="text-slate-500 dark:text-slate-200 mb-4">
      <b>Adres tylko do korespondencji:</b>
      <ul className="list-none">
          <li className="text-slate-500 dark:text-slate-200">80-838 Gdańsk</li>
          <li className="text-slate-500 dark:text-slate-200">ul. Warzywnicza 10C/7</li>
          <li className="text-slate-500 dark:text-slate-200">tel.: (058) 301 98 72</li>
          <li className="text-slate-500 dark:text-slate-200">kom.: 795 159 795</li>
          <li className="text-slate-500 dark:text-slate-200">email: <a href="mailto:osa_stowarzyszenie@wp.pl">osa_stowarzyszenie@wp.pl</a></li>
          <li className="text-slate-500 dark:text-slate-200">www: <a href="http://www.osastowarzyszenie.pl/start.html">http://www.osastowarzyszenie.pl/</a></li>
          <li className="text-slate-500 dark:text-slate-200">www: <a href="http://www.osastowarzyszenie.pl/poznan.pdf" target="_blank">pdf</a></li>
      </ul>
      </p>

     </article>

     </div>
    </>
  )
}

export default Kontakt
