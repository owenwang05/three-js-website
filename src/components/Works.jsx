import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from './hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn(", ", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] xxl:text-[19px] max-w-3xl leading-[30px]"
        > 
          Following projects showcases my skills and experience through
          real-world examples of my work. To view more of my work you can <a href="https://github.com/owenwang05" target="_blank" className='text-white hover:underline cursor-pointer'>click here</a>
        </motion.p>
      </div>

      <div className="mt-4 xxxl:mt-8 flex flex-wrap gap-7">
        {projects.map((project, id) => (
          <ProjectCard 
            key={`project-${id}`}
            index={id}
            {...project}
          />
        ))}
      </div>

    </>
  )
}

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div
      variants={fadeIn("up", "spring", index*0.5, 0.75)}
    >
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450   
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[310px] xl:w-[355px] xxl:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] xxl:h-[300px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card_img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="rounded-full flex justify-center items-center cursor-pointer black-gradient w-10 h-10"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

export default SectionWrapper(Works, "projects")