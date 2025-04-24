import { Main } from '../Components/Main'
import { Hero } from '../Components/Hero'
import { Specials } from '../Components/Specials'
import { CustomersSay } from '../Components/CustomersSay'
import { Chicago } from '../Components/Chicago'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <>
      <Main>
        <Hero />
        <Specials />
        <CustomersSay />
        <Chicago />
      </Main>
      <Footer />
    </>
  )
}