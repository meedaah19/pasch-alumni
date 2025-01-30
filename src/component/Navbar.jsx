
// //import { NavLink } from "react-router-dom";
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/Logo mark.png';
// import Button from './Button';
// import { FaBars } from 'react-icons/fa'; 
// import { FaTimes } from 'react-icons/fa';
// import { useState } from 'react';

// export default function Navbar(){
    
//       let Links = [
//           {name:'ALUMNI', link: '/alumni'},
//           {name:'COMMUNITY', link: '/community'},
//           {name:'NEWS & RESOURCES', link: '/News'},
//           {name:'NETWORKING & CARRIER DEVELOPMENT', NavLink: '/network'},
//           {name:'ENGAGEMENT & FUN', link: '/engagement'},
//           {name:'ADMINISTRATIVE', link: '/administrative'},
//           {name:'CONTACT', link: '/contact'},
          
//       ];
//       let [open, setOpen]= useState(false);
      
//     return(
//         <div className=" shadow-md fixed top-0 left-0 w-full " >
//             <div className="md:flex xl:flex items-center justify-between bg-white py-4 md:px-10 px-2  lg:px-13">
//                 <div className="font-bold text-3xl cursor-pointer flex items-center font-[Montserrt] text-grey-800 overflow-x-hidden lg:text-5xl">
//                   <span className="mr-3 pt-2">
//                    <img src={logo} alt="logo" className="md:max-w-full w-[120px] lg:w-[150px] "/>
//                   </span>
//                     <NavLink to='/'>Pasch Alumni</NavLink>
//                 </div>
//                 <div className='bg-amber-400'>
//                   <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-9.5 cursor-pointer md:hidden'>
//                   {open ? <FaTimes/> : <FaBars/>}
//                   </div>
                  
//                   <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-o pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'} `} >
//                     {
//                       Links.map((link)=>(
//                         <li key={link.name} className='md:ml-8 font-medium md:my-0 my-7 lg:font-bold'>
//                           <NavLink to={link.link}
//                           className={({isActive}) => isActive ? '': '' } >
//                    {link.name}
//                   </NavLink>
//                         </li>
//                       ))
//                     }
//                     <Button>Register</Button>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }


import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../data/links";
import logo from '../assets/Logo mark.png';
import Button from "./util/Button";


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
                className={'text-gray-800 hover:text-red-500 block lg:text-[14px] '}
              >
                {link.name}
              </NavLink>

              <span className={`absolute left-0 bottom-[-25px] h-[5px] bg-red-500 w-0 group-hover:w-full transition-all duration-300 
                  ${location.pathname === link.link ? "w-full" : ""}`}>
              </span>

            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <button className="bg-red-500 text-white font-bold font-[Montserrat] py-2 px-6 rounded hover:bg-red-600 duration-500 hover:cursor-pointer">
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
                className={`block text-gray-700 hover:text-red-500
                  ${location.pathname === link.link ? "text-blue-500" : ""}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Button className="bg-red-500 text-white font-bold font-[Montserrat] py-2 px-6 rounded hover:bg-red-800 duration-500 hover:cursor-pointer">
              Register
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}