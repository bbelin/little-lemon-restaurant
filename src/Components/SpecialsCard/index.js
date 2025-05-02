import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

// Styles
import './SpecialsCard.css';

export const SpecialsCard = ({ image, name, price, body }) => {
  return (
    <div className='specials-card'>
      <img className='mobile-hide' src={image} alt='restaurant food' />
      <div>
        <header>
          <h5>{name}</h5>
          <span className='price'>{price}</span>
        </header>
        <p className='body'>{body}</p>
        <p className='order-delivery'>
          <span>Order a delivery</span>
          <FontAwesomeIcon icon={faMotorcycle} className='test' />
        </p>
      </div>
    </div>
  )
}