/* eslint-disable react/no-unescaped-entities */

import { List, ListItem } from "flowbite-react"
import { Link } from "react-router-dom"

const Konfg = () => {
  return (
    <div className="grid justify-center mt-40 m-4 lg:mx-20 xl:mx-40 2xl:mx-80">
    <article > 
    <h1 className="text-indigo-700 bg-slate-50 p-4 text-center dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">K O N F E R E N C J A</h1>

    <p className="text-slate-500 text-1xl text-center font-bold dark:text-slate-200 mb-4">
    "Mobbing - zalążek klęski czy sukcesu??" - Gdańsk 2004 r.
    </p>

    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Celem projektu "Mobbing - zalążek klęski czy sukcesu??" było pozyskanie jak najszerszej reprezentacji społeczeństwa do współpracy w ograniczaniu występowania
    zjawiska przemocy w pracy w ramach projektu z Europejskiego Funduszu Społecznego. W szczególności zaś:
    </p>

    <List className="text-slate-500 dark:text-slate-200 mb-4">
    <List.Item>poszerzenie wiedzy obywateli na temat zjawiska mobbingu, jego źródeł i kosztów społecznych z nim związanych</List.Item>
    <List.Item>stworzenie jak najszerszej platformy współpracy w zakresie prewencji antymobbingowej i pomniejszania negatywnych skutków tego zjawiska</List.Item>
    <List.Item>wzbudzenie zainteresowania środowiska współpracą nad stworzeniem nowej jakości pracy i zarządzania zespołami ludzkimi zgodnymi ze strategicznymi założeniami polityki socjalnej UE</List.Item>
    <List.Item>podzielenie się ze środowiskiem wiedzą i doświadczeniem Stowarzyszenia w rozwiązywaniu problemów związanych z niewłaściwymi stosunkami w pracy</List.Item>
    </List>

    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Założony cel został osiągnięty w 100%, o czym świadczy frekwencja uczestników, ilość zgłoszeń do współpracy i wyniki ankiety ewaluacyjnej. Osiągnięto go poprzez kampanię informacyjną i zorganizowanie konferencji,
    która odbyła się w dniu 29 czerwca 2004r. w godz. od 8.30 do 15.30 w Sali Okrągłej Pomorskiego Urzędu Marszałkowskiego mieszczącego się w Gdańsku przy ul. Okopowej. Program konferencji podzielono na trzy bloki
    tematyczne w których wystąpiło 10-ciu prelegentów, przedstawicieli: Politechniki Gdańskiej, Szpitala Klinicznego Akademii Medycznej w Gdańsku, Uniwersytetu Gdańskiego, Gdańskiego Związku Pracodawców, 
    Ogólnopolskiego Stowarzyszenia Antymobbingowego OSA, Rodzinnego Ośrodka Diagnostyczno-Konsultacyjnego.
    </p>
    
    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Założeniem organizatorów było pozyskanie jak najszerszej reprezentacji społeczeństwa do współpracy w ograniczaniu występowania zjawiska przemocy w pracy (mobbingu).
    Program obejmował zakres tematyczny służący poszerzeniu wiedzy na temat zjawiska, jego źródeł, następstw, możliwości przeciwdziałania. Wzbudzeniu zainteresowania
    środowiska współpracą nad stworzeniem nowej jakości zarządzania zespołami ludzkimi,jak najszerszej platformy współpracy w zakresie prewencji antymobbingowej i pomniejszania
    negatywnych skutków tego zjawiska. Podzieleniu się wiedzą i doświadczeniem Stowarzyszenia w rozwiązywaniu problemów związanych z niewłaściwymi stosunkami w pracy.
    </p>
    
    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Pierwszy blok - "prawny" ujęto w tematy:
    </p>

    <List ordered className="text-slate-500 dark:text-slate-200 mb-4">
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaJŚlężak.pdf" type="application/pdf" target="_blank">"Mobbing i jego aspekty prawne"</Link> - przedstawił mgr Jarosław Ślęzak- radca prawny, asystent w Zakładzie Prawa Gospodarczego Wydziału Zarządzania i Ekonomii Politechniki Gdańskiej.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaELinowska04.pdf" type="application/pdf" target="_blank">"Regulacje prawne w oświacie pozwalają na stosowanie powszechnego mobbingu. Prawo oświatowe kreuje dyrektora - mobbera."</Link> - przedstawiła mgr Elżbieta Linowska - nauczyciel dyplomowany, 
        w tym 10 lat na stanowisku dyrektora szkoły średniej. Przedstawiciel Zarządu OSA na obszar woj. podlaskiego.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaLeskaŚlężak.pdf" type="application/pdf" target="_blank">"Europejska Polityka Społeczna: najważniejsze międzynarodowe akty społeczne obowiązujące w UE, Europejska Agenda Społeczna a Europejski Model Społeczny, Fundusze Strukturalne dla Polski w ramach Polityki Społecznej UE."</Link> - przedstawiła dr Joanna Leska - Ślęzak -pracownik naukowo - dydaktyczny Instytutu Politologii Uniwersytetu Gdańskiego.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaJMucha.pdf" type="application/pdf" target="_blank">"Uwaga, I ty możesz być mobbingowanym"</Link> - przedstawiła mgr Jadwiga Mucha - specjalista w zakresie prawa pracy, pracownik Urzędu Pracy w Lublinie, przedstawiciel Zarządu OSA na obszar wojew. lubelskiego.</List.Item>
    </List>
    
    <p className="text-slate-500 dark:text-slate-200 mb-4">
    W bloku drugim przedstawiony został aspekt socjologiczno -psychologiczno - psychiatryczny mobbingu:
    </p>

    <List ordered className="text-slate-500 dark:text-slate-200 mb-4">
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaHMachel.pdf" type="application/pdf" target="_blank">"Niektóre uwarunkowania społeczne mobbingu"</Link> - przedstawił prof. nadzw. Henryk Machel - kierownik Zakładu Patologii Społecznej i Resocjalizacji Uniwersytetu Gdańskiego zajmujący się patologią instytucji,
         społecznymi uwarunkowaniami zachowań dewiacyjnych i profilaktyką w tym zakresie.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaMSkłodowska.pdf" type="application/pdf" target="_blank">"Zjawisko mobbingu widziane "okiem psychologa"</Link> - przedstawiła mgr Maria Skodowska - psycholog, biegły sądowy, mediator. I stopień specjalizacji z psychologii klinicznej i specjalizacji poradnictwa rodzinnego.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaSępKowalikowa.pdf" type="application/pdf" target="_blank">"Konsekwencje psychiatryczne mobbingu - depresja, zaburzenia adaptacyjne i lękowe"</Link> - przedstawiła dr Barbara Sęp - Kowalikowa - dr nauk medycznych, specjalista chorób psychicznych, 
        adiunkt I Kliniki Chorób Psychicznych Akademii Medycznej w Gdańsku, Ordynator Oddziału Dziennego Nerwic.</List.Item>
    </List>

    <p className="text-slate-500 dark:text-slate-200 mb-4">
    W trzecim bloku ekonomiczno-organizacyjnym dot. przedsiębiorstw przedstawione zostały tematy:
    </p>
    
    <List ordered className="text-slate-500 dark:text-slate-200 mb-4">
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaMWrzesiński.pdf" type="application/pdf" target="_blank">"Mobbing jako problem etyki organizacji"</Link> - przedstawił dr Michał Wrzesiński - wykładowca i konsultant ds. zarządzania, specjalizujący się w zagadnieniach etyki organizacji oraz komunikacji internetowej.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaSZajączkowskaJakimiak.pdf" type="application/pdf" target="_blank">"Ekonomiczne aspekty mobbingu. Zagadnienie kapitału ludzkiego"</Link> - miała przedstawić mgr Sylwia Zajączkowska - Jakimiak - asystent Instytutu Nauk Ekonomicznych PAN, Zakład Gospodarki Światowej, 
    która z powodów zdrowotnych nie przybyła na konferencję do Gdańska.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaJCzuchnowski.pdf" type="application/pdf" target="_blank">"Zarządzanie procesowe podstawą upełnomocniania pracowników"</Link> - przedstawił mgr inż. Janusz Czuchnowski - starszy wykładowca Politechniki Gdańskiej Wydziału Zarządzania i Ekonomii.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/pdf/konfg/prelekcjaJKlapkowski.pdf" type="application/pdf" target="_blank">"Pracodawcy wobec zjawiska mobbingu"</Link> - przedstawił mgr inż. Jan Klapkowski - Dyrektor Biura Gdańskiego Związku Pracodawców.</List.Item>
    <List.Item><Link className="underline hover:text-indigo-400" to="/osa/galeria" type="application/pdf" target="_blank">Ujęcie rysunkowe</Link> - Grzegorz Krzemiński.</List.Item>
    </List>


    <p className="text-slate-500 text-center font-semibold dark:text-slate-200 mb-4">
    Krótkie podsumowanie konferencji
    </p>

    <p className="text-slate-500 dark:text-slate-200 mb-4">
    W konferencji wzięło udział 227 osób - jak wynika z list wpisanych uczestników nie licząc organizatorów i prelegentów, ale zainteresowanie problematyką socjologiczno - psychologiczno-psychiatryczną mobbingu spowodowało
    napływ większej ilości osób , którzy nie rejestrowali się na listach uczestników. Można to było stwierdzić po tym, że wszystkie miejsca siedzące na sali konferencyjnej były zajęte, a sala ma 299 miejsc. Uczestnikami
    konferencji byli w większości mieszkańcy województwa pomorskiego reprezentujący różnorodne środowiska. Między innymi byli przedstawiciele organizacji gospodarczych, samorządowych, środowisk medycznych, wymiaru sprawiedliwości,
    nauczyciele, kierownicy działów HR, przedstawiciele środowisk naukowych i artystycznych, organizacji pozarządowych, związków zawodowych, mediów. Ważnym elementem przygotowań do konferencji były warsztaty teatralne. 
    Podczas warsztatów młodzi aktorzy przy udziale członków Stowarzyszenia mogli zapoznać się z problematyką mobbingu i pracować nad poszukiwaniem teatralnych form prezentacji różnych jego aspektów. Scenki te zostały przygotowane tak,
    by mogły towarzyszyć prelegentom w prezentowanych przez nich tematach i ukazywać charakterystyczne cechy zachowań mobbingowych. Uczestnicy otrzymali materiały konferencyjne ujęte w formie teczki, których opracowanie graficzne
    wykonała Małgorzata Rodek.
    </p>

    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Wśród uczestników została przeprowadzona ocena konferencji za pomocą rozprowadzanych ankiet ewaluacyjnych. Z ilości 227 ankiet zostało wypełnionych i zwróconych przez uczestników 93 ankiety co stanowi 41% wydanych ankiet.
    Z analizy ankiet wynika, iż:
    </p>

    <List className="text-slate-500 dark:text-slate-200 mb-4">
    <List.Item>99% wypełniających stwierdziło, że konferencja przyczyniła się do zwiększenia ich wiedzy na temat zjawiska mobbingu</List.Item>
    <List.Item>87% wypełniających opowiedziało się, iż przedstawiona na konferencji forma teatralna wniosła nową jakość w odbiorze tego zjawiska a 13% miało zdanie przeciwne</List.Item>
    </List>


    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Na pytanie czy konferencja zaspokoiła oczekiwania:
    </p>

    <List className="text-slate-500 dark:text-slate-200 mb-4">
    <List.Item>w zakresie programu - 85% wypełniających odpowiedziało twierdząco, negatywnie 2% a częściowo 16%</List.Item>
    <List.Item>w doborze prelegentów -71% odpowiedziało pozytywnie,1% negatywnie, 29% częściowo</List.Item>
    <List.Item>w zakresie materiałów konferencyjnych - 68% ocen pozytywnych , 1% negatywnie, 29% częściowo</List.Item>
    <List.Item>w zakresie lokalizacji konferencji - 85% pozytywnie,2% negatywnie,5% częściowo</List.Item>
    <List.Item>odnośnie dostępności informacji o konferencji - 51% pozytywnie, 21%negatywnie, 24% częściowo</List.Item>
    <List.Item>zainteresowanych współpracą w zakresie prewencji i pomniejszania skutków mobbingu było 79% odpowiadających:</List.Item>
        <List unstyled nested className="text-slate-500 dark:text-slate-200 mb-4">
            <List.Item>- w formie nawiązania partnerstwa 33%</List.Item>
            <List.Item>- wspierania Stowarzyszenia 18%</List.Item>
            <List.Item>- udziału w wolontariacie 18%</List.Item>
            <List.Item>- otrzymywania materiałów informacyjnych 64%</List.Item>
            <List.Item>- inne formy 20%</List.Item>
        </List>     
    </List>

    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Końcowe wnioski i uwagi były bardzo różnorodne. Ogólnie wynika z nich, że:
    </p>

    <List className="text-slate-500 dark:text-slate-200 mb-4">
        <ListItem>w społeczeństwie jest duże zapotrzebowanie na wiedzę o prezentowanym zjawisku mobbingu</ListItem>
        <ListItem>ludzie oczekują więcej takich konferencji</ListItem>
        <ListItem>chcą aby więcej czasu przeznaczyć w nich na dyskusję z prelegentami</ListItem>
        <ListItem>odbytą konferencję oceniają jako zorganizowaną bardzo dobrze, sprawnie i ciekawie</ListItem>
        <ListItem>dobrano interesujący zakres tematyczny oraz prelegentów o wysokim poziomie</ListItem>
        <ListItem>podobał się sposób przedstawienia zjawiska w formie scenek teatralnych</ListItem>
    </List>

    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Na listę osób zainteresowanych współpracą wpisało się 18 osób i instytucji różnego rodzaju, między innymi 
    Sekcja Psychologów Komendy Wojewódzkiej Policji, Okręgowy Inspektorat Pracy w Gdańsku, Ogólnopolski Zawiązek Zawodowy Pielęgniarek i Położnych.
    </p>

  
    <p className="text-slate-500 dark:text-slate-200 mb-4">
    Konferencja współfinansowana była ze środków Unii Europejskiej w ramach Counterpart Fund.
    </p>
    </article>
    </div>
  )
}

export default Konfg