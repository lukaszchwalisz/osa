/* eslint-disable react/no-unescaped-entities */

import { List } from "flowbite-react"

const Nowy = () => {
  return (
    <div>

    <article>
        <h1 className="text-indigo-700 dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">Warunki wstąpienia do Stowarzyszenia "OSA".</h1>
        
        <p className="text-slate-500 dark:text-slate-200 mb-4 my-1">Członkiem Ogólnopolskiego Stowarzyszenia Antymobbingowego "OSA" może zostać każdy, kto :</p>

        <List className="text-slate-500 dark:text-slate-200 mb-4">
        <List.Item>zna i chce przestrzegać postanowień statutu, jak też celów i zadań Stowarzyszenia</List.Item>
        <List.Item>chce uczestniczyć w działalności Stowarzyszenia, pomagać innym członkom Stowarzyszenia w realizowaniu zadań statutowych</List.Item>
        <List.Item>sumiennie wypełnia uchwały władz Stowarzyszenia</List.Item>
        <List.Item>dba o dobry wizerunek Stowarzyszenia i jego członków oraz godnie reprezentuje Stowarzyszenie na zewnątrz</List.Item>
        <List.Item>przeciwdziała zachowaniom mobbingowym</List.Item>
        <List.Item>przestrzega instrukcji obsługi i kontroli dokumentów, która wprowadza jednolite zasady sporządzania, kontroli i obiegu dokumentów w Stowarzyszeniu oraz jednolity mechanizm działania Stowarzyszenia na terenie całego kraju</List.Item>
        <List.Item>regularnie opłaca składki członkowskie w kwocie 5,00 złotych (słownie pięć złotych) miesięcznie</List.Item>
        </List>

        <p className="text-slate-500 dark:text-slate-200 font-bold underline mb-4">Co należy zrobić, zostać członkiem Stowarzyszenia "OSA" ?</p>

        <List ordered className="text-slate-500 dark:text-slate-200">
        <List.Item>Zgłosić chęć członkostwa do Zarządu Stowarzyszenia lub jego Punktów Konsultacyjnych.</List.Item>
        <List.Item>Zapoznać się z treścią ustawy o stowarzyszeniach, statutem Stowarzyszenia, ustawy o ochronie danych osobowych, ustawy o pożytku publicznym i wolontariacie.</List.Item>
        <List.Item>Wypełnić deklarację członkowską, na podstawie której podejmowana jest przez Zarząd Stowarzyszenia decyzja o przyjęciu w poczet członków.</List.Item>
        <List.Item>Wpłacić jednorazowe wpisowe w kwocie 20,00 złotych(słownie dwadzieścia złotych).</List.Item>
        </List>
    </article>

    </div>
  )
}

export default Nowy