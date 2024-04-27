import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] xxl:w-[300px] w-full">{/* you can remove the flex here */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1, 
            speed: 450 
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 xxl:py-8 xxl:px-18 min-h-[280px] xxl:min-h-[330px] flex flex-col items-center justify-evenly"
        >
          <img src={icon} alt={title} className="w-16 h-16 xxl:w-18 xxl:h-18 object.contain"/>
          <h3 className="text-white text-[20px] xxl:text-[24px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>
      
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am currently a freshman at the UIUC studying Computer Engineering. 
        I have a strong interest in Machine Learning, AI, and Full-stack Development,
        and their real world applications.

        I'm a skilled sofware engineer with experience in Javascript and various frameworks. 
        Additionally, I have utilized python libraries to create neural networks and object 
        detection. Outside of work, you can find me playing tennis, spending time with friends, 
        or deeply invested in a novel. I'm always open to meeting new people, so feel free to 
        message me about any new opportunities or if you would like to have a conversation!
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard title={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")