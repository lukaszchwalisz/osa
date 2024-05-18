import { List } from "flowbite-react"

export const Cechy = () => {
  return (
    <div>
        <article>
        <h1 className="border border-gray-200 rounded-lg shadow p-4 bg-blue-50 text-slate-700 text-center dark:text-slate-300 dark:bg-gray-800 dark:border-gray-700 font-bold font-mono text-2xl mt-8 mb-4">Cechy mobbingu</h1>
        <p className="text-slate-500 dark:text-slate-300 mb-4">
        Na podstawie swoich badań Heinz Leymann, wyróżnił 45 aktywności mobbingowych. Według jego obserwacji mobbing można diagnozować w przypadku, gdy wobec ofiary stosowana jest, chociaż jedna z wymienionych niżej sytuacji:
        </p>
        
        <p className="text-slate-500 font-bold dark:text-slate-300 dark:font-bold mb-4">
        Odziaływania zaburzające możliwości komunikowania się:
        </p>

        <List ordered className="text-slate-500 dark:text-slate-300 mb-4">
          <List.Item>Ograniczanie przez przełożonego możliwości wypowiadania się</List.Item>
          <List.Item>Stałe przerywanie wypowiedzi</List.Item>
          <List.Item>Ograniczanie przez kolegów możliwości wypowiadania się</List.Item>
          <List.Item>Reagowanie na uwagi krzykiem lub głośnym wymyślaniem i pomstowaniem</List.Item>
          <List.Item>Ciągłe krytykowanie wykonywanej pracy</List.Item>
          <List.Item>Ciągłe krytykowanie życia prywatnego</List.Item>
          <List.Item>Napastowanie przez telefon</List.Item>
          <List.Item>Ustne groźby i pogróżki</List.Item>
          <List.Item>Groźby na piśmie</List.Item>
          <List.Item>Ograniczanie kontaktu przez poniżające, upokarzające gesty i spojrzenia</List.Item>
          <List.Item>Różnego rodzaju aluzje, bez jasnego wyrażania się wprost</List.Item>

        </List>

        <p className="text-slate-500 font-bold dark:text-slate-300 dark:font-bold mb-4">
        Oddziaływania zaburzające stosunki społeczne:
        </p>

        <List ordered className="text-slate-500 dark:text-slate-300 mb-4">
          <List.Item>Unikanie przez przełożonego rozmów z ofiarą</List.Item>
          <List.Item>Nie dawanie możliwości odezwania się</List.Item>
          <List.Item>W pomieszczeniu, gdzie ofiara pracuje, przesadzenie na miejsce z dala od kolegów</List.Item>
          <List.Item>Zabronienie kolegom rozmów z ofiarą</List.Item>
          <List.Item>Traktowanie jak powietrze</List.Item>
        </List>

        <p className="text-slate-500 font-bold dark:text-slate-300 dark:font-bold mb-4">
        Działania mające na celu zaburzyć społeczny odbiór osoby:
        </p>

        <List ordered className="text-slate-500 dark:text-slate-300 mb-4">
          <List.Item>Mówienie źle za plecami danej osoby</List.Item>
          <List.Item>Rozsiewanie plotek</List.Item>
          <List.Item>Podejmowanie prób ośmieszenia</List.Item>
          <List.Item>Sugerowanie choroby psychicznej</List.Item>
          <List.Item>Kierowanie na badanie psychiatryczne</List.Item>
          <List.Item>Wyśmiewanie niepełnosprawności czy kalectwa</List.Item>
          <List.Item>Parodiowanie sposobu chodzenia, mówienia lub gestów w celu ośmieszenia osoby</List.Item>
          <List.Item>Nacieranie na polityczne albo religijne przekonania</List.Item>
          <List.Item>Żarty i prześmiewanie życia prywatnego</List.Item>
          <List.Item>Wyśmiewanie narodowości</List.Item>
          <List.Item>Zmuszanie do wykonywania prac naruszających godność osobistą</List.Item>
          <List.Item>Fałszywe ocenianie zaangażowania w pracy</List.Item>
          <List.Item>Kwestionowanie podejmowanych decyzji</List.Item>
          <List.Item>Wołanie na ofiarę używając sprośnych przezwisk lub innych wyrażeń, mających ją poniżyć</List.Item>
          <List.Item>Zaloty lub słowne propozycje seksualne</List.Item>
          <List.Item>Nie dawanie ofierze żadnych zadań do wykonania</List.Item>
          <List.Item>Odbieranie prac, zadanych wcześniej do wykonania</List.Item>
          <List.Item>Zlecanie wykonania prac bezsensownych</List.Item>
          <List.Item>Dawanie zadań poniżej jego umiejętności</List.Item>
          <List.Item>Zarzucanie wciąż nowymi pracami do wykonania</List.Item>
          <List.Item>Polecenia wykonywania obraźliwych dla ofiary zadań</List.Item>
          <List.Item>Dawanie zadań przerastających możliwości i kompetencje ofiary w celu jej zdyskredytowania</List.Item>
        </List>

        <p className="text-slate-500 font-bold dark:text-slate-300 dark:font-bold mb-4">
        Działania mające szkodliwy wpływ na zdrowie ofiary:
        </p>
          
        <List ordered className="text-slate-500 dark:text-slate-300 mb-4">
          <List.Item>Zmuszanie do wykonywania prac szkodliwych dla zdrowia</List.Item>
          <List.Item>Grożenie przemocą fizyczną</List.Item>
          <List.Item>Stosowanie niewielkiej przemocy fizycznej</List.Item>
          <List.Item>Znęcanie się fizyczne</List.Item>
          <List.Item>Przyczynianie się do ponoszenia kosztów, w celu zaszkodzenia poszkodowanemu</List.Item>
          <List.Item>Wyrządzanie szkód psychicznych w miejscu zamieszkania, lub miejscu pracy ofiar</List.Item>
          <List.Item>Działania o podłożu seksualnym</List.Item>
        </List>

      </article>
        
    </div>
  )
}
