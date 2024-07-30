import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { motion } from 'framer-motion'
import { item, container } from '../utils/motion'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

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
    <motion.nav 
      className={`${styles.paddingX} w-full flex items-center py-5 xxl:py-6 fixed top-0 z-20 backdrop-filter backdrop-blur-lg border-b border-[#162435]`}
    >
      <motion.div className="w-full flex justify-between items-center max-w-7xl xxl:max-w-[1536px] mx-auto">
        <Link 
          to="/" 
          className="flex flex-row items-center gap-2" 
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <motion.img 
            initial={isMobile ? {opacity:1} : {opacity:0, y:"-15%"}} 
            animate={isMobile ? null : {opacity:1, y:0}} 
            transition={isMobile ? null : {duration:0.2, delay:1}} 
            src={logo} 
            alt="logo" 
            className="w-9 h-9 xxl:w-12 xxl:h-12 object-cover rounded-full"
          />
          <motion.p 
            initial={isMobile ? {opacity:1} : {opacity:0, y:"-15%"}} 
            animate={isMobile ? null : {opacity:1, y:0}} 
            transition={isMobile ? null : {duration:0.2, delay:1.5}}
            className="text-white text-lg xxl:text-[24px] font-bold cursor-pointer"
          >
            Owen Wang
          </motion.p>
        </Link>

        <motion.ul variants={container(2.5, 0.2)} initial="hidden" animate="show" className="list-none hidden sm:flex flex-row gap-4">
          {navLinks.map((link) => (
            <motion.li 
              variants={item(20, "neg")}
              key={link.id}
              className={
                `${active === link.title ? "text-white underline" : "text-secondary"} hover:text-white text-lg xxl:text-[24px] font-medium cursor pointer px-3 py-2 xxl:px-4 xxl:py-3 hover:bg-[#221c41] rounded-xl`
              }
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-xl h-xl object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className={`${toggle ? "flex": "hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className="list-none flex flex-col justify-end items-start gap-4">
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={
                  `${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`
                }
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}
              >
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </motion.div>

    </motion.nav>
  )
}

export default Navbar