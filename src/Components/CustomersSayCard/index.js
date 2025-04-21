// Styles
import './CustomersSayCard.css'

export const CustomersSayCard = ({ name, review, image }) => {
  return (
    <div className='customer-says-card'>
      <div>
        <p>{review}</p>
        <div className='customer-info'>
          <img src={image} alt={`customer`} />
          <span>{`-- ${name}`}</span>
        </div>
      </div>
    </div>
  );
}
