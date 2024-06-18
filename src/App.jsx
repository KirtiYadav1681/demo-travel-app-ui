import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import LetsGetStartedSection from './components/LetsGetStartedSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroBanner />
      <LetsGetStartedSection />
    </>
  )
}

export default App
