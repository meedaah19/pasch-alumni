import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { links } from "../../data/links";
import logo from '../../assets/Logo mark.png';
import Button from "../util/Button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  return (     
    <motion.nav
      initial={{x:-100, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration:0.5}}
       
      className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-10" >
      <div className="container mx-auto flex justify-between items-center">
        
          <NavLink className="flex items-center" to="/">
            <img src={logo} alt="Logo" className="h-13 w-25" />
          </NavLink>


        <motion.ul 
         initial={{opacity:0}} 
         animate={{opacity:1}} 
         transition={{staggerChildren:0.2}} 
         className='hidden xl:flex space-x-6 '>
          {links.map((link, index) => (
            <motion.li 
            key={index} 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{delay:index * 0.20}} 
            className="relative group">
              <NavLink
                to={link.link}
                className={'text-gray-800 hover:text-green-500 block lg:text-[14px] '}
              >
                {link.name}
              </NavLink>

              <span className={`absolute left-0 bottom-[-25px] h-[5px] bg-green-500 w-0 group-hover:w-full transition-all duration-300 
                  ${location.pathname === link.link ? "w-full" : ""}`}>
              </span>

            </motion.li>
          ))}
        </motion.ul>

        <div className="hidden xl:block">
        <Button onClick={() => {console.log("Navigating to: /signin"); navigate('/signin')}}  className=" bg-green-500 hover:bg-green-600 text-white font-bold uppercase font-[Montserrat] py-2 px-6 rounded  hover:cursor-pointer">
        Sign In
        </Button>
        </div>

        <motion.button animate ={{rotate: isOpen ? 180 : 0}} className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes  className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {isOpen && (
        <motion.ul 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{staggerChildren:0.2}}  
        className='xl:hidden bg-white shadow-md  p-4 space-y-4 absolute top-16 left-0 w-full'>
          {links.map((link, index) => (
            <motion.li 
            key={index}
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{delay:index * 0.20}}
            >
              <NavLink
              onClick={() => setIsOpen(false)}
                to={link.link}
                className={`block text-gray-700 hover:text-green-500
                  ${location.pathname === link.link ? "text-blue-500" : ""}`}
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
          <li>
          <Button onClick={() => {navigate('/signin'); setIsOpen(false)}}  className=" bg-green-500 hover:bg-green-600 text-white font-bold uppercase font-[Montserrat] py-2 px-6 rounded  hover:cursor-pointer">
          Sign In
          </Button>
          </li>
        </motion.ul>
      )}
    </motion.nav>
  );
}