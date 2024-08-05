import  React  from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Transports from "./pages/Transports";
import Vehicules from "./pages/Vehicules";
import Error from "./pages/Error";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} /> 
      <Route path="/transports" element={<Transports />}/>
      <Route path="/vehicules" element={<Vehicules />}/>
      <Route path="/*" element={<Error />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
