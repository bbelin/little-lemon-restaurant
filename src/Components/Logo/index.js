// Components
import { Link } from 'react-router-dom';
import image from '../../assets/logo.svg'

// Styles
import './logo.css'

export const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/'>
        <img src={image} alt='logo' />
      </Link>
    </div>
  )
}
