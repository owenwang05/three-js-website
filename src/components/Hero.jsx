import React from 'react'
import { motion } from 'framer-motion'
import { item, container } from '../utils/motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto block items-center justify-center">
      <div className="w-full xxxl:h-[1400px] h-screen">
        <motion.div variants={container(2)} initial="hidden" animate="show" className="flex flex-col w-full xs:h-full h-[800px]">
          <motion.div 
            variants={container(0)}
            initial="hidden"
            animate="show"
            className={`${styles.padding} max-w-7xl xxl:max-w-[1536px] mx-auto absolute z-0 inset-0 xs:top-[65px] top-[100px] xxl:top-[130px] xxxl:top-[180px] flex flex-row items-start gap-5`}
          >
            {/* contains side bar */}
            <motion.div variants={item(10, "pos")} className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </motion.div>

            {/* contains hero text */}
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="show"
            >
              <motion.h1 
                variants={item(15, "pos")}
                className={`${styles.heroHeadText} text-white`}
              >
                Hi, I'm <span className="text-[#915eff]">Owen</span>
              </motion.h1>
              <motion.p 
                variants={item(15, "pos")}
                className={`${styles.heroSubText} mt-2 text-white-100`}
              >
                I develop web applications that <br className="sm:block hidden "/>address real-life problems
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* contains computer */}
          <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1, duration: 2.5}}className="w-full h-full">
            <ComputersCanvas />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero