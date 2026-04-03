import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -40, 0],
      x: [0, 25, 0],
      opacity: [0.2, 0.6, 0.2],
    },
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-br from-[#ff6b6b]/15 to-transparent rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-1/4 left-10 w-72 h-72 bg-gradient-to-tl from-[#ffb347]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl z-10 text-center"
      >
        {/* Decorative line */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#ff6b6b]"></div>
            <span className="text-[#ff6b6b] text-sm tracking-widest font-semibold">POETRY & REFLECTIONS</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#ff6b6b]"></div>
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-white"
        >
          Words from the <br />
          <motion.span 
            className="bg-gradient-to-r from-[#ff6b6b] via-[#ffb347] to-[#ff6b6b] bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Heart
          </motion.span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          A collection of poems born from personal experiences and introspection. Each verse tells a story of growth, reflection, and the beauty found in life's moments.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button 
            whileHover={{ scale: 1.08, boxShadow: '0 20px 50px rgba(255, 107, 107, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('poems')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] text-black font-bold rounded-lg hover:shadow-xl transition-all"
          >
            Explore Poems
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.08, boxShadow: '0 20px 50px rgba(255, 107, 107, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 border-2 border-[#ff6b6b] text-[#ff6b6b] font-bold rounded-lg hover:bg-[#ff6b6b]/10 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <svg className="w-6 h-6 text-[#ff6b6b]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
