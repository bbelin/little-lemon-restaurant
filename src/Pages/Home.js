import { Header } from '../Components/Header'
import { Hero } from '../Components/Hero'
import { Main } from '../Components/Main'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Hero />
      </Main>
      <Footer />
    </>
  )
}