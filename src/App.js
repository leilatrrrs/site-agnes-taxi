import  React  from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Transports from "./pages/Transports";
import Vehicules from "./pages/Vehicules";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} /> 
      <Route path="/transports" element={<Transports />}/>
      <Route path="/vehicules" element={<Vehicules />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
