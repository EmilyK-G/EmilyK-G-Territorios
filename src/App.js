import React, { useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Street from './components/Street/Street';
import Territorios from './components/Territorios/Territorios';
import Resident from './components/Resident/Resident';
import Print from './components/Print/Print'
import './App.css';

function App() {
  const [street, setStreet] = useState("--no-street--");
  const [isTerr, setIsTerr] = useState(false);
  const [territorio, setTerritorio] = useState(["none"]);
  const [terrSelected, setTerrSelected] = useState("");
  
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={isTerr ? 
          <><Street setStreet={setStreet} street={street} isTerr={isTerr} territorio={territorio}/>
          <Resident street={street} terrSelected={terrSelected}/></> : 
          <Territorios setTerritorio={setTerritorio} setIsTerr={setIsTerr} setTerrSelected={setTerrSelected}/>} />
          <Route path="print" element={<Print />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
