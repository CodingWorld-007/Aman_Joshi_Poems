import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { poemsData } from '../data/poems'

export default function PoemsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isReading, setIsReading] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + poemsData.length) % poemsData.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % poemsData.length)
  }

  const currentPoem = poemsData[currentIndex]

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    })
  }

  return (
    <section id="poems" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] py-20 px-6 md:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating background element */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-10 w-72 h-72 bg-gradient-to-br from-[#ff6b6b]/10 to-transparent rounded-full blur-3xl pointer-events-none"
      ></motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15 }}
        className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] bg-clip-text text-transparent text-center"
      >
        Featured Poems
      </motion.h2>

      {/* Carousel Container */}
      <div className="w-full max-w-4xl relative">
        {/* Main Card Display */}
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentIndex}
            custom={1}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full"
          >
            <motion.div
              onClick={() => setIsReading(true)}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-md border border-[#2a2a3e] rounded-2xl overflow-hidden cursor-pointer group shadow-2xl hover:shadow-[#ff6b6b]/20 transition-all duration-300"
            >
              {/* Image Section - Full Phone Resolution */}
              {currentPoem.image && (
                <div className="relative w-full bg-black/50">
                  <motion.img
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                    src={currentPoem.image}
                    alt={currentPoem.title}
                    className="w-full h-auto object-contain group-hover:opacity-90 transition-opacity duration-500"
                  />
                </div>
              )}

              {/* Minimal Content Section */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#ff6b6b] transition-colors">
                  {currentPoem.title}
                </h3>
                <div className="flex gap-3 items-center">
                  <span className="bg-[#ff6b6b]/10 text-[#ff6b6b] px-3 py-1 rounded-full text-sm font-semibold capitalize">
                    {currentPoem.theme}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsReading(true)}
                    className="ml-auto px-4 py-2 bg-[#ff6b6b] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#ff6b6b]/50 transition-all"
                  >
                    Read
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToPrevious}
          className="absolute -left-16 md:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-[#ff6b6b] hover:bg-[#ff5252] rounded-full flex items-center justify-center text-white text-2xl transition-all z-10"
        >
          ←
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={goToNext}
          className="absolute -right-16 md:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-[#ff6b6b] hover:bg-[#ff5252] rounded-full flex items-center justify-center text-white text-2xl transition-all z-10"
        >
          →
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="flex gap-3 mt-12 justify-center flex-wrap">
        {poemsData.map((poem, idx) => (
          <motion.button
            key={poem.id}
            onClick={() => setCurrentIndex(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`h-3 rounded-full transition-all ${
              idx === currentIndex
                ? 'bg-[#ff6b6b] w-12'
                : 'bg-[#2a2a3e] w-3 hover:bg-[#ff6b6b]/50'
            }`}
            aria-label={`Go to poem ${idx + 1}`}
          ></motion.button>
        ))}
      </div>

      {/* Fullscreen Poetry Reader */}
      <AnimatePresence>
        {isReading && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReading(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40"
            />

            {/* Reader Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsReading(false)}
                  className="absolute top-8 right-8 text-[#ff6b6b] hover:text-white text-4xl font-bold transition-colors z-50"
                >
                  ✕
                </motion.button>

                {/* Poem Image */}
                {currentPoem.image && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 md:mb-12 rounded-lg overflow-hidden max-w-2xl w-full"
                  >
                    <img
                      src={currentPoem.image}
                      alt={currentPoem.title}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </motion.div>
                )}

                {/* Poem Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl w-full text-center mb-12"
                >
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    {currentPoem.title}
                  </h1>
                  <div className="flex gap-4 items-center justify-center text-sm mb-6">
                    <span className="bg-[#ff6b6b]/10 text-[#ff6b6b] px-4 py-2 rounded-full font-semibold capitalize">
                      {currentPoem.theme}
                    </span>
                    <span className="text-gray-400 text-lg">
                      {currentPoem.date}
                    </span>
                  </div>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] mx-auto"></div>
                </motion.div>

                {/* Poem Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="max-w-2xl w-full"
                >
                  <div className="text-xl md:text-2xl text-gray-200 leading-relaxed font-serif space-y-6">
                    {currentPoem.content.split('\n\n').map((stanza, idx) => (
                      <p key={idx} className="whitespace-pre-wrap text-center md:text-left">
                        {stanza}
                      </p>
                    ))}
                  </div>
                </motion.div>

                {/* Navigation in Reader */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-16 flex gap-6 justify-center w-full max-w-2xl"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goToPrevious}
                    className="px-8 py-3 border-2 border-[#ff6b6b] text-[#ff6b6b] font-semibold rounded-lg hover:bg-[#ff6b6b]/10 transition-all"
                  >
                    ← Previous
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsReading(false)}
                    className="px-8 py-3 bg-[#ff6b6b] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#ff6b6b]/50 transition-all"
                  >
                    Close Reader
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={goToNext}
                    className="px-8 py-3 border-2 border-[#ff6b6b] text-[#ff6b6b] font-semibold rounded-lg hover:bg-[#ff6b6b]/10 transition-all"
                  >
                    Next →
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
