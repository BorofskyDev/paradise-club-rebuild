import './App.css'
import Contact from './components/Contact/Contact'
import Entertainment from './components/Entertainment/Entertainment'
import Gallery from './components/Gallery/Gallery'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import PrivateEvents from './components/Private Events/PrivateEvents'
import Reservations from './components/Reservations/Reservations'

function App() {


  return (
    <div className="site-container">
      <Navbar />
      <Hero />
      <Entertainment />
      <Gallery />
      <PrivateEvents />
      <Contact />
      <Reservations />
    </div>
  )
}

export default App
