import { Edit2, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
// Edit2
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Header = () => {
  useGSAP(() => {
   
    
    gsap.from(".lies h1",{
      y:-300,
      opacity:0,
      top:200,
      duration:1,
stagger:-0.2
    })
   
  });



  return (
    <div id='header' className='head fixed z-50 h-[13vh] top-0  flex justify-between items-center py-4 px-3 md:px-14 w-full  text-white bg-transparent  backdrop-blur-md  '>
     
     <Link to="/"> 
     <img className='w-20 h-20 ml-0 mt-0' src="portfoliologo.png" alt="" />
     </Link> 
    
      <div id='pli' className="lies hidden  z-20 list md:flex gap-[30px] text-[15px]  font-bold  justify-center items-center">
      <h1 className='li' id='li'><NavLink id='lii'  className={({isActive})=>(isActive?"text-[#764CC4] font-extrabold":"text-white")}   to="/" >Home</NavLink></h1>  
      <h1 id='li'><NavLink  id='lii'  className={({isActive})=>(isActive?"text-[#764CC4] font-extrabold":"text-white")}   to="/About" >About me</NavLink></h1>  
        <h1 id='li'><NavLink id='lii' className={({isActive})=>(isActive?"text-[#764CC4] font-extrabold":"text-white")} to={"/Services"} >Services</NavLink></h1>
        <h1 id='li'><NavLink id='lii' className={({isActive})=>(isActive?"text-[#764CC4] font-extrabold":"text-white")} to={"/Skills"} >Skills</NavLink></h1>
       <h1 className='bg-gradient-to-l to-[#764CC4] from-[#261833] px-7 py-3 rounded-3xl' > <NavLink id='liii'  className={({isActive})=>(isActive?"text-[#764CC4] font-bold":"text-white")}  to="/Contact">Hire Me!</NavLink></h1>
        
      </div >
      <div className='md:hidden mr-0 '>

    <Mobile_menu />
      </div>
    </div>
  )
}

export default Header


  


  const Mobile_menu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleLinkClick = () => {
      setIsOpen(false); // Close the sheet when a link is clicked
    };
  
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>

        
                   <div className='flex gap-4 items-center' >

         <h1 className='bg-gradient-to-l text-white to-[#764CC4] from-[#372547] px-9 py-3 rounded-3xl'>
              <NavLink
                id='liii'
                className={({ isActive }) => (isActive ? "text-white font-bold" : "text-white")}
                to="/Contact"
              >
                Hire Me!
              </NavLink>
            </h1>
        <SheetTrigger asChild>
           
            <Menu size={35} onClick={() => setIsOpen(true)} />
        </SheetTrigger>
          </div>
        <SheetContent className={"bg-black border-l-black text-white border-t-black w-[100%]"}>
        <SheetClose className="p-2 text-white absolute right-1 top-1 "><X/></SheetClose>

          <div className="mt-40 text-[35px] font-bold flex flex-col justify-center items-center">
            <h1>
              <NavLink
                onClick={handleLinkClick} // Close the sheet on link click
                className={({ isActive }) => (isActive ? "text-[#764CC4]" : "text-white")}
                to="/"
              >
                Home
              </NavLink>
            </h1>
            <h1>
              <NavLink
                onClick={handleLinkClick} // Close the sheet on link click
                className={({ isActive }) => (isActive ? "text-[#764CC4] font-bold" : "text-white")}
                to="/About"
              >
                About
              </NavLink>
            </h1>
            <h1>
              <NavLink
                onClick={handleLinkClick} // Close the sheet on link click
                className={({ isActive }) => (isActive ? "text-[#764CC4] font-bold" : "text-white")}
                to="/Services"
              >
                Services
              </NavLink>
            </h1>
            <h1>
              <NavLink
                onClick={handleLinkClick} // Close the sheet on link click
                className={({ isActive }) => (isActive ? "text-[#764CC4] font-bold" : "text-white")}
                to="/Projects"
              >
                Projects
              </NavLink>
            </h1>
            <h1>
              <NavLink
                onClick={handleLinkClick} // Close the sheet on link click
                className={({ isActive }) => (isActive ? "text-[#764CC4] font-bold" : "text-white")}
                to="/Skills"
              >
                Skills
              </NavLink>
            </h1>
          </div>
        </SheetContent>
      </Sheet>
    );
  };
  
  