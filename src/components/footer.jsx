/* eslint-disable react/no-unescaped-entities */

export function Footer() {

  return (

    <footer className="bg-lime-100 dark:bg-gray-800">

      <div className="mx-auto w-full max-w-screen-xl">

        <div className="px-4 py-6 flex md:items-center">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">Sprawdź nas na:
          </span>
          <a href="https://www.facebook.com/osamobbing" target="_blank" className="text-gray-400 hover:text-gray-900 mx-2 dark:hover:text-white">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">OSA na Fb</span>
          </a>

        </div>
      </div>

    </footer>

  );
}
