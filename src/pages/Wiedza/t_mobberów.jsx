/* eslint-disable react/no-unescaped-entities */

import { List } from "flowbite-react"

export const T_mobberów = () => {
  return (
    <div>
        <article>
        <h1 className="text-indigo-700 bg-slate-50 p-4 text-center dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">Typologie mobberów</h1>
        <p className="text-slate-500 dark:text-slate-200 mb-4">
        G. Namie i R. Namie amerykańscy psychologowie, wyróżnili trzy typy prześladowców w firmie (Sidor Rządkowska, 2003):
        </p>

        <List className="text-slate-500 dark:text-slate-200 mb-4">
        
          <List.Item>oprawca chroniczny, któremu szykanowanie innych daje satysfakcję. Najczęściej wynika to z zaburzeń osobowości</List.Item>
          <List.Item>oprawca przypadkowy, który działa w sposób nieświadomy i można powiedzieć, że niechcący</List.Item>
          <List.Item>oprawca oportunista, który nie cofnie się przed niczym, żeby osiągnąć swój cel. Jeżeli dąży do awansu,
             a sytuacja w firmie i okoliczności, w jakich znajduje się jego potencjalna ofiara mu sprzyjają, zaatakuje</List.Item>

        </List>


        <p className="text-slate-500 dark:text-slate-200 mb-4">
        Inna typologia mobberów zaproponowana przez G. Namie i R. Namie obejmuje cztery obrazowe rodzaje prześladowców, nazwane dość żartobliwie, mimo że dotykają poważnych kwestii (Sidor Rządkowska, 2003):
        </p>

        <List unstyled className="text-slate-500 dark:text-slate-200 mb-4">
        
          <List.Item><b>"Dwugłowy wąż"</b> - (doktor Jekyll i mister Hyde); jakoest to człowiek z pozoru życzliwy zainteresowanym, dlatego ludzie mu ufają. Oczekuje od innych informacji pogrążających upatrzoną ofiarę. Uniemożliwia jej wykonywanie obowiązków poprzez zatajanie i fałszowanie danych.
             Przypisuje sobie sukcesy swojej ofiary, jednocześnie oficjalnie ze współczuciem odnosząc się do jego porażek. Jest to osoba obłudna i dwulicowa</List.Item>
          <List.Item><b>"Wieczny kłamca"</b>, który innych i ich działania ocenia negatywnie, natomiast swoje uważa za perfekcyjnie wykonane. Taki człowiek ostentacyjnie lekceważy wypowiedzi innych, przybiera obraźliwe miny i gesty, w sposób napastliwy rozmawia z pogardzanymi przez siebie ludźmi.</List.Item>
          <List.Item><b>"Dyktator"</b> - demonstruje swoją władzę przez kontrolowaniem działań pracowników, ich korespondencję i dokumenty, ignorowanie przyjętych norm i reguł, próby odizolowania pracownika od reszty grupy.</List.Item>
          <List.Item><b>"Krzykliwa Mimi"</b> - to osoba hałaśliwa, wybuchowa i impulsywna, przez co wprowadza atmosferę nerwowości i chaosu.</List.Item>

        </List>

        <p className="text-slate-500 dark:text-slate-200 mb-4">
        L. Glass (1997) wyróżnia cztery typy ludzi toksycznych nadając im nieco odmienne nazwy i charakterystyki:
        </p>

        <List unstyled className="text-slate-500 dark:text-slate-200 mb-4">
        
          <List.Item><b>"Bezwzględni tyrani"</b>, czyli osoby nieżyczliwe, nieobliczalne i aroganckie; tyrani dążą do tego, aby wszystko było podporządkowane ich woli. Są uparci, nie empatyczni i gwałtowni. Czerpią radość z poniżania innych.</List.Item>
          <List.Item><b>"Napastliwi krytycy"</b>, którzy są małostkowi i żądają przesadnej perfekcji; bez skrępowania wytykają niedociągnięcia innych osób, są w tym cyniczni.</List.Item>
          <List.Item><b>"Maniacy kontroli"</b>, którzy chcą panować nad wszystkim; są sztywni w swoich działaniach i łatwo wpadają w gniew, gdy sprawy wymykają im się spod kontroli.</List.Item>
          <List.Item><b>"Chodząca doskonałość"</b>, czyli osoby samolubne; uważają się za nieomylne i wszystkowiedzące, a przez to lepsze od innych. Gdy coś idzie niezgodnie z ich sztywnym planem zaprzeczają temu kryjąc się za parawanem hipokryzji.</List.Item>

        </List>


      </article>

    </div>
  )
}
