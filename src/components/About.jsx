import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
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
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly"
        >
          <img src={icon} alt={title} className="w-16 h-16 object.contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
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
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
        
        My name is David Hu-Liu, currently a freshman at the University of Waterloo studying Computer Science and at Wilfrid Laurier studying Business. I have a strong interest in Machine Learning and Data Science, full-stack development, Graphic/UX design, and creating products that address real-life problems.


I understand the key principles of data science, along with the underlying mathematics driving machine learning algorithms. I’ve used javascript and React to create full-stack applications, and utilized various python libraries to create neural networks and object detection.


I want to continue learning about important technologies because I believe technology, including software, has the capacity to shape our future and address societal problems such as sustainability, equality/access to technology, and education. Technology has historically been a catalyst in improving our quality of life, and the future will be no different.


With open arms, I seek to collaborate with others with the shared mindset that technology can drive positive social change. Outside of computer science, my hobbies include snowboarding, fitness, philosophy, and poker.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard title={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")