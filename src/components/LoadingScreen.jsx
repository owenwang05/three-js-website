import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const message = [
  "W", "E", "L", "C", "O", "M", "E", '\xa0',
  "T", "O", '\xa0',
  "M", "Y", '\xa0',
  "P", "O", "R", "T", "F", "O", "L", "I", "O"
]

const LoadingCharacter = ({character, index}) => {
  return (
    <>
      <motion.div
        initial={{ 
          x: "-100%",
          opacity: 0
        }}
        animate={{ 
          x: 0,
          opacity: 1
        }}
        transition={{
          type: "intertia",
          velocity: 50,
          delay: index*0.08
        }}
        className="text-xl text-white"
      >
        {character}
      </motion.div>
    </>
  )
}

const LoadingScreen = () => {
  
  return (
    <div className="flex flex-row mx-auto items-center justify-center py-12">
      {message.map((char, index) => (
        <LoadingCharacter character={char} index={index} key={index}/>
      ))}
      
    </div>
  )
}

export default LoadingScreen
