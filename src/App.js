import React, { useState} from 'react';
import { Routes, Route } from "react-router-dom";
import Street from './components/Street/Street';
import Territorios from './components/Territorios/Territorios';
import Resident from './components/Resident/Resident';
import Print from './components/Print/Print'
import SuccessAlert from './components/SuccessAlert/SuccessAlert'
import './App.css';

function App() {
  const [street, setStreet] = useState("...");
  const [isTerr, setIsTerr] = useState(false);
  const [territorio, setTerritorio] = useState(["none"]);
  const [terrSelected, setTerrSelected] = useState("");
  const [strName, setStrName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={isTerr ? 
          <>
            <SuccessAlert showAlert={showAlert}/>
            <Street strName={strName} setStrName={setStrName} setStreet={setStreet} street={street} isTerr={isTerr} territorio={territorio}/>
            <Resident street={street} terrSelected={terrSelected} setIsTerr={setIsTerr} strName={strName} setShowAlert={setShowAlert}/></> 
              : 
            <Territorios setTerritorio={setTerritorio} setIsTerr={setIsTerr} setTerrSelected={setTerrSelected} terrSelected={terrSelected}/>} />
          <Route path="print" element={<Print terrSelected={terrSelected} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
