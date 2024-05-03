import { List } from "flowbite-react"

export const Pracodawcy = () => {
  return (
    <div>
        <article>
        <h1 className="border border-gray-200 rounded-lg shadow p-4 bg-cyan-50 text-slate-700 text-center dark:text-slate-300 dark:bg-gray-900 dark:border-gray-700 font-bold font-mono text-2xl mt-8 mb-4">Przeciwdziałanie (pracowdawcy)</h1>
        <p className="text-slate-500 dark:text-slate-300 mb-4">
        Pracodawca może podjąć działania, aby zminimalizować mobbing lub nie dopuścić do powstania tego zjawiska:
        </p>

        <List className="text-slate-500 dark:text-slate-300 mb-4">
        <List.Item>dozór i badanie nastrojów wśród pracowników</List.Item>
        <List.Item>badanie zachowań pracowników</List.Item>
        <List.Item>monitorowanie pracowników, u których można dostrzec chęć mszczenia się na innych za swoje niepowodzenia</List.Item>
        <List.Item>rozwiązywanie w zarodku konfliktów</List.Item>
        <List.Item>wykrywanie ukrywanych problemów</List.Item>
        <List.Item>w relacji pracodawca - pracownik umiejętnie zarządzać swoimi podwładnymi i kontrolować ich poczynania, 
          poczuwać się do obowiązku utrzymywania pozytywnej atmosfery i dobrych stosunków pomiędzy pracownikami</List.Item>

        </List>


        <p className="text-slate-500 dark:text-slate-300 mb-4">
        Bardzo ważną sprawą jest motywowanie pracowników. Nie trzeba prześladować pracowników,
        aby lepiej pracowali. Pieniądz jest jednym ze słabszych bodźców, ale aby inne bodźce mogły zadziałać ta
        motywacja powinna zaistnieć. Stosowanie bodźców oraz ich skuteczność zależy od tego, w jaki sposób
        układają się relacje przełożony - podwładny. Bodźce pozamaterialne związane z pracą to różnorodność
        zadań, nadawanie znaczenia każdej pracy, autonomia działania i ograniczenie kontroli, informowanie
        pracowników o wynikach ich pracy, całościowy charakter zadań, aby pracownik widział swoje miejsce w
        całości zadania, współudział w zarządzaniu, delegowanie uprawnień dające poczucie wpływu na to,
        co się dzieje w firmie. Bodźce pozamaterialne związane z osobowością pracownika to sprawiedliwa
        ocena pracy i pracownika, propagowanie pożądanych postaw i wzorców zachowań, awans stanowiskowy,
        system pochwał, wyróżnień i odznaczeń, współzawodnictwo, podziękowania i uwaga poświęcana
        pracownikom, jasne informacje dotyczące zagrożenie utratą pracy, sposoby wyrażenia dezaprobaty,
        system kar, nagan i upomnień.
        </p>
       </article>

    </div>
  )
}
