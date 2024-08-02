import React from 'react'
import { motion } from 'framer-motion'
import { item, container } from '../utils/motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { useState, useEffect } from 'react'

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <motion.section className="relative w-full h-screen mx-auto block items-center justify-center">
      <div className="w-full xxxl:h-[1350px] h-screen">
        <motion.div className="flex flex-col w-full xs:h-full h-[800px]">
          <motion.div 
            variants={isMobile ? null : container(2, 0.2)}
            initial={isMobile ? {opacity:1} : "hidden"}
            animate="show"
            className={`${styles.padding} max-w-7xl xxl:max-w-[1536px] mx-auto absolute z-0 inset-0 xs:top-[65px] top-[100px] xxl:top-[130px] xxxl:top-[180px] flex flex-row items-start gap-5`}
          >
            {/* contains side bar */}
            <motion.div 
              variants={isMobile ? null : item(15, "pos")} 
              initial={isMobile ? {opacity:1} : {opacity:0, y:15}}
              className={`flex flex-col justify-center items-center ${isMobile ? "" : "mt-5"}`}
            >
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </motion.div>

            {/* contains hero text */}
            <motion.div>
              <motion.h1 
                variants={isMobile ? null : item(15, "pos")} 
                initial={isMobile ? {opacity:1} : {opacity:0, y:15} }
                className={`${styles.heroHeadText} text-white`}
              >
                Hi, I'm <span className="bg-gradient-to-l from-[#8359df] to-[#8150ea] via-[#cbb7ef] via-45% text-transparent bg-clip-text">Owen</span>
              </motion.h1>
              <motion.p 
                variants={isMobile ? null : item(15, "pos")} 
                initial={isMobile ? {opacity:1} : {opacity:0, y:15} }
                className={`${styles.heroSubText} mt-2 text-white-100`}
              >
                I develop web applications that <br className="sm:block hidden "/>address <span className="bg-gradient-to-l from-[#8359df] to-[#d6c7f2] via-[#d6c7f2] via-15% text-transparent bg-clip-text">real-world</span> problems
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* contains computer */}
          <motion.div 
            initial={isMobile ? {opacity:1} : {opacity: 0}} 
            animate={isMobile ? null : {opacity:1}} 
            transition={isMobile ? null : {delay: 2.5, duration: 1}} 
            className="w-full h-[725px] xs:h-full"
          >
            <ComputersCanvas />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero