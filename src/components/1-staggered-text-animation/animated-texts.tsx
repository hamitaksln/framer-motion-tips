import { motion } from 'framer-motion'
import React from 'react'

const words = ["you're looking for.", 'sparks creativity.', 'lightning-fast.']
const INTERVAL_DURATION = 2500

export const AnimatedTexts = () => {
  const [currWord, setCurrWord] = React.useState(words[0])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrWord(currWord => {
        const index = words.indexOf(currWord)
        const nextIndex = index + 1 === words.length ? 0 : index + 1

        return words[nextIndex]
      })
    }, INTERVAL_DURATION)
    return () => clearInterval(interval)
  }, [currWord])

  return (
    <div className="text-5xl font-medium space-y-0">
      <div>
        <span className="text-[#272727]">The design system</span>
      </div>
      <motion.div
        // If we don't set a key, it will animate only once for first word
        key={currWord}
        className="overflow-y-hidden py-3 mt-4"
        initial="initial"
        animate="animate"
        transition={{
          delay: 1,
          type: 'spring',
          // Stagger children with 0.05 seconds between each child
          staggerChildren: 0.05,
        }}
      >
        {/* 
            Split the word into individual letters and animate each letter
            separately.
        */}
        {currWord.split('').map((letter, index) => {
          return (
            <motion.span
              key={index}
              className="inline-block text-[#f65428]"
              variants={{
                initial: { y: 75, opacity: 0.5 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.3,
                  },
                },
              }}
            >
              {/* 
                  If there is a space, replace it with a non-breaking space
                  to ensure that the space is preserved when the text
                  is being animated.
              */}
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          )
        })}
      </motion.div>
    </div>
  )
}
