import NavBar from '../../components/navbar';
import { Routes, Route } from "react-router-dom";

import './styles.css';
import Home from '../home';
import Footer from '../../components/footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
