/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="grid justify-center mt-40 m-4 lg:mx-20 xl:mx-40 2xl:mx-80">


          <h1 className="text-slate-500 font-bold text-4xl">Witamy na stronie Ogólnopolskiego Stowarzyszenia Antymobbingowego "OSA".</h1>
          <h1 className="text-slate-400 text-2xl pt-4 mb-4">Nasze stowarzyszenie zajmuje się przeciwdziałaniem mobbingowi od ponad 20 lat.
          Jeżeli jesteś osobą, która interesuje się zjawiskiem mobbingu w pracy albo sama doświadczyła skutków tego zjawiska, zapraszamy do
          zapoznania się z treściami zamieszczonymi na stronie w celu otrzymania konkretnej wiedzy i skutecznej pomocy. Nasi specjaliści
          postarają się przyjrzeć każdemu zgłoszeniu. Zapraszamy! 
          </h1>

        <div className="grid gap-4 justify-center m-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/osa/about" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">O nas</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Poczytaj o historii powstania stowarzyszenia "OSA", najciekawszych wydarzeniach, sprawozdaniach i strukturze organizacyjne.</p>
              <a href="/osa/about" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Sprawdź
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/osa/projekty" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Projekty</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aktualności z działalności stowarzyszenia "OSA": realizowane projekty, ważne komunikaty, współpraca i możliwość dofinansowania działalności stowarzyszenia.</p>
              <a href="/osa/projekty" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Sprawdź
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/osa/wiedza" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wiedza</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Zapoznaj się z najważniejszą terminologią dotyczącą zjawiska mobbingu.</p>
              <Link to="/osa/wiedza" target="_blank"className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Sprawdź
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Link>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/osa/galeria" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Galeria</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Galeria prac rysunkowych współpracownika stowarzyszenia - Grzegorza Krzemińskiego.</p>
              <Link to="/osa/galeria" target="_blank"className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Sprawdź
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Link>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/osa/kontakt" target="_blank">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Kontakt</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Kontakt z przedstawicielami stowarzyszenia - w centrali w Gdańsku oraz w punktach konsultacyjnych na terenie całego kraju.</p>
              <a href="/osa/kontakt" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Sprawdź
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>

         </div>

      </div>
    </>   
  );
}

export default Home;