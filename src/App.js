import './App.css';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './components/Coin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="coin/:id" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;
