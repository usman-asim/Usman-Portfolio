import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
// import About from '../pages/About';
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
const Landing = () => {
  // useGSAP(() => {
  //   gsap.from('.h1h', {
  //     scrollTrigger: {
  //       trigger: ".land", // The element that triggers the animation
  //       start: "top top", // Start the animation when the top of the trigger element hits the top of the viewport
  //       end: "top+=2 top", // End the animation when the top of the trigger element is 2 pixels above the top of the viewport
  //       scrub: 1, // Smoothly link the animation to the scroll position
  //       markers: true // Show markers for debugging
  //     },
  //     translateX: 40, // Move the element 40 pixels to the right
  //     duration: 0.5, // Duration of the animation
  //     opacity: 0 // Start with opacity 0
  //   });
  // });    
  const tl=gsap.timeline()

  useGSAP(() => {
    gsap.to('.h1hh', {
      scrollTrigger: {
        trigger: ".land", // The element that triggers the animation
        start: "bottom bottom+=100", // Start the animation when the bottom of the viewport is 1 pixel above the bottom of the trigger element
        end: "bottom+=740 bottom", // End the animation when the bottom of the trigger element is 30 pixels above the bottom of the viewport
        scrub: 1, // Smoothly link the animation to the scroll position
        // markers: true, // Show markers for debugging
      },
      translateY: 290, // Move the element 40 pixels to the right
      duration: 0.3, // Duration of the animation
      opacity: 0.4,
      scale:0 // Start with opacity 0
      ,ease:"power1.inOut"
    });

    tl.from("#land1",{
      x:-1100,
      duration:1,
      opacity:0
    })
    tl.from("#land2",{
      x:-1100,
      duration:0.5
      ,opacity:0
    })
    tl.from("#land3",{
      x:-1000,
      opacity:0
    })
    tl.from("#land4",{
      duration:0.7,
      opacity:0
    })
    tl.from(".land5", {
      duration: 0.2,
      opacity: 0,
      ease: "power1.out" // Optional: Add easing for a smoother effect
    });
    gsap.from(".moband", {
      duration:0.9,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".moband", // The element that triggers the animation
        start: "top 70%", // Start the animation when the top of .moband is 80% from the top of the viewport
        toggleActions: "play none play reverse", // Play the animation on enter, reverse on leave
        // once: false // Animation will only happen once
        
      }
    });
  });
  const navigate = useNavigate();

  const reff = useRef();
  useEffect(() => {
    if ([].current) {
      reff.current.playbackRate = 0.2;
    }
  }, []);




  return (
    <>
      <div
        id="landing"
        className="land overflow-hidden  sm:flex justify-between w-full max-h-full  sm:h-screen mt-20 bg-[#0F0715]   relative "
      >
        {/* <video
          className="bg-red-800 absolute hidden md:block w-[50vw] bottom-0 h-[100%] right-0 object-cover blur-[120px]"
          muted
          autoPlay
          loop
          ref={reff}
          src="/3130284-uhd_3840_2160_30fps.mp4"
        ></video> */}
        <div className="part1 relative  text-white flex flex-col mt-14 sm:mt-0  ml-4 sm:ml-10 justify-center ">
          <h1 id="land1" className=" text-[3.5vh] ">Hi, I'm Usman Asim</h1>
          <h2 id="land2" className="h1h mt-2 sm:mt-5 text-[7.5vw] sm:text-5xl font-bold bg-gradient-to-r from-[#764CC4] to-[#f43c36] bg-clip-text text-transparent ">
            A Mern Stack
            <span className=" bg-gradient-to-r from-[#764CC4] to-white bg-clip-text text-transparent">
              {" "}
              Developer &
            </span>{" "}
          </h2>
          <h3 id="land3" className="lg:text-[75px] md:text-[65px] sm:text-[55px] text-[12vw] text-[#764CC4] font-bold">
            Web designer
          </h3>
          <h1 id="land4" className=" hidden sm:block w-[60%] sm:w-[90%] tracking-wide text-[21px] mt-14 font-light text-gray-200">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </h1>
          <div className="land5 hidden sm:flex gap-5 text-[#7E4BE7] mt-5">
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/chaudhary-usman-asim-949264300/"}
          >
            <h1 className="border w-9 h-9 transition-all duration-600  border-[#7E4BE7] rounded-full flex items-center justify-center hover:bg-[#7E4BE7] hover:text-white">
              <i class="ri-linkedin-fill"></i>
            </h1></Link>
            <Link target="_blank" to={"https://github.com/osmandevlpr"}>
            <h1 className="border w-9 h-9 border-[#7E4BE7] transition-all duration-600  rounded-full flex items-center justify-center hover:bg-[#7E4BE7] hover:text-white">
              <i class="ri-github-fill"></i>
            </h1></Link>
            <Link target="_blank" to={"https://github.com/osmandevlpr"}>
            <h1 className="border w-9 h-9 border-[#7E4BE7] transition-all duration-600  rounded-full flex items-center justify-center hover:bg-[#7E4BE7] hover:text-white">
              <i class="ri-instagram-fill"></i>
            </h1></Link>
          </div>
        </div>

        <div
          oncl
          className="w-[60vw] md:flex hidden relative items-center   justify-center"
        >
          <img
            className="h1hh w-[350px] h-[390px]  bg-black rotate-5 hover:rotate-0 transition-all  rounded-4xl border-[#3D256E] border-2"
            src="/usmanbgremove.png"
          />
        </div>
        <div
          oncl
          className="w-[100vw] p-3 sm:hidden  flex  items-center  justify-center "
        >
          <img
            className=" h1hh h-[50vh] mt-4 bg-black rotate-5 hover:rotate-0 transition-all  rounded-4xl border-[#3D256E] border-2"
            src="/usmanbgremove.png"
          />
        </div>
        <h1 className="moband px-4 sm:hidden  text-justify tracking-tight w-[100%] sm:w-[90%]  text-[21px] mb-4 mt-14 font-light text-gray-200">
          I break down complex user experinece problems to create integritiy
          focussed solutions that connect billions of people
        </h1>
        <div className=" mb-8 px-5 sm:hidden flex gap-5 text-[#7E4BE7] mt-2">
          <Link
            target="_blank"
            to={"https://www.linkedin.com/in/chaudhary-usman-asim-949264300/"}
          >
            {" "}
            <h1 className=" hover:bg-[#7E4BE7] hover:text-white border w-9 h-9 border-[#7E4BE7] rounded-full flex items-center justify-center">
              <i class="ri-linkedin-fill"></i>
            </h1>
          </Link>
          <Link target="_blank" to={"https://github.com/osmandevlpr"}>
            <h1 className=" hover:bg-[#7E4BE7] hover:text-white border w-9 h-9 border-[#7E4BE7] rounded-full flex items-center justify-center">
              <i class="ri-github-fill"></i>
            </h1>
          </Link>
          <Link target="_blank" to={"https://wa.me/923197135894"}>
            <h1 className="hover:bg-[#7E4BE7] hover:text-white border w-9 h-9 border-[#7E4BE7] rounded-full flex items-center justify-center">
              <i class="ri-instagram-fill"></i>
            </h1>
          </Link>
        </div>
        <Link target="_blank" to={"https://wa.me/923197135894"}>
          <img
            className="whatsapp w-[59px] h-[59px] z-50 fixed bottom-6 right-6 "
            src="whatsapp logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center justify-center  ">
        <p className="w-[90%] h-[1px] bg-[#7E4BE7] text-center   " />
      </div>
    </>
  );
};

export default Landing;