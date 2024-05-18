/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";

function Galeria() {
  return (
    <>
      <Helmet>
            <title>Galeria. - Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA"</title>
      </Helmet>
      <div className="grid justify-center m-4 lg:mx-20 xl:mx-40 2xl:mx-80">
      <h1 className="border border-gray-200 rounded-lg shadow p-4 bg-blue-50 text-slate-700 text-center dark:text-slate-300 dark:bg-gray-800 dark:border-gray-700 font-bold font-mono text-2xl mt-8 mb-4">GALERIA</h1>

        <p className="text-slate-500 dark:text-slate-300 mb-4">
        Autorem umieszczonych tu rysunków jest <b>Grzegorz Krzemiński</b>, współpracujący ze Stowarzyszeniem. Absolwent Wyższej Szkoły Zawodowej w
        Kielcach na stałe mieszkający i pracujący w Warszawie. Poza Stowarzyszeniem podejmuje współpracę z różnymi instytucjami i firmami projektując
        loga, reklamy i plakaty, wykorzystując w nich swój rysunek. Od kilku lat jego prace można oglądać ma łamach "Tygodnika Koneckiego" i "Tygodnika Skarżyskiego".
        Jest uważnym obserwatorem otaczającej rzeczywistości, której absurdy celnie ukazuje w krzywym zwierciadle ironii.   
        </p>
        <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50"/>

        <div className="grid gap-4 justify-center m-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys1.gif" alt="Rys.1"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys2.gif" alt="Rys.2"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys3.gif" alt="Rys.3"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys4.gif" alt="Rys.4"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys5.gif" alt="Rys.5"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys6.gif" alt="Rys.6"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys7.gif" alt="Rys.7"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys8.gif" alt="Rys.8"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys9.gif" alt="Rys.9"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys10.gif" alt="Rys.10"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys11.gif" alt="Rys.11"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys12.gif" alt="Rys.12"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys13.gif" alt="Rys.13"></img>
        <img className="w-64 m-4 hover:scale-150 sm:grid" src="/osa/memes/rys14.gif" alt="Rys.14"></img>
        </div>

      </div>
    </> 
  )
}

export default Galeria