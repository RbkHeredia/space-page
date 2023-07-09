import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    
    <div className='app'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home />} />
        </Routes>
        
      </Router>
      
    </div>
  )
}

export default App
