// Styles
import './CustomersSay.css';

// Components
import { CustomersSayCard } from '../CustomersSayCard'
import daniel from '../../assets/customer-Daniel.jpg'
import sarah from '../../assets/customer-Sarah.jpg'


const reviews = [
  {
    name: 'Sarah L.',
    review: '“The food was absolutely delicious and the atmosphere felt so cozy and welcoming. Can’t wait to come back!”',
    image: sarah
  },
  {
    name: 'Daniel M.',
    review: '“Incredible service and every dish was full of flavor. Easily one of my favorite spots in town!”',
    image: daniel
  }
]

export const CustomersSay = () => {
  return (
    <section className='component-section customers-say'>
      <div className='grid-container'>
        <div className='desk-col-2'></div>
        <div className='desk-col-8'>
          <h2>What Customers Say</h2>
        </div>
      </div>
      <div className='grid-container'>
        <div className='desk-col-2'></div>
        {reviews.map(({name, image, review}, idx) => {
          return (
            <div className='desk-col-4' key={idx}>
              <CustomersSayCard name={name} image={image} review={review} />
            </div>
          )
        })}
      </div>
    </section>
  )
}