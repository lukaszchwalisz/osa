/* eslint-disable react/no-unescaped-entities */

const Archiwum = () => {
  return (
    <article >
    <h1 className="text-indigo-700 bg-slate-50 p-4 text-center dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">ARCHIWUM</h1>
    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Programy i projekty stworzone i zrealizowane przez Ogólnopolskie Stowarzyszenie Antymobbingowe OSA (pliki pdf):
    </p>
    
      
      <p className="text-slate-500 font-semibold dark:text-slate-200 m-3"><a href="/osa/pdf/programy.pdf" type="application/pdf" target="_blank">Programy realizowane w latach 2003 r. - 2018 r.</a></p>
      <iframe src="/osa/pdf/programy.pdf" width="100%" height="750px"></iframe>
      <p className="text-slate-500 font-semibold dark:text-slate-200 m-3"><a href="/osa/pdf/projekty.pdf" type="application/pdf"target="_blank">Programy realizowane w latach 2003 r. - 2022 r.</a></p>
      <iframe src="/osa/pdf/projekty.pdf" width="100%" height="750px"></iframe>
    
    
    
    </article>
  )
}

export default Archiwum