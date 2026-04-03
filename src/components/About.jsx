import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  }

  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    },
    hover: { y: -10 }
  }

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32 min-h-screen flex items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Content Section */}
        <div className="space-y-6">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold"
          >
            <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] bg-clip-text text-transparent">
              About This Collection
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-4 text-lg text-gray-400 leading-relaxed">
            <p>
              These poems are born from moments of introspection and personal reflection. They explore themes of growth, resilience, and the profound beauty found in life's experiences.
            </p>
            <p>
              Each piece is carefully crafted to capture the essence of human experience—the struggles we face, the lessons we learn, and the strength we discover within ourselves.
            </p>
            <p>
              This collection is an invitation to pause, reflect, and find meaning in the words. I hope these verses resonate with you and perhaps remind you of your own journey.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('poems')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#ff6b6b]/50 transition-all"
            >
              Read All Poems
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 gap-4"
        >
          {[
            { label: '10+', desc: 'Poems' },
            { label: '2024', desc: 'Collection Year' },
            { label: '∞', desc: 'Reflections' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={statVariants}
              whileHover="hover"
              className="p-8 bg-gradient-to-br from-[#1a1a2e]/50 to-[#16213e]/50 border border-[#2a2a3e] rounded-xl hover:border-[#ff6b6b]/50 transition-all cursor-pointer backdrop-blur-sm"
            >
              <motion.h3 
                className="text-5xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] bg-clip-text text-transparent mb-2"
              >
                {stat.label}
              </motion.h3>
              <p className="text-gray-400 text-lg font-medium">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
