import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-filter backdrop-blur-lg border-b border-[#162435]`}>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-cover rounded-full"/>
          <p className="text-white text-lg font-bold cursor-pointer">
            Owen Wang
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-4">
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={
                `${active === link.title ? "text-white underline" : "text-secondary"} hover:text-white text-lg font-medium cursor pointer px-3 py-2 hover:bg-[#221c41] rounded-xl`
              }
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>

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

      </div>

    </nav>
  )
}

export default Navbar