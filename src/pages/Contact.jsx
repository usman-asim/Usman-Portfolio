
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Contact = () => {
  useGSAP(()=>{
    gsap.from('.form',{
      scrollTrigger:{
        trigger:".form",
start:"top 80%"
      },
translateX:-400,
opacity:0,
      duration:1

    })
  })
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [type, settype] = useState("");
  const [text, settext] = useState("");
  const myEmail = "usmandevlpr@gmail.com";

  const firstref = useRef(null);
  const lastref = useRef(null);
  const emailref = useRef(null);
  const phoneref = useRef(null);
  const textref = useRef(null);
  const typeref = useRef(null);

  const submitform = (e) => {
    e.preventDefault();

    // Check if each field is empty and focus on the first empty field
    if (!first) {
      firstref.current.focus();
      return;
    }
    if (!last) {
      lastref.current.focus();
      return;
    }
    if (!email) {
      emailref.current.focus();
      return;
    }
    if (!phone) {
      phoneref.current.focus();
      return;
    }
    if (!type) {
      typeref.current.focus();
      return;
    }
    if (!text) {
      textref.current.focus();
      return;
    }

    // Construct the mailto link
    // const subject = `Contact Form Submission: ${type}`;
    // const body = `First Name: ${first}\nLast Name: ${last}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${text}`;

    // // Redirect to mailto link
    // window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Form submitted successfully!");
    setfirst("")
    setemail("")
    setlast("")
    setphone("")
    settext("")
    settype("")
  };


  return (
    <div className='w-full md:flex-row flex-col flex md:p-10 p-5 mt-28 md:mt-4'>
      <div className='text-white md:hidden ml-1 flex flex-col gap-5 justify-center ]'>
<div className='flex gap-3 sm:gap-7 '>
  <div className= 'rounded-[50px] w-12 h-12 bg-[#532F9C] items-center justify-center flex'><p className='w-3 h-3 border'></p></div>
  <div>
    <h1>Phone</h1>
    <p className='font-medium'>+92 319 713 5894</p>
  </div>
</div>
<div className='flex gap-3 sm:gap-7'>
  <div className= 'rounded-[50px] w-12 h-12 bg-[#532F9C] items-center justify-center flex '><p className='w-3 h-3 border'></p></div>
  <div>
    <h1>Email</h1>
    <p className='font-medium'>usmandevlpr@gmail.com</p>
  </div>
</div>
<div className='flex gap-3 sm:gap-7'>
  <div className='rounded-[50px] w-12 h-12 bg-[#532F9C] items-center justify-center flex'><p className='w-3 h-3 border'></p></div>
  <div>
    <h1>Address</h1>
    <p className=' mt-2 font-medium'>57-A<br />Al-Faisal Town Lahore</p>
  </div>
</div>

  </div>  
<div className='form md:w-[50%] w-[100%] flex flex-col text-white bg-[#140C1C] p-4 md:p-10 rounded-2xl mt-18' >
  <h1 className='sm:text-4xl text-3xl font-extrabold '>Let's work togethor</h1>
  <p className='font-light mt-1'>Let's collaborate and create something extraordinary together !</p>
  <form className='' action="">
    <div className='grid sm:grid-cols-2 gap-2 sm:gap-4 mt-7 text-center'>
      
      <div>
        <input required ref={firstref} value={first} onChange={(e)=>setfirst(e.target.value)} className='p-2 w-[100%] h-12 bg-black rounded-lg border-gray-700 border ' type="text" placeholder=" First Name" />
        
      </div>
      <div>
        <input required ref={lastref}   value={last} onChange={(e)=>setlast(e.target.value)}  className='p-2 w-[100%]   h-12 bg-black rounded-lg border-gray-700 border' type="text" placeholder='Last Name' />
        
      </div>
      <div>
        <input required ref={emailref}   value={email} onChange={(e)=>setemail(e.target.value)}  className='p-2 w-[100%] h-12 bg-black rounded-lg border-gray-700 border' type="text" placeholder=' Email Address' />
        
      </div>
      <div>
        <input required ref={phoneref}  value={phone} onChange={(e)=>setphone(e.target.value)}  className='p-2 w-[100%] h-12 bg-black rounded-lg border-gray-700 border' type="number" placeholder='Phone Number ' />
        
      </div>
     
    </div>
    <div>
      <select required  ref={typeref}  value={type} onChange={(e)=>settype(e.target.value)}   className='p-2 w-full mt-5 h-12 bg-black rounded-lg border-gray-700 border'  name="set" id="">
        <option value="" defaultChecked disabled>Set category</option>
        <option value="Web development">Web development</option>
        <option value="Frontened development">Frontened development</option>
        <option value="Web designing"> Web designing</option>
        <option value="Web animation">Web animation</option>
        <option value="Backened development">Backened development</option>
        <option value="Mern stack">Mern stack</option>
      </select>
    </div>
    <div>
    <textarea required ref={textref}   value={text} onChange={(e)=>settext(e.target.value)}  className='p-2 w-full mt-5 h-56 bg-black rounded-lg border-gray-700 border'  name="" id=""></textarea>
    </div>      
    <div><button type='submit' onClick={submitform} className='w-47 mt-5 h-[55px] font-bold bg-gradient-to-l to-[#7D4AE6] from-[#2C1558] rounded-[30px]'>Send Message</button></div>

  </form>
  </div>      
<div className='text-white hidden  ml-20 md:flex flex-col gap-10 justify-center'>
<div className='flex gap-7 '>
  <div className= 'rounded-[50px] w-12 h-12 bg-[#532F9C] items-center justify-center flex'><p className='w-3 h-3 border'></p></div>
  <div>
    <h1>Phone</h1>
    <p className='text-2xl font-medium'>+92 319 713 5894</p>
  </div>
</div>
<div className='flex gap-7'>
  <div className= 'rounded-[50px] w-12 h-12 bg-[#532F9C] items-center justify-center flex '><p className='w-3 h-3 border'></p></div>
  <div>
    <h1>Email</h1>
    <p className='text-2xl font-medium'>usmandevlpr@gmail.com</p>
  </div>
</div>
<div className='flex gap-7'>
  <div className='rounded-[50px] w-12 h-12 bg-[#532F9C] items-center justify-center flex'><p className='w-3 h-3 border'></p></div>
  <div>
    <h1>Address</h1>
    <p className='text-2xl mt-2 font-medium'>57-A<br />Al-Faisal Town Lahore</p>
  </div>
</div>

  </div>      
    </div>
  )
}

export default Contact
