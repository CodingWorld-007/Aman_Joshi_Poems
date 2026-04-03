import { motion } from 'framer-motion'

export default function PoemCard({ poem, onClick }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 40px rgba(255, 107, 107, 0.2)',
      border: '1px solid rgb(255, 107, 107)'
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={onClick}
      className="bg-gradient-to-br from-[#1a1a2e]/60 to-[#16213e]/60 border border-[#2a2a3e] rounded-lg p-6 cursor-pointer transition-all group overflow-hidden backdrop-blur-sm"
    >
      {/* Image Display */}
      {poem.image && (
        <div className="mb-4 rounded-lg overflow-hidden h-48 bg-black/50 flex items-center justify-center border border-[#2a2a3e] group-hover:border-[#ff6b6b]/50 transition-all">
          <img 
            src={poem.image} 
            alt={poem.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex justify-between items-start gap-3 mb-3">
        <h3 className="text-xl font-semibold text-white group-hover:text-[#ff6b6b] transition-colors">
          {poem.title}
        </h3>
        <span className="bg-[#ff6b6b]/10 text-[#ff6b6b] px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap capitalize">
          {poem.theme}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
        {poem.excerpt}
      </p>

      <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-[#2a2a3e]">
        <span>{poem.date}</span>
        <span className="text-[#ff6b6b] font-semibold group-hover:translate-x-1 transition-transform">
          Read More →
        </span>
      </div>
    </motion.div>
  )
}
