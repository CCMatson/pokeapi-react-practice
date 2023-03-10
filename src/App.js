import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PokeList from './pages/Poke/PokeList'
import PokeDetails from './components/PokeDetails/PokeDetails';
import PokeSearch from './pages/PokeSearch/PokeSearch';
import CapturePoke from './components/CapturePoke/CapturePoke';
import GetRandom from './pages/GetRandom/GetRandom'
import Battle from './components/Battle/Battle';

function App() {


  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PokeList />}/>
        <Route path="/details" element={<PokeDetails />}/>
        <Route path="/poke-search" element={<PokeSearch />}/>
        <Route path="/catch-em" element={<CapturePoke />}/>
        <Route path="/random" element={<GetRandom />}/>
        <Route path="/battle" element={<Battle />}/>
        </Routes>
        
    </div>
  );
}

export default App;
