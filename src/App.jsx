import Header from './components/Header'
import Hero from './components/Hero'
import PoemsCarousel from './components/PoemsCarousel'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] text-[#e8e8e8]">
      <Header />
      <Hero />
      <PoemsCarousel />
      <About />
      <Footer />
    </div>
  )
}

export default App
