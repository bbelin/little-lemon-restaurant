// Components
import { Nav } from '../Nav'
import { Logo } from '../../Components/Logo'

// Styles
import './Header.css'

export const Header = () => {
  return (
    <header className='grid-container main-header'>
      <div className='col-4 tab-col-8 desk-col-2'>
      </div>
      <div className='col-2 tab-col-2 desk-col-2'>
        <Logo />
      </div>
      <div className='mobile-hide tab-col-1 desk-col-1'></div>
      <div className='tab-col-5 desk-col-5'>
        <Nav />
      <div className='desk-col-2'>
      </div>
      </div>
    </header>
  )
}
