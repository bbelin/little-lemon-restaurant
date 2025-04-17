import { Link } from 'react-router-dom'
import './Nav.css'

export const Nav = () => {
  return (
    <nav>
      <ul className='navigation'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/menu'>Menu</Link>
        </li>
        <li>
          <Link to='/reservations'>Reservations</Link>
        </li>
        <li>
          <Link to='/order-online'>Order Online</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
