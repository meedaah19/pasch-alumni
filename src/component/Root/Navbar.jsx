import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../data/links";
import logo from '../../assets/Logo mark.png';
import Button from "../util/Button";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        
          <NavLink className="flex items-center" to="/">
            <img src={logo} alt="Logo" className="h-13 w-25" />
          </NavLink>


        <ul className='hidden xl:flex space-x-6'>
          {links.map((link, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={link.link}
                className={'text-gray-800 hover:text-green-500 block lg:text-[14px] '}
              >
                {link.name}
              </NavLink>

              <span className={`absolute left-0 bottom-[-25px] h-[5px] bg-green-500 w-0 group-hover:w-full transition-all duration-300 
                  ${location.pathname === link.link ? "w-full" : ""}`}>
              </span>

            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <button className=" bg-green-500 hover:bg-green-600 text-white font-bold font-[Montserrat] py-2 px-6 rounded  duration-500 hover:cursor-pointer">
            Register
          </button>
        </div>

        <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <ul className='xl:hidden bg-white shadow-md  p-4 space-y-4 absolute top-16 left-0 w-full'>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.link}
                className={`block text-gray-700 hover:text-green-500
                  ${location.pathname === link.link ? "text-blue-500" : ""}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Button className=" bg-green-500 hover:bg-green-600 text-white font-bold font-[Montserrat] py-2 px-6 rounded duration-500 hover:cursor-pointer">
              Register
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}