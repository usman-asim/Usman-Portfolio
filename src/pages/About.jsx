import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const About = () => {
  const container=useRef()
useGSAP(()=>{
  gsap.from('.first',{
   
    opacity:0,
    duration:1,
    scale:0,


  })
  , 
  gsap.from(container.current.children,{
    opacity:0,
    duration:2,
    scale:0
  })
})

  return (
    <div>
      <div className="relative w-screen  text-white font-extralight mt-20 mb-10 flex flex-col justify-center items-center ">
        <div>
          <h1
            style={{
              background: "linear-gradient(to left, white 40%, #8460c7 60%)",
              backgroundClip: "text",
            }}
            className="w-full md:text-6xl text-5xl text-center font-extrabold bg-clip-text text-transparent  mt-10"
          >
            {" "}
            About Me
          </h1>
        </div>
        <div className=" first md:w-[70%] w-[90%]  text-center bg-[#1e122a] md:p-9 p-6 mt-7 rounded-[13px]  hover:text-white hover:bg-gradient-to-r from-[#824DEF] to-[#2E175B]">
          <h2 className="text-justify font-light">
            Hi, my name is Usman Asim, and I am a passionate front-end web
            developer driven by a desire to create visually compelling and
            functional web experiences. With a rich toolkit of modern
            technologies and design software at my disposal, I bring a unique
            blend of \creativity and technical acumen to every project I
            undertake. My journey in web development spans over 1 one year
            ,during which I have meticulously crafted each project with
            precision and a 100% success rate.
          </h2>
        </div>
      </div>
      <div className="text-white flex flex-col items-center justify-center     ">
        <h1
          style={{
            background: "linear-gradient(to left, white 30%, #8460C7 70%)",
            backgroundClip: "text",
          }}
          className="w-full md:text-6xl text-4xl text-center font-extrabold bg-clip-text text-transparent mt-5 "
        >
          My Education
        </h1>

        <div ref={container} className="container grid md:grid-cols-3 mt-10 grid-cols-1 gap-3 md:gap-4 mb-10 p-3">
          <div className="bg-[#1e122a] p-8  rounded-[13px] hover:text-white hover:bg-gradient-to-r from-[#824DEF] to-[#2E175B]">
            <h1 className="text-xl font-bold">2023-2025</h1>
            <p className="text-[#9364f1] font-extrabold text-2xl  hover:text-white">
              ADP COMPUTER SCIENCE
            </p>
            <h2 className="text-[16px] font-semibold">
              RIPHA INTERNATIONAL UNIVERSITY
            </h2>
          </div>
          <div className=" bg-[#1e122a] p-8  rounded-[13px]  hover:text-white hover:bg-gradient-to-r from-[#824DEF] to-[#2E175B]">
            <h1 className="text-xl font-bold">2021-2023</h1>
            <h2 className="text-[#9364f1] font-extrabold text-2xl  hover:text-white">
              ICS INTER
            </h2>
            <h2 className="text-[16px] font-semibold">
              CANTT PUBLIC COLLEGE LAHORE
            </h2>
          </div>
          <div className=" bg-[#1e122a] p-8 rounded-[13px]  hover:text-white hover:bg-gradient-to-r from-[#824DEF] to-[#2E175B]">
            <h1 className="text-xl font-bold">2009-2021</h1>
            <p className="text-[#9364f1] font-extrabold text-2xl hover:text-white">
              MATRIC{" "}
            </p>
            <h2 className="text-[16px] font-semibold">
              FAUJI FOUNDATION SCHOOL LAHORE
            </h2>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default About;
