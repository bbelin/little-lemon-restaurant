import { Header } from '../Components/Header'
import { Main } from '../Components/Main'
import { Hero } from '../Components/Hero'
import { Specials } from '../Components/Specials'
import { CustomersSay } from '../Components/CustomersSay'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Specials />
        <CustomersSay />
      </Main>
      <Footer />
    </>
  )
}