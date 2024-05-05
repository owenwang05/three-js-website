import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../../styles'
import { LoadingDots } from './index'

const message = [
  "W", "e", "l", "c", "o", "m", "e", '\xa0',
  "T", "o", '\xa0',
  "M", "y", '\xa0',
  "P", "o", "r", "t", "f", "o", "l", "i", "o", "!"
]

const LoadingCharacter = ({character, index}) => {
  return (
    <motion.div
      initial={{ 
        y: "100%",
        opacity: 0
      }}
      animate={{ 
        y: 0,
        opacity: 1
      }}
      transition={{
        type: "intertia",
        velocity: 50,
        delay: index*0.08
      }}
      className={`${styles.heroSubText} text-white font-normal`}
    >
      {character}
    </motion.div>
  )
}

const LoadingScreen = () => {
  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      {isLoading ? (
        <div className="flex flex-row h-screen mx-auto items-center justify-center">
          <LoadingDots />
        </div>
      ) : (
        <div className="flex flex-row h-screen mx-auto items-center justify-center">
          {message.map((char, index) => (
            <LoadingCharacter character={char} index={index} key={index}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default LoadingScreen
