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
        <div className='desk-col-2'></div>
        <div className='desk-col-1'>
          <img src={logoWhite} alt='logo' />
        </div>
        <div className='desk-col-1'></div>
        {footerItems.map(({ text, subItems }, idx) => {
          return (
            <div className='desk-col-2'>
              <h4>{text}</h4>
              <ul>
                {subItems.map((item, idx) => {
                  return (
                    <li>
                      <p>{item}</p>
                    </li>
                  )
                })}

              </ul>
            </div>
          )
        })}
        {/* <div className='desk-col-2'></div>
        <div className='desk-col-2'></div>
        <div className='desk-col-2'></div> */}
      </div>
    </section>
  )
}