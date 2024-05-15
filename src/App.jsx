import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, LoadingScreen } from './components'

function App() {

  const [isLoading, setIsLoading] = useState(true) 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 7000)
  }, [])

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="bg-gradient-to-b from-primary from-15% to-primary via-[#1f123f] via-70%">
            <Navbar />
            <Hero />
          </div>  
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
