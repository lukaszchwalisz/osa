/* eslint-disable react/no-unescaped-entities */

import { List } from "flowbite-react"

const Nowy = () => {
  return (
    <div>

      <article>
        <h1 className="border border-gray-200 rounded-lg shadow p-4 bg-blue-50 text-slate-700 text-center dark:text-slate-300 dark:bg-gray-800 dark:border-gray-700 font-bold font-mono text-2xl mt-8 mb-4">WSPÓŁPRACA</h1>

        <p className="text-slate-500 dark:text-slate-300 font-bold underline mb-4">Członkiem Ogólnopolskiego Stowarzyszenia Antymobbingowego "OSA" może zostać każdy, kto :</p>

        <List className="text-slate-500 dark:text-slate-300 mb-4">
          <List.Item>zna i chce przestrzegać postanowień statutu, jak też celów i zadań Stowarzyszenia</List.Item>
          <List.Item>chce uczestniczyć w działalności Stowarzyszenia, pomagać innym członkom Stowarzyszenia w realizowaniu zadań statutowych</List.Item>
          <List.Item>sumiennie wypełnia uchwały władz Stowarzyszenia</List.Item>
          <List.Item>dba o dobry wizerunek Stowarzyszenia i jego członków oraz godnie reprezentuje Stowarzyszenie na zewnątrz</List.Item>
          <List.Item>przeciwdziała zachowaniom mobbingowym</List.Item>
          <List.Item>przestrzega instrukcji obsługi i kontroli dokumentów, która wprowadza jednolite zasady sporządzania, kontroli i obiegu dokumentów w Stowarzyszeniu oraz jednolity mechanizm działania Stowarzyszenia na terenie całego kraju</List.Item>
          <List.Item>regularnie opłaca składki członkowskie w kwocie 5,00 złotych (słownie pięć złotych) miesięcznie</List.Item>
        </List>

        <p className="text-slate-500 dark:text-slate-300 font-bold underline mb-4">Co należy zrobić, zostać członkiem Stowarzyszenia "OSA" ?</p>

        <List ordered className="text-slate-500 dark:text-slate-300">
          <List.Item>Zgłosić chęć członkostwa do Zarządu Stowarzyszenia lub jego Punktów Konsultacyjnych.</List.Item>
          <List.Item>Zapoznać się z treścią ustawy o stowarzyszeniach, statutem Stowarzyszenia, ustawy o ochronie danych osobowych, ustawy o pożytku publicznym i wolontariacie.</List.Item>
          <List.Item>Wypełnić deklarację członkowską, na podstawie której podejmowana jest przez Zarząd Stowarzyszenia decyzja o przyjęciu w poczet członków.</List.Item>
          <List.Item>Wpłacić jednorazowe wpisowe w kwocie 20,00 złotych(słownie dwadzieścia złotych).</List.Item>
        </List>
      </article>

      <div>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        <p className="text-slate-500 dark:text-slate-300 font-bold underline mb-4">Sponsorzy</p>
        <List className="styled text-slate-500 dark:text-slate-300 mb-4">
          <List.Item>Andrzej Machała, firma "Ksero" w Gdańsku, ul. Szeroka 119/120</List.Item>
          <List.Item>Piotr Badowski, firma Usługowego-Budowlana ORION - P.B. w Sopocie, ul. Wybickiego 41/1</List.Item>
          <List.Item>Ewa Wosik - Biuro rachunkowe "Ekspert" 80-874 Gdańsk, ul. Na Stoku 48</List.Item>
          <List.Item>EXPAK Sp. z o.o. Kalinowszczyzna 43, 20-201 Lublin</List.Item>
          <List.Item>Pełnomocnik Rządu do Spraw Równego Statusu Kobiet i Mężczyzn Kancelarii Prezesa Rady Ministrów</List.Item>
          <List.Item>Fundacja Ośrodek Informacji Środowisk Kobiecych OŚKA</List.Item>
          <List.Item>Miasto Stołeczne Warszawa</List.Item>
          <List.Item>Miasto Gdańsk</List.Item>
          <List.Item>Fundacja "Fundusz Współpracy" w Warszawie</List.Item>
          <List.Item>Burmistrz Gminy Łomianki</List.Item>
          <List.Item>Komisja Międzyzakładowa NSZZ Solidarność POiW w Jeleniej Górze</List.Item>
          <List.Item>Miejski Ośrodek Pomocy Rodzinie w Kielcach ul. 1-go Maja 196</List.Item>
          <List.Item>Bank PKO BP S.A. I O/ Gdańsk</List.Item>
          <List.Item>Samorząd Wojewodztwa Pomorskiego</List.Item>
          <List.Item>Prezydent Miasta Racibórz</List.Item>
          <List.Item>Danuta Bochnke - Zakład Usług Kserograficznych "KOPIA", Gdańsk ul. Tartaczna 1</List.Item>
        </List>
      </div>

      <div>
        <p className="text-slate-500 dark:text-slate-300 font-bold underline mb-4">Współpracownicy</p>
        <List className="text-slate-500 dark:text-slate-300 mb-4">
          <List.Item>Gdańskie Stowarzyszenie Pedagogów Praktyków - tel. (058) 307 30 61</List.Item>
          <List.Item>Fundacja Centrum Praw Kobiet Odział w Gdańsk - tel. (058) 341 79 15</List.Item>
          <List.Item>Towarzystwo Przyjaciół Gdańska - Gdańsk ul. Warzywnicza 10</List.Item>
          <List.Item>Jarosław Ślęzak - radca prawny</List.Item>
          <List.Item>Grzegorz Krzemiński - autor rysynków w materiałach OSA</List.Item>
          <List.Item>Maria Skodowska - psycholog kliniczny</List.Item>
          <List.Item>Polskie Towarzystwo Pomocy Telefonicznej</List.Item>
          <List.Item>Gdański Telefon Zaufania Anonimowy Przyjaciel - tel. (58) 301 00 00</List.Item>
        </List>
      </div>

    </div>
  )
}

export default Nowy