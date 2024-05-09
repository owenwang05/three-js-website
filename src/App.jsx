import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, LoadingScreen } from './components'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    console.log(isLoading)
  }, [])

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
