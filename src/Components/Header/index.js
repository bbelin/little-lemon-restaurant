// Components
import { Nav } from '../Nav'
import { Logo } from '../../Components/Logo'

// Styles
import './Header.css'

export const Header = () => {
  return (
    <header className='grid-container main-header'>
      <div className='desk-col-2'>
      </div>
      <div className='desk-col-2'>
        <Logo />
      </div>
      <div className='desk-col-6'>
        <Nav />
      </div>
      <div className='desk-col-2'>
      </div>
    </header>
  );
}
