// Components
import { Nav } from '../Nav'
import { Logo } from '../Logo'

// Styles
import './Header.css'

export const Header = () => {
  return (
    <header className='grid main-header'>
      <div className='grid-col-2-desktop'>
      </div>
      <div className='grid-col-2-desktop'>
        <Logo />
      </div>
      <div className='grid-col-6-desktop'>
        <Nav />
      </div>
      <div className='grid-col-2-desktop'>
      </div>
    </header>
  );
}
