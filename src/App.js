import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Login } from './Pages/Login'
import { Menu } from './Pages/Menu'
import { OrderOnline } from './Pages/OrderOnline'
import { Reservations } from './Pages/Reservations'

// Styles
import './Styles/Reset.css';
import './Styles/Variables.css'
import './Styles/Grid.css';
import './Styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
}

export default App;
