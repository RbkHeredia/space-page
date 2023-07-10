import './App.css';
import Navbar from './components/navbar';
import Crew from './pages/crew';
import Destination from './pages/destination';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    
    <div className='app'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/destination" element={ <Destination />} />
          <Route path="/crew" element={ <Crew />} />
        </Routes>
        
      </Router>
      
    </div>
  )
}

export default App
