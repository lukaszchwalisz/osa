/* eslint-disable react/no-unescaped-entities */
import { Email } from "../emails/email.jsx"


const Form = () => {
  return (
    <div className="grid justify-center m-4 mb-20 lg:mx-20 xl:mx-40 2xl:mx-80">
      <h1 className="border border-gray-200 rounded-lg shadow p-4 bg-cyan-100 text-slate-700 text-center dark:text-slate-300 dark:bg-gray-800 dark:border-gray-700 font-bold font-mono text-2xl mt-8 mb-4">FORMULARZ</h1>
      <p className="text-slate-500 dark:text-slate-300 mb-4">
      Jeżeli nie chcesz/nie możesz wysłać wiadomości bezpośrednio przez swoją skrzykę mailową np.: z powodu <b>braku poczucia bezpieczeństwa</b>, umożliwiamy kontakt poprzez formułarz
      naszej stronie internetowej.</p>
      <p className="text-slate-500 dark:text-slate-300 mb-4">Wpisz poniżej swoje dane kontaktowe (zgodnie z uznaniem, potrzebne do kontaktu) oraz treść wiadomości.</p>

      <Email />
    </div>
  )
}

export default Form