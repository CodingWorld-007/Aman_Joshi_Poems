import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 }
    }
  }

  const linkHover = {
    scale: 1.05,
    color: '#ff6b6b',
    transition: { duration: 0.2 }
  }

  return (
    <motion.footer 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-t from-black to-transparent border-t border-[#2a2a3e] mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6b6b] to-[#ffb347] bg-clip-text text-transparent">
              Aman Joshi
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Poetry & Reflections - A collection of personal verses exploring growth, resilience, and the human experience.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-semibold uppercase text-sm tracking-widest">Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.a
                  whileHover={linkHover}
                  href="https://amanjoshi-portfolio.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff6b6b] transition-colors"
                >
                  Main Portfolio
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={linkHover}
                  href="https://linkedin.com/in/amanajjoshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff6b6b] transition-colors"
                >
                  LinkedIn
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={linkHover}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff6b6b] transition-colors"
                >
                  Twitter / X
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-white font-semibold uppercase text-sm tracking-widest">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <motion.a 
                  whileHover={linkHover}
                  href="mailto:developer.amanjoshi@gmail.com"
                  className="hover:text-[#ff6b6b] transition-colors"
                >
                  developer.amanjoshi@gmail.com
                </motion.a>
              </p>
              <p className="text-gray-400 text-sm">
                Crafted with passion and introspection
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="h-px bg-gradient-to-r from-transparent via-[#2a2a3e] to-transparent mb-8"></motion.div>

        {/* Footer Bottom */}
        <motion.div 
          variants={itemVariants}
          className="text-center space-y-2"
        >
          <p className="text-[#ff6b6b] font-semibold">© {currentYear} Aman Joshi. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Poetry Portfolio | Made with ❤️ and React</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
