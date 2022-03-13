import React, {useState} from 'react';
import Street from './components/Street/Street'
import Resident from './components/Resident/Resident';
import './App.css';

function App() {
  const [street, setStreet] = useState('Street not selected');
  return (
    <div className="App">
      <header className="App-header">
        <Street setStreet={setStreet}/>
        <Resident street={street}/>
      </header>
    </div>
  );
}

export default App;
