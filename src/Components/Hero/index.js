// Styles
import './Hero.css';

// Components
import { Button } from '../Button'
import image from '../../assets/restaurantfood.jpg'

export const Hero = () => {
  return (
    <section className='component-section hero'>
      <div className='grid-container'>
        <div className='col-4 tab-col-8 desk-col-2'></div>
        <div className='col-4 desk-col-4'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button navigateTo='/reservations'>Reserve a Table</Button>
        </div>
        <div className='col-4 desk-col-4 image-wrapper'>
          <img className='mobile-hide' src={image} alt='restaurant food' />
        </div>
      </div>
    </section>
  )
}