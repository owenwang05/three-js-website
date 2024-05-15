import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { container } from './utils/motion'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, LoadingScreen } from './components'

function App() {

  const [isLoading, setIsLoading] = useState(true) // remember to change to true!!?!?!?!?

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 8000)
  }, [])

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="relative z-0 bg-primary">
          <motion.div 
            variants={container(2, 5)}
            initial="hidden"
            animate="show"
            className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
          >
            <Navbar />
            <Hero />
          </motion.div>  
          <div>
            <About />
            <Experience />
            <Tech />
            <Works />
          </div>
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
