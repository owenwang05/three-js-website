import React from 'react'
import { motion } from 'framer-motion'

const LoadingDot = ({delay_time}) => {
  return(
    <motion.span 
      initial={{
        y: 0        
      }}
      animate={{
        y: "-100%"
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay: delay_time
      }}
      className="block w-3 h-3 rounded-full z-10 bg-white"
    >
    </motion.span>
  )
}

const LoadingBubble = () => {
  return (
    <div
      className="flex flex-row gap-8 w-full h-screen items-center justify-center"
    >
      <LoadingDot delay_time={0.1}/>
      <LoadingDot delay_time={0.2}/>
      <LoadingDot delay_time={0.3}/>
    </div>
  )
}

export default LoadingBubble