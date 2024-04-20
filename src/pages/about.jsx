/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom"
import { List, Tabs } from "flowbite-react"


const About = () => {
  return (
    <>
   
      <div className="grid justify-left sm:mx-0 md:mx-0 lg:mx-20 xl:mx-40 2xl:mx-80">

      <Tabs aria-label="Tabs with underline" style="underline">

      <Tabs.Item active title="Struktura organizacyjna">

      <article>
        <h1 className="text-indigo-700 dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">Struktura organizacyjna.</h1>
      
      <p className="text-slate-500 dark:text-slate-200 font-bold underline mb-4">Zarząd stowarzyszenia:</p>
        <table className="mb-4">
          <tbody>
            <tr>
              <td className="text-left dark:text-slate-200"><b>Prezes</b></td>
              <td className="text-right dark:text-slate-200">Mariola Żarnoch-Elas</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200"><b>Wiceprezes</b></td>
              <td className="text-right dark:text-slate-200">Małgorzata Kopydłowska</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200"><b>Członek Zarządu</b></td>
              <td className="text-right dark:text-slate-200">Łukasz Chwalisz</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200"><b>Członek Zarządu</b></td>
              <td className="text-right dark:text-slate-200">Barbara Cichosz</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200"><b>Członek Zarządu</b></td>
              <td className="text-right dark:text-slate-200">Jadwiga Mucha</td>
            </tr>
          </tbody>
        </table>

        <p className="text-slate-500 dark:text-slate-200 font-bold underline mb-4">Komisja rewizyjna:</p>
        <table className="mb-4">
          <tbody>
            <tr>
              <td className="text-left dark:text-slate-200"><b>Przewodnicząca</b></td>
              <td className="text-center dark:text-slate-200">Bożena Luchowska</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200"><b>Członek komisji</b></td>
              <td className="text-right dark:text-slate-200">Elżbieta Król</td>
            </tr>
    
          </tbody>
        </table>

        <p className="text-slate-500 dark:text-slate-200 font-bold underline hover:text-indigo-400 mb-4"><Link to="/osa/kontakt">Punkty konsultacyjne:</Link></p>
        <table className="mb-4">
          <tbody>
  
            <tr>
              <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><a href="mailto:osa_stowarzyszenie@wp.pl">Gdańsk</a></b></td>
              <td className="text-right dark:text-slate-200">Mariola Żarnoch</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><a href="mailto:osa-lublin@wp.pl">Lublin</a></b></td>
              <td className="text-right dark:text-slate-200">Jadwiga Mucha</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><a href="mailto:osa-jeleniagora@wp.pl">Jelenia Góra</a></b></td>
              <td className="text-right dark:text-slate-200">Lech Rębisz</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><a href="mailto:osa-leczyca@wp.pl">Łęczyca</a></b></td>
              <td className="text-right dark:text-slate-200">Katarzyna Ratajczyk - Rusek</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><a href="mailto:osa-luban@wp.pl">Lubań</a></b></td>
              <td className="text-right dark:text-slate-200">Katarzyna Urbaniak</td>
            </tr>
            <tr>
              <td className="text-left dark:text-slate-200 hover:underline hover:text-indigo-400"><b><a href="mailto:osa-poznan@wp.pl">Poznań</a></b></td>
              <td className="text-right dark:text-slate-200">Łukasz Chwalisz</td>
            </tr>

          </tbody>
        </table>
        </article>
      </Tabs.Item>
      <Tabs.Item title="Cele statutowe">

          <article>

            <h1 className="text-indigo-700 dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">Cele statutowe stowarzyszenia:</h1>

            <List className="text-slate-500 dark:text-slate-200 mb-4">
              <List.Item>podnoszenie świadomości w zakresie profilaktyki i skutecznej walki z mobbingiem, rozumianym jako przemoc psychiczna w pracy</List.Item>
              <List.Item>nagłaśnianie problemu mobbingu, pokazywanie skutków ekonomicznych, zdrowotnych i moralnych występowania tego zjawiska</List.Item>
              <List.Item>pomoc osobom zagrożonym i poddawanym mobbingowi</List.Item>
              <List.Item>prowadzenie poradnictwa prawnego, psychologicznego i medycznego, prowadzenie działalności mediacyjnej</List.Item>
              <List.Item>działania na rzecz prawa do pracy w warunkach pozbawionych przemocy psychicznej</List.Item>
              <List.Item>współpraca z osobami i instytucjami w zakresie zbierania informacji i wymiany doświadczeń</List.Item>
              <List.Item>działania na rzecz ochrony zdrowia osób doświadczających mobbingu</List.Item>
              <List.Item>przeciwdziałanie wszelkim przejawom dyskryminacji w miejscu pracy oraz działanie na rzecz równego statusu kobiet i mężczyzn</List.Item>
              <List.Item>przeciwdziałanie wykluczeniu społecznemu osób mobbingowanych</List.Item>
            </List>

            <p className="text-slate-500 dark:text-slate-200 font-bold underline mb-4">Realizujemy poprzez:</p>

            <List className="text-slate-500 dark:text-slate-200 mb-4">
              <List.Item>zrzeszanie w swoich szeregach specjainteresowanych identyfikacji i prewencji przypadków dyskryminacji i przemocy w miejscu pracy</List.Item>
              <List.Item>pomoc prawną, medyczną, psychologiczną</List.Item>
              <List.Item>tworzenie grup samopomocowych i grup wsparcia dla ofiar mobbingu</List.Item>
              <List.Item>działalność wydawniczą i dystrybucyjną materiałów edukacyjnych</List.Item>
              <List.Item>współpracę z mediami</List.Item>
              <List.Item>organizowanie szkoleń w zakresie technik mediacyjnych oraz negocjacyjnych</List.Item>
              <List.Item>rozszerzanie działalności przez tworzenie punktów konsultacyjnych i oddziałów na terenie całego kraju</List.Item>
              <List.Item>podejmowanie prac badawczych, analiz i ekspertyz związanych z mobbingiem i jego skutkami</List.Item>
              <List.Item>szkolenie mediatorów i negocjatorów</List.Item>
              <List.Item>pozyskiwanie sponsorów</List.Item>
              <List.Item>współpracę z innymi organizacjami w kraju i zagranicą</List.Item>
              <List.Item>organizowanie i prowadzenie zjazdów, konferencji, szkoleń i prelekcji</List.Item>
              <List.Item>podejmowanie działań zmierzających do powstania prawnych uregulowań przeciwdziałających mobbingowi</List.Item>
              <List.Item>inicjowanie, opiniowanie i uczestniczenie w pracach legislacyjnych, dotyczących tematyki związanej z działalnością prowadzoną przez stowarzyszenie</List.Item>
            </List>

          </article>
 
      </Tabs.Item>

        <Tabs.Item title="Jak dołączyć ?">

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

        </Tabs.Item>


      <Tabs.Item title="Trochę historii">
      <h1 className="text-indigo-700 dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">Historia powstania stowarzyszenia "OSA".</h1>

        <article >    
          
            <p className="text-slate-500 dark:text-slate-200 mb-4">W Polsce stowarzyszenia antymobbingowe zaczęły powstawać od roku 2001. 
              Jako pierwsze powstało Ogólnopolskie Stowarzyszenie Antymobbingowe OSA z siedzibą w Gdańsku. 
              Pomysł utworzenia stowarzyszenia zrodził się w dniu 17.09.2001r. na Konferencji zorganizowanej 
              przez Korporację Organizacji Samopomocowych KOS. Grupa inicjatywna zrealizowała ten pomysł 17 października
              2001 r. organizując zebranie założycielskie. W dniu 19 października 2001r. zgłoszono rejestrację w 
              Krajowym Rejestrze Sądowym. W trakcie rejestracji w dniu 19.01.2002r. nastąpiła zmiana składu Komitetu 
              Założycielskiego - Pani Barbara Grabowska pismami z dnia 13.01.2002r. i 16.01.2002r. wycofała się z 
              komitetu założycielskiego rezygnując z członkostwa i miana założyciela Stowarzyszenia. 
              Stowarzyszenie zostało zarejestrowane w KRS w dniu 11 lutego 2002r. pod pozycją 0000088951. 
              Następnie kolejno powstawały Stowarzyszenie Antymobbingowe pod patronatem Barbary Grabowskiej 
              z siedzibą w Gdańsku, Krajowe Stowarzyszenie Antymobbingowe z siedzibą we Wrocławiu, 
              Stowarzyszenie Centrum Antymobbingowe z siedzibą w Warszawie.
            </p>

            <p className="text-slate-500 dark:text-slate-200 mb-4">
              <b>Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA"</b>powstało w odpowiedzi na zapotrzebowanie społeczne w zakresie pomocy prawnej i
              psychologicznej osób pokrzywdzonych w miejscu pracy. Pomaga poszkodowanym odnaleźć się w takich trudnych sytuacjach i znaleźć rozwiązanie.
              Jest organizacją o statusie pożytku publicznego. Zakres przestrzenny działania obejmuje teren całej Polski. Swoją siedzibę ma w Gdańsku
              przy ul. Warzywniczej 10/C/7. Skupia w swoich szeregach członków i wolontariuszy, z których pierwsza część osobiście doświadczyła działań
              mobbingowych lub zetknęła się z nimi w swoim otoczeniu, a druga część to osoby świadome zagrożeń, jakie niesie ze sobą mobbing i popierające
            </p>    

            <p className="text-slate-500 dark:text-slate-200 mb-4">
              Misją Stowarzyszenia jest niesienie pomocy osobom poszkodowanym na skutek mobbingu oraz kształtowanie środowiska pracy wolnego od wszelkiej agresji,
              przemocy psychicznej i fizycznej. W oparciu o nasze doświadczenie pragniemy przyczyniać się do rozwoju kapitału ludzkiego sprzyjającemu zanikowi zjawiska
              mobbingu w miejscu pracy. Strategią Stowarzyszenia jest stworzenie sieci pomocowej na terenie całego kraju poprzez tzw. Punkty Konsultacyjne Zarządu OSA,
              prowadzące działalność na swoim terenie. Punkty Konsultacyjne Zarządu OSA ściśle współpracują z Zarządem - są jego bezpośrednim poszerzeniem i reprezentacją
              na danym terenie. Punkt prowadzony jest przez członka Stowarzyszenia, który spełnia warunki wstąpienia do Stowarzyszenia i chce podjąć się takiej funkcji.
              Zarząd Stowarzyszenia w razie potrzeby koordynuje działanie punktów oraz monitoruje i kontroluje całość działalności. Utrzymuje też kontakt z osobami pokrzywdzonymi
              z terenu całej Polski w formie korespondencji internetowej, pocztowej i telefonicznej.</p>

            <p className="text-slate-500 dark:text-slate-200 mb-4">
              Stowarzyszenie opiera swoją działalność na nieodpłatnym świadczeniu pomocy przez członków stowarzyszenia i osoby współpracujące oraz na pracy wolontariuszy. 
              Na swoją działalność pozyskuje środki finansowe ze składek członkowskich, darowizn, sponsoringu oraz dotacji z instytucji samorządowych, państwowych skierowanych
              na konkretne programy pomocowe. Aspekt ten jest istotnym czynnikiem ograniczającym działalność stowarzyszenia z uwagi na niewielkie możliwości ich pozyskiwania.
              Stowarzyszenie od początku swojego istnienia prowadzi nieodpłatną pomoc psychologiczno-prawną w formie informacji, edukacji, poradnictwa. Organizuje i prowadzi
              samopomocowe grupy wsparcia dla osób pokrzywdzonych przemocą w pracy. W programach grup znajdują się elementy prawne mobbingu. Prowadzi badania grup pracowniczych
              pod kątem występowania zjawiska mobbingu. Pomaga wielu osobom z całego kraju w pisaniu przez nich prac licencjackich, magisterskich, podyplomowych i doktoranckich
              na temat mobbingu, udostępniając im materiał dotyczący rozwiązań poszczególnych przypadków. Prowadzi szkolenia, doradztwo dla pracodawców w zakresie przeciwdziałania
              mobbingowi.</p>

            <p className="text-slate-500 dark:text-slate-200 mb-4">
              Świadomi niedoskonałości sposobów realizacji podstawowych regulacji prawnych, aktywnie uczestniczymy w procesie wpływania na uświadamianie praw i obowiązków zainteresowanych
              stron zarówno w konkretnych sytuacjach (ocena interpretacji przepisów prawnych w trakcie sporów sądowych) jak i ciągłe sygnalizowanie (interwencje) odpowiedzialnym instytucjom
              (organy ścigania, ministerstwa, inspekcje pracy, wojewodowie itp.) konieczności postępowania zgodnie z obowiązującym prawem.</p>
          
          </article>

      </Tabs.Item>

    </Tabs>

    </div>

     </>

     );
  }

export default About