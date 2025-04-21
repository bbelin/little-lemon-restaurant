import { Link } from 'react-router-dom';
import './Nav.css';

const navElements = [
  {
    text: 'Home',
    navigatesTo: '/'
  },
  {
    text: 'About',
    navigatesTo: '/about'
  },
  {
    text: 'Menu',
    navigatesTo: '/menu'
  },
  {
    text: 'Reservations',
    navigatesTo: '/reservations'
  },
  {
    text: 'Order Online',
    navigatesTo: '/order-online'
  },
  {
    text: 'Login',
    navigatesTo: '/login'
  }
]

export const Nav = () => {
  return (
    <nav>
      <ul className='navigation'>
        {navElements.map(({ navigatesTo, text }, idx) => {
          return (
            <li>
              <Link to={navigatesTo}>{text}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}
