import Street from './components/Street/Street'
import Resident from './components/Resident/Resident';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Street />
        <Resident/>
      </header>
    </div>
  );
}

export default App;
