import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { poemsData } from '../data/poems'
import PoemCard from './PoemCard'

export default function PoemsGallery() {
  const [selectedPoem, setSelectedPoem] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  }

  return (
    <section id="poems" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-32 min-h-screen flex flex-col gap-12">
      <motion.div 
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] bg-clip-text text-transparent">
          Featured Poems
        </h2>
        <p className="text-xl text-gray-400">A selection of verses from my collection</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {poemsData.map((poem) => (
          <PoemCard
            key={poem.id}
            poem={poem}
            onClick={() => setSelectedPoem(poem)}
          />
        ))}
      </motion.div>

      {/* Premium Modal */}
      <AnimatePresence>
        {selectedPoem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPoem(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 60, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-2xl w-11/12 max-h-[80vh] overflow-y-auto bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#2a2a3e] rounded-2xl p-8 shadow-2xl"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPoem(null)}
                className="absolute top-6 right-6 text-[#ff6b6b] hover:text-white text-2xl font-bold transition-colors w-10 h-10 flex items-center justify-center"
              >
                ✕
              </motion.button>

              {/* Poem Image if exists */}
              {selectedPoem.image && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 rounded-lg overflow-hidden h-64 bg-black/50 border border-[#2a2a3e]"
                >
                  <img 
                    src={selectedPoem.image} 
                    alt={selectedPoem.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* Poem Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-6 pb-6 border-b border-[#2a2a3e]"
              >
                <h2 className="text-4xl font-bold text-white mb-3">
                  {selectedPoem.title}
                </h2>
                <div className="flex gap-4 items-center text-sm">
                  <span className="bg-[#ff6b6b]/10 text-[#ff6b6b] px-3 py-1 rounded-full font-semibold capitalize">
                    {selectedPoem.theme}
                  </span>
                  <span className="text-gray-400">{selectedPoem.date}</span>
                </div>
              </motion.div>

              {/* Poem Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert prose-lg max-w-none"
              >
                <div className="text-lg text-gray-300 leading-relaxed font-serif italic space-y-4">
                  {selectedPoem.content.split('\n\n').map((stanza, idx) => (
                    <p key={idx} className="whitespace-pre-wrap">
                      {stanza}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
