import { useGSAP } from "@gsap/react";
import React, { useEffect, useState, useRef } from "react";
import gsap from 'gsap'
import { Trigger } from "@radix-ui/react-dialog";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Number = () => {
  useGSAP(()=>{
    gsap.from('.number',{
      scrollTrigger:{
        trigger:".number"
        ,start:"top 80%"
        ,end:"top 60%"
       
        ,scrub:1
      },
      opacity:0,
      duration:4,      scale:0


    })
  })
  const [projects, setProjects] = useState("70");
  const [completed, setCompleted] = useState("50");
  const [experience, setExperience] = useState("1");
  const counterRef = useRef(null); // Reference to the counter section

  const startCounting = (setCount, targetCount, duration,plus) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < targetCount) {
        count += 1;
        setCount(count);
        if(count==plus){
                setCount(count+"+")
        }
      } else {
        clearInterval(interval);
      }
    }, duration);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start counting when the component is in view
            startCounting(setProjects, 60, 40,60);
            startCounting(setCompleted, 45, 59,45);
            startCounting(setExperience, 1, 900,1);
            observer.unobserve(entry.target); // Stop observing after counting starts
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (<>
    <div className="number flex justify-center w-screen   text-white number bg-gradient-to-t to-[#0F0715] from-black">
      <div
        ref={counterRef} // Attach the ref to the counter container
        className="sm:w-[90%] w-[97%] flex justify-around md:gap-10  items-center  mb-5 mt-17 md:mt-15  gap-2"
      >
        <div className="text-[#764CC4] rounded-lg w-[35%]   bg-white  flex flex-col justify-center items-center md:gap-10 sm:gap-5  font-extrabold">
          <div className=" w-[100%]   mt-5 md:text-7xl text-3xl text-center font-extrabold ">
            {projects}
          </div>
          <div className="tracking-tight   w-[100%] h-[50%] text-center text-black md:font-extrabold font-bold  md:text-4xl pb-2 text-[6vw]">
            Projects
          </div>
        </div>
        <div className="text-[#764CC4] rounded-lg w-[35%]   bg-white  flex flex-col justify-center md:gap-10 items-center font-extrabold sm:gap-5 "  >
          <div className=" w-[100%]   mt-5 md:text-7xl text-3xl text-center font-extrabold ">
            {completed}
          </div>
          <div className="tracking-tight w-[100%] h-[50%] text-center text-black   md:font-extrabold font-bold  md:text-4xl  pb-2 text-[6vw]">
            Completed
          </div>
        </div>
        <div className="text-[#764CC4] rounded-lg w-[35%]   bg-white  flex flex-col justify-center items-center font-extrabold md:gap-10 sm:gap-5 ">
          <div className=" w-[100%]  mt-5 md:text-7xl text-3xl text-center font-extrabold">
            {experience}
          </div>
          <div className="tracking-tight w-[100%] h-[50%] text-center text-black md:font-extrabold font-bold  md:text-4xl  pb-2 text-[6vw]">
            Experience
          </div>
        </div>
      </div>
    </div> 
     </>

  );
};

export default Number;