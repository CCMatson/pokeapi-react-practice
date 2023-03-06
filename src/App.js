import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PokeList from './pages/Poke/PokeList'
import PokeDetails from './components/PokeDetails/PokeDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PokeList />}/>
        <Route path="/details" element={<PokeDetails />}/>
        </Routes>
    </div>
  );
}

export default App;
