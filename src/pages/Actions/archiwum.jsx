/* eslint-disable react/no-unescaped-entities */

const Archiwum = () => {
  return (
    <article >
    <h1 className="text-indigo-700 bg-slate-50 p-4 text-center dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">ARCHIWUM</h1>
    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Programy i projekty stworzone i zrealizowane przez Ogólnopolskie Stowarzyszenie Antymobbingowe OSA (pliki pdf):
    </p>
    
    <ul className="list-disc">
            
      <li className="text-slate-500 dark:text-slate-200 m-3"><a href="/osa/public/pdf/programy.pdf" target="_blank">Programy</a></li>
      <li className="text-slate-500 dark:text-slate-200 m-3"><a href="/osa/public/pdf/projekty.pdf" target="_blank">Projekty</a></li>
    </ul>
    
    
    </article>
  )
}

export default Archiwum