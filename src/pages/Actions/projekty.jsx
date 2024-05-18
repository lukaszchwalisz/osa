/* eslint-disable react/no-unescaped-entities */
import { List } from "flowbite-react"

const Projekty = () => {
  return (
        <div>
        <article>
        <h1 className="border border-gray-200 rounded-lg shadow p-4 bg-blue-50 text-slate-700 text-center dark:text-slate-300 dark:bg-gray-800 dark:border-gray-700 font-bold font-mono text-2xl mt-8 mb-4">PROJEKTY</h1>
          <p className="text-slate-500 dark:text-slate-300 mb-4">
          Od dnia 10 stycznia 2023r. realizujemy nieodpłatną pomoc prawno - psychologiczną skierowaną do mieszkańców biorących udział w procesie pracy,
          osób zagrożonych i dotkniętych zjawiskiem mobbingu oraz dyskryminacji, opartą na przesłankach takich jak: bezpłatność, bezstronność, otwartość
          dla wszystkich, poufność, niezależność, aktualność i rzetelność. Finansowaną ze środków własnych stowarzyszenia oraz dofinansowania ze środków
          Miasta Gdańsk w ramach Gdańskiego Funduszu Równości 2023.
          </p>

          <List ordered className="text-slate-500 dark:text-slate-300 mb-4">
            <List.Item><b>Pomoc prawna polega na wyjaśnianiu wątpliwości prawnych osoby zgłaszającej się w przedstawionej przez nią sprawie:</b></List.Item>

              <List nested className="text-slate-500 dark:text-slate-300 mb-4">
                <List.Item>udzieleniu odpowiedzi na pytania związane z obowiązującym prawem w zakresie wiążącym się ze
                  sprawą tj. udzieleniu informacji i edukacji o treści obowiązującego prawa, o prawach i 
                  obowiązkach wynikających z obowiązujących uregulowań prawnych oraz instytucjach właściwych dla
                  załatwienia sprawy a także o trybie postępowania</List.Item>
                <List.Item>wskazaniu możliwych prawnie dróg postępowania</List.Item>
              </List>

            <p className="text-slate-500 dark:text-slate-300 mb-4">Pomoc udzielana jest w kontakcie bezpośrednim, 
                  telefonicznie, pocztą internetową oraz pocztą tradycyjną poprzez:</p>

              <List  nested className="text-slate-500 dark:text-slate-300 mb-4"> 
                <List.Item>udzielanie indywidualnych konsultacji osobom zwracającym się o pomoc</List.Item>
                <List.Item>ocenę faktów związanych z przemocą w pracy z uwzględnieniem kwalifikacji prawnej problemów</List.Item>
                <List.Item>ocenę realnych szans powodzenia postępowań sądowych w sprawach z zakresu mobbingu i dyskryminacji (ocena mocy dowodów)</List.Item>
                <List.Item>pomoc w formułowaniu treści dokumentów</List.Item>
                <List.Item>w razie potrzeby w postępowaniu sądowym prawnik funkcjonuje jako pełnomocnik Stowarzyszenia, organizacji społecznej broniącej praw człowieka, 
                          jeśli problem zostanie zakwalifikowany do tego typu pomocy</List.Item>
              </List>

              
              <p className="text-slate-500 pt-4 dark:text-slate-300"> 
                Pomoc prowadzi Konsultant Krajowy Stowarzyszenia, pani mgr Jadwiga Mucha.</p>
              <p className="text-slate-500 dark:text-slate-300"> 
               tel.: 504 659 911 (w dni powszednie w godzinach 18.00 - 20.00)</p>
               <p className="text-slate-500 dark:text-slate-300"> 
                <a href="mailto:osa-lublin@wp.pl">email.: osa-lublin@wp.pl</a>         
              </p>
              
              

            <List.Item className="pt-4"><b>Pomoc psychologiczna realizowana w formie społecznego wsparcia grupowego w otwartej grupie wsparcia prowadzonej przez psychologów mgr Barbarę Jabłońską - Komar i mgr Paulinę Pers,
              gdzie realizowany jest program psychoprofilaktyczny "Pracuję bez lęku" o tematyce zajęć dostosowanej do zapotrzebowania uczestników t.j.:</b></List.Item>
            </List>

            <List nested className="text-slate-500 dark:text-slate-300 mb-4"> 
              <List.Item>
              podstawowe informacje o mobbingu i dyskryminacji. Czym jest dyskryminacja i mobbing, różnice? Czynniki występowania dyskryminacji i mobbingu. Fazy mobbingu.
              </List.Item>
              <List.Item className="">
              skutki w/w zjawisk: zdrowotne (nerwobóle, choroba wrzodowa itd.);psychologiczne (stres w pracy); motywacyjne(wypalenie zawodowe)
              </List.Item>
              <List.Item className="">
              diagnoza sytuacji dyskryminacyjnej i mobbingowej: relacja pracodawca/przełożony (analiza transakcyjna); konflikt w pracy; komunikacja w pracy
              </List.Item>
              <List.Item className="">
              moja postawa wobec dyskryminacji i mobbingu: postawa agresywna; postawa uległa; postawa asertywna; pozytywne praktyczne wzorce
              </List.Item>
              <List.Item className="mb-4">
              skuteczne sposoby walki z dyskryminacją i mobbingiem: autoprezentacja; poczucie własnej wartości; negocjacje/ mediacje; konflikt; radzenie sobie ze stresem; zarządzanie czasem
              </List.Item>
            </List>

            <p className="text-slate-500 dark:text-slate-300 mb-4">
            W trakcie zajęć można:
            </p>

            <List nested className="text-slate-500 dark:text-slate-300 mb-4"> 
              <List.Item className="">
              otrzymać wsparcie i pomoc od osób rozumiejących ten problem
              </List.Item>
              <List.Item className="">
              spotkać osoby o podobnym doświadczeniu
              </List.Item>
              <List.Item className="">
              uzyskać wiedzę o mechanizmach, konsekwencjach przemocy w pracy
              </List.Item>
              <List.Item className="">
              uzyskać diagnozę sytuacji
              </List.Item>
              <List.Item className="">
              uzyskać pomoc w rozwiązywaniu problemów emocjonalnych
              </List.Item>
              <List.Item className="">
              uzyskać pomoc w odzyskaniu utraconych praw
              </List.Item>
              <List.Item className="">
              uzyskać motywację do aktywnego uczestnictwa w grupie i udzielanie wzajemnego wsparcia z 
              wykorzystaniem własnej wiedzy i umiejętności
              </List.Item>
            </List>

            <p className="text-slate-500 dark:text-slate-300 mb-4">
            Zajęcia odbywają się we wtorki od 10 stycznia 2023r w godzinach od 17.00 do 19.00 w pomieszczeniach
            użyczonych odpłatnie przez Towarzystwo Przyjaciół Gdańska w Gdańsku przy ul. Warzywniczej 10.
            </p>
            <p className="text-slate-500 dark:text-slate-300 mb-4">
            W okresie od 1 czerwca do 8 grudnia 2023r. zajęcia odbywają się dzięki dofinansowaniu ze środków Miasta Gdańsk
            w ramach Gdańskiego Funduszu Równości 2023.
            </p>
            <p className="text-slate-500 dark:text-slate-300 mb-4">
            Serdecznie zapraszamy do uczestnictwa :)
            </p>
            <p className="text-slate-500 dark:text-slate-300 mb-4">
            Konsultacje indywidualne w Punkcie Konsultacyjnym Zarządu Stowarzyszenia w Gdańsku mieszczącym się w Gdańsku przy ul. Warzywniczej 10A
            (domofon nr 6) odbywają się we wtorki od godz. 16.00 po uprzednim koniecznym umówieniu się telefonicznym: 795 159 795.
            </p>      
        </article>

        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
        
        <article >
          <p className="text-slate-500 dark:text-slate-300 mb-4">
          Programy i projekty stworzone i zrealizowane przez Ogólnopolskie Stowarzyszenie Antymobbingowe OSA (pliki pdf):
          </p>  
          <p className="text-slate-500 font-semibold dark:text-slate-300 m-3"><a href="/osa/pdf/programy.pdf" type="application/pdf" target="_blank">Programy realizowane w latach 2003 r. - 2018 r.</a></p>
          <iframe src="/osa/pdf/programy.pdf" width="100%" height="750px"></iframe>
          <p className="text-slate-500 font-semibold dark:text-slate-300 m-3"><a href="/osa/pdf/projekty.pdf" type="application/pdf"target="_blank">Programy realizowane w latach 2003 r. - 2022 r.</a></p>
          <iframe src="/osa/pdf/projekty.pdf" width="100%" height="750px"></iframe>
            
        </article>
        
        
        
        </div>


  )
}

export default Projekty