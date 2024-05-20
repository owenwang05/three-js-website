import { useState} from 'react'

import { linkedin, githubFooter } from '../assets'
import { navLinks } from '../constants'
import { SectionWrapper } from './hoc'

const Footer = () => {

  const [active, setActive] = useState("")

  return (
    <section className="flex flex-row justify-between border-t border-[#162435] py-6 px-3">
      <div className="flex flex-col gap-4">
        <h1 className="bg-gradient-to-br from-[#8359df] to-[#8359df] via-[#d6c7f2] via-60% text-transparent bg-clip-text w-fit text-2xl font-semibold">
          Owen Wang
        </h1>
        <a href="mailto:owen.wang005@gmail.com" target="_blank">
          <h2 className="text-secondary hover:underline hover:cursor-pointer">
            owen.wang005@gmail.com
          </h2>
        </a>
        <div className="flex flex-row gap-4 mt-2">
          <a href="https://linkedin.com/in/owenwang05" target="_blank" className='border-secondary hover:border-white border-2 rounded-full transition-colors'>
            <img alt="linkedin" src={linkedin} className='p-1'/>
          </a>
          <a href="https://github.com/owen-wang-student" target="_blank" className='border-secondary hover:border-white border-2 rounded-full transition-colors'>
            <img alt="github" src={githubFooter} className='p-1'/>
          </a>
         
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Footer, "")