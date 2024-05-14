import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto block items-center justify-center">
      <div className="w-full xxxl:h-[1400px] h-screen">
        <div className="flex flex-col w-full h-full">
          <div className={`${styles.padding} max-w-7xl xxl:max-w-[1536px] mx-auto absolute z-0 inset-0 xs:top-[65px] top-[120px] xxl:top-[130px] xxxl:top-[180px] flex flex-row items-start gap-5`}>
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
    
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Owen</span></h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I develop web applications that <br className="sm:block hidden "/>address real-life problems
              </p>
            </div>
          </div>
          
          <ComputersCanvas />
        </div>
      </div>
    </section>
  )
}

export default Hero