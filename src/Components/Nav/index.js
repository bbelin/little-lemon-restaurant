import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

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
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  return (
    <>
      <button className='tablet-hide desktop-hide burger' onClick={toggleMenu} aria-label='Toggle menu'>
        <span className='burger-line'></span>
        <span className='burger-line'></span>
        <span className='burger-line'></span>
      </button>

      <nav className='desktop-nav mobile-hide'>
        <ul className='navigation'>
          {navElements.map(({ navigatesTo, text }, idx) => (
            <li key={idx}>
              <Link to={navigatesTo}>{text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className='mobile-nav tablet-hide desktop-hide'>
          <ul>
            <button className='close-btn' onClick={toggleMenu} aria-label='Close menu'>✕</button>
            {navElements.map(({ navigatesTo, text }, idx) => (
              <li key={idx} onClick={toggleMenu}>
                <Link to={navigatesTo}>{text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
