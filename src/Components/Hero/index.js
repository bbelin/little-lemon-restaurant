import './Hero.css';

export const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='grid'>
        <div className='grid-col-2-desktop'></div>
        <div className='grid-col-8-desktop'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <p>Button</p>
        </div>
        <div className='grid-col-2-desktop'></div>
      </div>
    </section>
  )
}