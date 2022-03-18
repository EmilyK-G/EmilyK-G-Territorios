import React, { useState} from 'react';
import Street from './components/Street/Street';
import Territorios from './components/Territorios/Territorios';
import Resident from './components/Resident/Resident';
import './App.css';

function App() {
  const [street, setStreet] = useState("--no-street--");
  const [isTerr, setIsTerr] = useState(false);
  const [territorio, setTerritorio] = useState(["none"]);
  const [terrSelected, setTerrSelected] = useState("");
  // useEffect(()=>{
  //   console.log(territorio)
  // }, [territorio])

  
  return (
    <div className="App">
      <header className="App-header">
        {isTerr ? 
          <><Street setStreet={setStreet} street={street} isTerr={isTerr} territorio={territorio}/>
          <Resident street={street} terrSelected={terrSelected}/></> : 
          <Territorios setTerritorio={setTerritorio} setIsTerr={setIsTerr} setTerrSelected={setTerrSelected}/>}
      </header>
    </div>
  );
}

export default App;
