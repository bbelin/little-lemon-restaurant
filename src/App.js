import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import { Header } from './Components/Header'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Login } from './Pages/Login'
import { Menu } from './Pages/Menu'
import { OrderOnline } from './Pages/OrderOnline'
import { Reservations } from './Pages/Reservations'
import { ConfirmedBooking } from './Pages/ConfirmedBooking'

// Styles
import './Styles/Reset.css';
import './Styles/Variables.css'
import './Styles/Grid.css';
import './Styles/App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order-online' element={<OrderOnline />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/confirmed-booking' element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
