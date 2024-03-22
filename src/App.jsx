import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { Header } from "./components/header";
import { Foooter } from "./components/footer";



function App() {

  return (
    <div className="container mx-auto">
      <Header/>
      <Routes>
        <Route path="/osa" element={<Home/>} />
        <Route path="/osa/about" element={<About/>} />
      </Routes>
      <Foooter/>
      </div>
  );

}

export default App
