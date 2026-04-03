import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-between pt-20 px-6 md:px-8 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Floating background element */}
      <motion.div
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-br from-[#ff6b6b]/20 to-transparent rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white"
        >
          Words from the Heart, <br />
          <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] bg-clip-text text-transparent">
            Reflections from Life
          </span>
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-400 mb-8 max-w-xl leading-relaxed"
        >
          A collection of poems born from personal experiences and introspection. Each verse tells a story of growth, reflection, and the beauty found in life's moments.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex gap-4 flex-wrap"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('poems')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#ff6b6b]/50 transition-all"
          >
            Explore Poems
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-[#ff6b6b] text-[#ff6b6b] font-semibold rounded-lg hover:bg-[#ff6b6b]/10 transition-all"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
