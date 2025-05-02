// Components
import { Main } from '../Components/Main'
import { Footer } from '../Components/Footer'

export const OrderOnline = () => {
  return (
    <>
      <Main>
        <section className='component-section'>
          <div className='grid-container'>
            <div className='col-4 tab-col-8 desk-col-2'></div>
            <div className='col-4 tab-col-8 desk-col-4'>
              <h2>Order Online page</h2>
            </div>
            <div className='col-4 tab-col-8 desk-col-2'></div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}