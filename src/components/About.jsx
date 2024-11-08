import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'

import { link, resume } from "../assets"
 
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[185px] xl:w-[250px] w-full">
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
          className="bg-tertiary rounded-[20px] py-5 px-12 xxl:py-8 xxl:px-18 min-h-[290px] xxl:min-h-[350px] flex flex-col items-center justify-evenly"
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
        className="mt-4 text-secondary text-[17px] xxl:text-[18px] max-w-3xl leading-[30px]"
      >
        <p className='mb-2'>
          I am a Computer Engineering student UIUC with a goal is to 
          utilize technology to address relevant issues within society. I am a skilled 
          software engineer with experience in C++, Python, and Javascript alongside
          various frameworks. 
        </p>
        <p className='mb-4'>
          Outside of school, you can find me playing tennis or spending time
          with friends. I am always open to meeting new people, so feel free to message me about 
          any new opportunities or if you would like to have a conversation!  
        </p>
        <a href={resume} target="blank" className='text-white opacity-85 hover:cursor-pointer mt-2 flex flex-row w-fit items-center justify-center rounded-lg'>
          <p className="hover:underline">
            Resume 
          </p>
          {'\xa0'}
          <img src={link} className='h-5 w-5'/>
        </a>
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard title={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")