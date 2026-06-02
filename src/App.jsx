import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import HowItWorks from './sections/HowItWorks'
import Automations from './sections/Automations'
import Tools from './sections/Tools'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Automations />
      <Tools />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
