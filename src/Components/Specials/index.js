// Components
import { SpecialsCard } from '../SpecialsCard'
import { Button } from '../Button'

// Styles
import './Specials.css';

// images
import bruschetta from '../../assets/bruschetta.png'
import salad from '../../assets/salad.jpg'
import dessert from '../../assets/dessert.jpg'

const specials = [
  {
    image: salad,
    name: 'Greek salad',
    price:'$12.99',
    body: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  },
  {
    image: bruschetta,
    name: 'Bruschetta',
    price:'$5.99',
    body: 'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
  },
  {
    image: dessert,
    name: 'Lemon Dessert',
    price:'$5.00',
    body: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
  }
]

export const Specials = () => {
  return (
    <section className='component-section specials'>
      <div className='grid-container'>
        <div className='desk-col-2'></div>
        <div className='desk-col-8 title-wrapper'>
          <h2>This Week Specials</h2>
          <Button navigateTo={'/menu'}>Online Menu</Button>
        </div>
        <div className='desk-col-2'></div>
      </div>
      <div className='grid-container'>
        <div className='desk-col-2'></div>
        <div className='desk-col-8'>
          <ul>
            {specials.map(({ name, price, body, image }, idx) => {
              return <li key={idx}><SpecialsCard name={name} price={price} body={body} image={image} /></li>
            })}
          </ul>
          <div className='desk-col-2'></div>
      </div>
      </div>
    </section>
  )
}