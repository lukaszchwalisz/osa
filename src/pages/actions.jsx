/* eslint-disable react/no-unescaped-entities */
import { Tabs } from "flowbite-react";
import Projekty from "./Actions/projekty";
import Komunikaty from "./Actions/komunikaty";
import Tax_ngo from "./Actions/1_5ngo";
import Nowy from "./Actions/nowy";
import { Helmet } from "react-helmet";

const Actions = () => {
  return (
    <>
      <Helmet>
        <title>
          Projekty - Ogólnopolskie Stowarzyszenie Antymobbingowe "OSA"
        </title>
      </Helmet>
      <div className="grid justify-center m-4 lg:mx-20 xl:mx-40 2xl:mx-80">
        <Tabs aria-label="Tabs with underline" style="underline">
          <Tabs.Item active title="PROJEKTY">
            <Projekty />
          </Tabs.Item>

          <Tabs.Item title="KOMUNIKATY">
            <Komunikaty />
          </Tabs.Item>

          <Tabs.Item title="WSPÓŁPRACA">
            <Nowy />
          </Tabs.Item>

          <Tabs.Item title="DOFINANSOWANIE">
            <Tax_ngo />
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default Actions;
