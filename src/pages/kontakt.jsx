/* eslint-disable react/no-unescaped-entities */
import { Table } from "flowbite-react";
"use client";

const Kontakt = () => {
  return (
    <>
    <div className="grid justify-center m-4 lg:mx-20 xl:mx-40 2xl:mx-80">
    
      <h1 className="text-indigo-700 bg-slate-50 p-4 text-center dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">
        Kontakt</h1>
        
        <p className="text-slate-500 text-center dark:text-slate-200 mb-4">
        <b>Adres tylko do korespondencji:</b>
        <ul className="list-none">
          <li className="text-slate-500 dark:text-slate-200">80-838 Gdańsk</li>
          <li className="text-slate-500 dark:text-slate-200">ul. Warzywnicza 10C/7</li>
          <li className="text-slate-500 dark:text-slate-200">tel.: (058) 301 98 72</li>
          <li className="text-slate-500 dark:text-slate-200">kom.: 795 159 795</li>
          <li className="text-slate-500 dark:text-slate-200">email: <a href="mailto:osa_stowarzyszenie@wp.pl">osa_stowarzyszenie@wp.pl</a></li>
          <li className="text-slate-500 dark:text-slate-200">www: <a href="http://www.osastowarzyszenie.pl/start.html" target="_blank">Strona WWW OSA - [STARA]</a></li>
          <li className="text-slate-500 dark:text-slate-200">www: <a href="https://lukaszchwalisz.github.io/osa/" target="_blank">Strona WWW OSA - [NOWA]</a></li>
        </ul>
        </p>

      <h1 className="text-indigo-700 bg-slate-50 p-4 text-center dark:text-indigo-400 font-bold font-mono text-2xl mt-8 mb-4">
        Punkty konsultacyjne</h1>

        <div className="overflow-x-auto">
        <Table>
        <Table.Head>
          <Table.HeadCell>Przedstawiciel</Table.HeadCell>
          <Table.HeadCell>Miasto</Table.HeadCell>
          <Table.HeadCell>Adres kontaktowy</Table.HeadCell>
          <Table.HeadCell>Info</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Mariola Żarnoch-Elas
            </Table.Cell>
            <Table.Cell>Gdańsk</Table.Cell>
            <Table.Cell>
              <ul className="list-none">
                <li className="text-slate-500 dark:text-slate-200">80-838 Gdańsk</li>
                <li className="text-slate-500 dark:text-slate-200">ul. Warzywnicza 10C/7</li>
                <li className="text-slate-500 dark:text-slate-200">tel.: (058) 301 98 72</li>
                <li className="text-slate-500 dark:text-slate-200">kom.: 795 159 795</li>
                <li className="text-slate-500 dark:text-slate-200">email: <a href="mailto:osa_stowarzyszenie@wp.pl">osa_stowarzyszenie@wp.pl</a></li>
                <li className="text-slate-500 dark:text-slate-200">www: <a href="http://www.osastowarzyszenie.pl/start.html" target="_blank">http://www.osastowarzyszenie.pl/</a></li>
              </ul>
            </Table.Cell>
            <Table.Cell>
              Zapraszamy na konsultacje indywidualne po uprzednim umówieniu się telefonicznie lub mailowo
              we wtorki 16-17 oraz na grupę wsparcia we wtorki w godz. 17-19.
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Jadwiga Mucha
            </Table.Cell>
            <Table.Cell>Lublin (woj. lubelskie)</Table.Cell>
            <Table.Cell>
              <ul className="list-none">
                <li className="text-slate-500 dark:text-slate-200">20-860 Lublin</li>
                <li className="text-slate-500 dark:text-slate-200">ul. Szpinalskiego 2/22</li>
                <li className="text-slate-500 dark:text-slate-200">kom.: 504 659 911</li>
                <li className="text-slate-500 dark:text-slate-200">email: <a href="mailto:osa-lublin@wp.pl">osa-lublin@wp.pl</a></li>
              </ul>
            </Table.Cell>
            <Table.Cell>
            w godz: 18:00 - 21:00 w dni powszednie
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Lech Rębisz</Table.Cell>
            <Table.Cell>Jelenia Góra (woj. dolnośląskie)</Table.Cell>
            <Table.Cell>
              <ul className="list-none">
                <li className="text-slate-500 dark:text-slate-200">58-573 Piechowice</li>
                <li className="text-slate-500 dark:text-slate-200">ul. Sienkiewicza 7</li>
                <li className="text-slate-500 dark:text-slate-200">kom.: 606 28 40 76</li>
                <li className="text-slate-500 dark:text-slate-200">email: <a href="mailto:osa-jeleniagora@wp.pl">osa-jeleniagora@wp.pl</a></li>
              </ul>
              </Table.Cell>
              <Table.Cell></Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Katarzyna Ratajczyk - Rusek
            </Table.Cell>
            <Table.Cell>Łęczyca (woj. łódzkie)</Table.Cell>
            <Table.Cell>
              <ul className="list-none">
                <li className="text-slate-500 dark:text-slate-200">99-100 Łęczyca</li>
                <li className="text-slate-500 dark:text-slate-200">ul. Zachodnia 25/28</li>
                <li className="text-slate-500 dark:text-slate-200">tel. (024) 721 60 60</li>
                <li className="text-slate-500 dark:text-slate-200">email: <a href="mailto:osa-leczyca@wp.pl">osa-leczyca@wp.pl</a></li>
              </ul>
            </Table.Cell>
            <Table.Cell>
            Kontakt telefoniczny we wtorki i czwartki po godz. 18:00
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Katarzyna Urbaniak
            </Table.Cell>
            <Table.Cell>Lubań (woj. dolnośląskie)</Table.Cell>
            <Table.Cell>
              <ul className="list-none">
                <li className="text-slate-500 dark:text-slate-200">kom.: 602 588 149</li>
                <li className="text-slate-500 dark:text-slate-200">email: <a href="mailto:osa-luban@wp.pl">osa-luban@wp.pl</a></li>
              </ul>
            </Table.Cell>
            <Table.Cell>
            kontakt telefoniczny w środy w godz. 15:00 - 17:00
            </Table.Cell>
          </Table.Row>

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Łukasz Chwalisz
            </Table.Cell>
            <Table.Cell>Poznań (woj. wielkopolskie)</Table.Cell>
            <Table.Cell>
              <ul className="list-none">
                <li className="text-slate-500 dark:text-slate-200">60-803 Poznań</li>
                <li className="text-slate-500 dark:text-slate-200">ul. Polna 74/9</li>
                <li className="text-slate-500 dark:text-slate-200">kom.: 665 696 372</li>
                <li className="text-slate-500 dark:text-slate-200">email: <a href="mailto:osa-poznan@wp.pl">osa-poznan@wp.pl</a></li>
              </ul>
            </Table.Cell>
            <Table.Cell>
            kontakt telefoniczny w środy w godz. 18:00 - 20:00 (gdybym nie odebrał telefonu, proszę wysłać zapytanie na maila)
            </Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
      </div>
     
     </div>
    </>
  )
}

export default Kontakt
