import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  }

  return (
    <motion.header 
      initial={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-[#2a2a3e] p-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] bg-clip-text text-transparent">
            Aman Joshi
          </h1>
          <p className="text-xs font-semibold text-[#ff6b6b] tracking-widest uppercase">
            Poetry & Reflections
          </p>
        </div>
        
        <nav className={`fixed md:static top-[70px] left-0 right-0 md:top-auto md:left-auto md:right-auto flex flex-col md:flex-row gap-4 md:gap-6 p-8 md:p-0 bg-[#1a1a2e] md:bg-transparent border-b md:border-0 border-[#2a2a3e] max-h-0 md:max-h-full overflow-hidden md:overflow-visible opacity-0 md:opacity-100 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : ''}`}>
          {[
            { label: 'Poems', id: 'poems', delay: 0 },
            { label: 'About', id: 'about', delay: 1 },
            { label: 'Portfolio', id: 'portfolio', delay: 2 }
          ].map((item, i) => (
            <motion.button
              key={item.id}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              onClick={() => item.id === 'portfolio' ? window.open('https://amanjoshi.vercel.app', '_blank') : scrollToSection(item.id)}
              className="text-gray-300 hover:text-[#ff6b6b] text-base font-medium transition-colors border-b-2 border-transparent hover:border-[#ff6b6b] pb-1"
            >
              {item.id === 'portfolio' ? '← Back to Portfolio' : item.label}
            </motion.button>
          ))}
        </nav>

        <button 
          className="md:hidden flex flex-col gap-1 bg-none border-none cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`w-6 h-0.5 bg-[#ff6b6b] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#ff6b6b] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#ff6b6b] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
    </motion.header>
  )
}
