// Components
import { Header } from '../Components/Header'
import { Main } from '../Components/Main'
import { BookingForm } from '../Components/BookingForm'
import { Footer } from '../Components/Footer'

export const Reservations = () => {
  return (
    <>
      <Header />
      <Main>
        <BookingForm />
      </Main>
      <Footer />
    </>
  )
}