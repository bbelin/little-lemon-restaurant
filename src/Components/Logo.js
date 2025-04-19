// Components
import { Link } from 'react-router-dom';
import image from '../assets/Logo.svg'

export const Logo = () => {
  return (
    <Link to='/'>
      <img src={image} alt='logo' />
    </Link>
  )
}
