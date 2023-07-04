import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CryptoCurrency from './components/CryptoCurrency';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptoCurrency />} />
          <Route path="details/:name" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
