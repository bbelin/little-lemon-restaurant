// Styles
import './Chicago.css';

// Components
import chicago from '../../assets/chicago.jpg'

export const Chicago = () => {
  return (
    <section className='component-section chicago'>
      <div className='grid-container'>
        <div className='desk-col-2'></div>
        <div className='desk-col-4'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Nestled in the heart of Chicago, Little Lemon is a cozy, family-run restaurant known for its fresh Mediterranean flavors and warm hospitality. Inspired by generations of family recipes, Little Lemon brings a taste of tradition to every table — all in a welcoming space where everyone feels at home.</p>
        </div>
        <div className='desk-col-4'>
          <img src={chicago} alt='Chicago location' />
        </div>
      </div>
    </section>
  )
}