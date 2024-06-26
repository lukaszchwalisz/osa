/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Strona Główna - Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA"
        </title>
      </Helmet>
      <div className="grid justify-center m-4 mt-20 mb-20 lg:mx-20 xl:mx-40 2xl:mx-80">
        <h1 className="text-slate-500 font-bold text-3xl">
          Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA"
        </h1>
        <h1 className="text-slate-400 text-2xl pt-4 mb-10">
          Nasze stowarzyszenie zajmuje się przeciwdziałaniem mobbingowi od ponad
          20 lat. Jeżeli jesteś osobą, która interesuje się zjawiskiem mobbingu
          w pracy albo sama doświadczyła skutków tego zjawiska, zapraszamy do
          zapoznania się z treściami zamieszczonymi na stronie w celu otrzymania
          konkretnej wiedzy i skutecznej pomocy. Nasi specjaliści postarają się
          przyjrzeć każdemu zgłoszeniu. Zapraszamy!
        </h1>

        <div className="grid gap-4 justify-center m-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          <div className="flex flex-col items-start max-w-sm p-6 bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Link to="about">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                  O nas
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                Poczytaj o historii powstania stowarzyszenia "OSA",
                najciekawszych wydarzeniach, sprawozdaniach i strukturze
                organizacyjnej.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="about"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
              >
                Sprawdź
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start max-w-sm p-6 border bg-blue-50 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Link to="projekty">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                  Projekty
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                Aktualności z działalności stowarzyszenia "OSA": realizowane
                projekty, ważne komunikaty, współpraca i możliwość
                dofinansowania działalności stowarzyszenia.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="projekty"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
              >
                Sprawdź
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start max-w-sm p-6 bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Link to="wiedza">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                  Wiedza
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                Zapoznaj się z najważniejszą terminologią dotyczącą zjawiska
                mobbingu.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="wiedza"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
              >
                Sprawdź
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start max-w-sm p-6 bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Link to="galeria">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                  Galeria
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                Galeria prac rysunkowych współpracownika stowarzyszenia -
                Grzegorza Krzemińskiego.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="galeria"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
              >
                Sprawdź
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start max-w-sm p-6 bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Link to="kontakt">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                  Kontakt
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                Kontakt z przedstawicielami stowarzyszenia - w centrali w
                Gdańsku oraz w punktach konsultacyjnych na terenie całego kraju.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="kontakt"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
              >
                Sprawdź
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start max-w-sm p-6 bg-blue-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <Link to="form">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-500">
                  Formularz
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                Istnieje możliwość kontaktu ze stowarzyszeniem bezpośrednio ze
                strony internetowej.
              </p>
            </div>
            <div className="mt-auto">
              <Link
                to="form"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
              >
                Sprawdź
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
