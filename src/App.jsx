import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import LetsGetStartedSection from './components/LetsGetStartedSection'
import ExploreCountries from './components/ExploreCountries'
import ChooseCities from './components/ChooseCities'
import SearchFlights from './components/SearchFlights'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroBanner />
      <LetsGetStartedSection />
      <ExploreCountries />
      <ChooseCities />
      <SearchFlights />
      <Footer />
    </>
  )
}

export default App
