/* eslint-disable react/no-unescaped-entities */

export function Footer() {
  return (
    // <div className="h-36 p-8 text-center bg-lime-100 dark:text-stone-50 dark:bg-gray-800">
    //   © Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA" 2024

    <footer className="bg-lime-100 dark:bg-gray-800">
        <div className="mx-auto w-full max-w-screen-xl">
  
        <div className="px-4 py-6 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024, Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA"
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <a href="https://www.facebook.com/osamobbing" target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                        </svg>
                      <span className="sr-only">Facebook page</span>
                  </a>
            </div>
          </div>
        </div>
      </footer>


      // </div>

  );
}
