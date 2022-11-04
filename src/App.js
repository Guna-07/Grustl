import './App.css';
import './pages/Home.css';
import './pages/Services.css';
import './pages/Mancave.css';
import './pages/Connect.css';
import './pages/Career.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Mancave from './pages/Mancave';
import Connect from './pages/Connect';
import Career from './pages/Career';



function App() {
  
  return (
      <>
         <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/Services' element={<Services />} />
            <Route path='/Mancave' element={<Mancave/>} />
            <Route path='/Connect' element={<Connect/>} />
            <Route path='/Career' element={<Career/>} />
          </Routes>
         </Router>
      </>
  );
}

export default App;
