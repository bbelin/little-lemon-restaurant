// Components
import { Main } from '../../Components/Main'
import { Footer } from '../../Components/Footer'

// Styles
import './ConfirmedBooking.css'

export const ConfirmedBooking = () => {
  return (
    <>
      <Main>
        <div className='grid-container confirmed-booking'>
          <div className='desk-col-2'></div>
          <div className='desk-col-8'>
            <h2>Your table has been successfully reserved!</h2>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  )
}