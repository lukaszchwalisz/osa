import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header";
import { Foooter } from "./components/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Actions from "./pages/actions";
import Wiedza from "./pages/wiedza";
import Galeria from "./pages/galeria";
import Kontakt from "./pages/kontakt";



function App() {

  return (
    <div className="dark:bg-indigo-950"> 
    <div className="container mx-auto">
      <Header/>
      <Routes>
        <Route path="/osa" element={<Home/>} />
        <Route path="/osa/about" element={<About/>} />
        <Route path="/osa/działania" element={<Actions/>} />
        <Route path="/osa/wiedza" element={<Wiedza/>} />
        <Route path="/osa/galeria" element={<Galeria/>} />
        <Route path="/osa/kontakt" element={<Kontakt/>} />
      </Routes>
      <Foooter/>
      </div>
    </div>
  );

}

export default App
