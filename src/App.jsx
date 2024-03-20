import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import { Navbar } from "./components/navbar";



function App() {

  return (
    <div className="container mx-auto">
      <Navbar/>
      <Routes>
        <Route path="/osa/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </div>
  );

}

export default App
