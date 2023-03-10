import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PokeList from './pages/Poke/PokeList'
import PokeDetails from './components/PokeDetails/PokeDetails';
import PokeSearch from './pages/PokeSearch/PokeSearch';

function App() {


  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PokeList />}/>
        <Route path="/details" element={<PokeDetails />}/>
        <Route path="/poke-search" element={<PokeSearch />}/>
        </Routes>
    </div>
  );
}

export default App;
