import React from 'react'
import { motion } from 'framer-motion'
import { item, container } from '../utils/motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <motion.section className="relative w-full h-screen mx-auto block items-center justify-center">
      <div className="w-full xxxl:h-[1350px] h-screen">
        <motion.div className="flex flex-col w-full xs:h-full h-[800px]">
          <motion.div 
            variants={container(5, 0.2)}
            initial="hidden"
            animate="show"
            className={`${styles.padding} max-w-7xl xxl:max-w-[1536px] mx-auto absolute z-0 inset-0 xs:top-[65px] top-[100px] xxl:top-[130px] xxxl:top-[180px] flex flex-row items-start gap-5`}
          >
            {/* contains side bar */}
            <motion.div variants={item(15, "pos")} className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </motion.div>

            {/* contains hero text */}
            <motion.div>
              <motion.h1 
                variants={item(15, "pos")}
                className={`${styles.heroHeadText} text-white`}
              >
                Hi, I'm <span className="bg-gradient-to-l from-[#8359df] to-[#8150ea] via-[#cbb7ef] via-45% text-transparent bg-clip-text">Owen</span>
              </motion.h1>
              <motion.p 
                variants={item(15, "pos")}
                className={`${styles.heroSubText} mt-2 text-white-100`}
              >
                I develop web applications that <br className="sm:block hidden "/>address <span className="bg-gradient-to-l from-[#8359df] to-[#d6c7f2] via-[#d6c7f2] via-15% text-transparent bg-clip-text">real-world</span> problems
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* contains computer */}
          <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 4.5, duration: 1}} className="w-full h-full">
            <ComputersCanvas />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero