// Styles
import './Footer.css';

// Components
import logoWhite from '../../assets/logoWhite.svg'

const footerItems = [
  {
    text: 'About us',
    subItems: ['Our Story', 'Meet the Team', 'Careers']
  },
  {
    text: 'Visit us',
    subItems: ['Locations & Hours', 'Reservations', 'Contact']
  },
  {
    text: 'Stay Connected',
    subItems: ['Instagram', 'Facebook', 'Newsletter Signup']
  },
]

export const Footer = () => {
  return (
    <section className='component-section main-footer'>
      <div className='grid-container'>
        <div className='col-4 tab-col-8 desk-col-2'></div>
        <div className='mobile-hide tablet-hide desk-col-1'>
          <img src={logoWhite} alt='logo' />
        </div>
        <div className='col-4 tab-col-8 desk-col-1'></div>
        {footerItems.map(({ text, subItems }, idx) => {
          return (
            <div className='col-1 tab-col-2 desk-col-2' key={idx}>
              <h4>{text}</h4>
              <ul>
                {subItems.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <p>{item}</p>
                    </li>
                  )
                })}

              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}