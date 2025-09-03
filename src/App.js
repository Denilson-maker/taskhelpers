import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Servico from "./Servico";
import Sobre from "./Sobre";
import Contato from "./Contato";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servico" element={<Servico />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default App;
