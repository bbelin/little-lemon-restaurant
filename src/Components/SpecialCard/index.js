import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

// Styles
import './SpecialCard.css';

export const SpecialCard = ({ image, name, price, body }) => {
  return (
    <div className='special-card'>
      <img src={image} alt='restaurant food' />
      <div>
        <header>
          <h5>{name}</h5>
          <span className='price'>{price}</span>
        </header>
        <p className='body'>{body}</p>
        <p className='order-delivery'>
          <span>Order a delivery</span>
          <FontAwesomeIcon icon={faMotorcycle} />
        </p>
      </div>
    </div>
  )
}