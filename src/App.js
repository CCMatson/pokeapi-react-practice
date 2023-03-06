import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PokeList from './pages/Poke/PokeList'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/poke" element={<PokeList />}/>
        </Routes>
    </div>
  );
}

export default App;
