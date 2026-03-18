import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger)
// gsap.registerPlugin(Timeline)


const Projects = () => {
  
  const tl=gsap.timeline()
  useGSAP(()=>{
    gsap.from('.project',{
      scrollTrigger:{
        trigger:".project"
        ,start:"top 100%",
        
      },
      opacity:0,
      ease:"power1.inOut"
      ,duration:1,
      scale:0

    })
 
    tl.from('.img10',{
      scrollTrigger:{
        trigger:".img10"
        ,start:"top 100%",
        // end:'top 60%',
        // markers:true,
        // scrub:true
      },
      opacity:0,
      ease:"power3.inOut"
      ,duration:3,      scale:0


    })
    tl.from('.img20',{
      scrollTrigger:{
        trigger:".img20"
        ,start:"top 100%",
        // end:'top 60%',
        // markers:true,
        // scrub:true
      },
      opacity:0,
      ease:"power1.inOut"
      ,duration:3,      scale:0


    })
    tl.from('.img3',{
      scrollTrigger:{
        trigger:".img3"
        ,start:"top 100%",
        // end:'top 60%',
        // markers:true,
        // scrub:true
      },
      opacity:0,
      ease:"power1.inOut"
      ,duration:3,      scale:0


    })
    tl.from('.img4',{
      scrollTrigger:{
        trigger:".img4"
        ,start:"top 100%",
        // end:'top 60%',
        // markers:true,
        // scrub:true
      },
      opacity:0,
      ease:"power1.inOut"
      ,duration:3,      scale:0


    })
    tl.from('.img5',{
      scrollTrigger:{
        trigger:".img5"
        ,start:"top 100%",
        // end:'top 60%',
        // markers:true,
        // scrub:true
      },
      opacity:0,
      ease:"power1.inOut"
      ,duration:3,      scale:0


    })
    tl.from('.img6',{
      scrollTrigger:{
        trigger:".img6"
        ,start:"top 100%",
        // end:'top 60%',
        // markers:true,
        // scrub:true
      },
      opacity:0,
      ease:"power1.inOut"
      ,duration:3,      scale:0


    })
    tl.from('.img7',{
      scrollTrigger:{
        trigger:".img7"
        ,start:"top 100%",
        // end:'top 80%',
        // markers:true,
        // scrub:true
      },
      opacity:0,
      ease:"power1.inOut"
      ,duration:3,      scale:0


    })
    tl.from('.img8',{
      scrollTrigger:{
        trigger:".img8"
        ,start:"top 100%",
        // end:'top 80%',
        // markers:true,
        // scrub:true
      },
      opacity:0,
      ease:"power1.inOut"
      ,duration:5,      scale:0


    })
  })
  return (
    <div className=" text-white bg-gradient-to-t to-[#0F0715] mt-14   from-[#140C1C]">
      <div className="project flex justify-center items-center flex-col">
        <h1 className="sm:text-5xl  font-extrabold bg-gradient-to-tr to-white from-[#6a47b0] text-transparent bg-clip-text mt-20 text-3xl">
          My Recent Work
        </h1>
        <p className="md:w-[50%] w-[80%] text-center mt-4 font-thin">
          Explore my portfolio of recent projects to see how I've transformed
          ideas into dynamic digital solutions that drive results.
        </p>
      </div>
      <div className="grid md:grid-cols-2 p-3 md:px-24 py-8  gap-10 ">
        <div className=" img10 w-[100%] rounded-t-xl   h-[280px] bg-[#140C1C] flex justify-center relative   imgblock">
          <img
            className="w-[96%] h-[260px] bottom-0 absolute"
            src="project2.png"
            alt=""
          />
          <div className="bg-gradient-to-l to-[#804CEC] from-[#584974] absolute  w-[94%] md:max-h-[89%] max-h-[85%]  bottom-[-50px] imgtext p-4 md:p-6 ">
            <h1 className="font-extrabold text-2xl">Flymium</h1>
            <p className=" leading-tight text-justify mt-3">
              {" "}
              Developed a dynamic online presence for Flymium, a digital
              marketing agency. This project involved creating a user-friendly
              website that showcases Flymium’s comprehensive range of services,
              including SEO, content marketing, and social media strategies,
              designed to elevate brand visibility and client engagement .
            </p>
          </div>
        </div>
        <div className=" img20 w-[100%] rounded-t-xl h-[280px]  bg-[#140C1C] flex justify-center relative   imgblock">
          <img
            className="w-[96%] h-[260px] bottom-0 absolute"
            src="project6.png"
            alt=""
          />
          <div className="bg-gradient-to-l to-[#804CEC] from-[#584974] absolute w-[94%] md:max-h-[89%] max-h-[85%]  bottom-[-50px] imgtext p-4 md:p-6">
            <h1 className="font-extrabold text-2xl">Ai Code Reviewer</h1>
            <p className=" leading-tight text-justify mt-3">
              To create an AI code reviewer, implement code parsing and static
              analysis to identify syntax errors and common issues. Integrate
              best practices for coding standards and use machine learning to
              improve feedback accuracy. Utilize natural language processing
              (NLP) for generating human-readable suggestions. Finally, design a
              user-friendly interface for real-time code input and feedback.
            </p>
          </div>
        </div>
        <div className="img3 w-[100%] rounded-t-xl h-[280px]  bg-[#140C1C] flex justify-center relative   imgblock">
          <img
            className="w-[96%] h-[260px] bottom-0 absolute"
            src="project1.png"
            alt=""
          />
          <div className="bg-gradient-to-l to-[#804CEC] from-[#584974] absolute  w-[94%] md:h-[65%] md:max-h-[89%]  bottom-[-50px] imgtext p-4 md:p-6">
            <h1 className="font-extrabold text-2xl">Froutofy</h1>
            <p className=" leading-tight text-justify mt-3">
              {" "}
              An innovative e-commerce application designed to connect users
              with a marketplace for selling and buying fruits and sweets. The
              app features user-friendly navigation, seamless transaction
              processes, and an engaging interface that makes it easy for
              sellers to list their products and for buyers to make purchases
              efficiently.
            </p>
          </div>
        </div>
        <div className="img4 w-[100%] rounded-t-xl h-[280px]  bg-[#140C1C] flex justify-center relative   imgblock">
          <img
            className="w-[96%] h-[260px] bottom-0 absolute"
            src="project7.png"
            alt=""
          />
          <div className="bg-gradient-to-l to-[#804CEC] from-[#584974] absolute  w-[94%] md:max-h-[89%] max-h-[85%]  bottom-[-50px] imgtext p-4 md:p-6">
            <h1 className="font-extrabold text-2xl">E-Learning (LMS)</h1>
            <p className=" leading-tight text-justify mt-3">
              I created an e-learning LMS where instructors can post lectures
              and students can watch them. The platform allows instructors to
              upload video content, manage courses, and track student progress.
              Students can access lectures, participate in discussions, and
              complete assignments. This system enhances the learning experience
              by providing a structured environment for both teaching and
              learning.
            </p>
          </div>
        </div>
        <div className="img5 w-[100%] rounded-t-xl h-[280px]  bg-black flex justify-center relative   imgblock">
          <img
            className="w-[96%] h-[260px] bottom-0 absolute"
            src="project4.png"
            alt=""
          />
          <div className="bg-gradient-to-l to-[#804CEC] from-[#584974] absolute  w-[94%] md:max-h-[89%] max-h-[85%]  bottom-[-50px] imgtext p-4 md:p-6">
            <h1 className="font-extrabold text-2xl">Job Portal</h1>
            <p className=" leading-tight text-justify mt-1">
              I created a job portal where recruiters can post job openings and
              job seekers can find their dream jobs. Users can edit their
              profiles, upload resumes, and add profile pictures to enhance
              their visibility. The platform features a dashboard for managing
              applications and tracking job postings. A search function with
              filters helps job seekers find relevant positions quickly.
              Additionally, a messaging system facilitates direct communication
              between recruiters and candidates.
            </p>
          </div>
        </div>
        <div className="img6 w-[100%] rounded-t-xl h-[280px]  bg-black flex justify-center relative   imgblock">
          <img
            className="w-[96%] h-[260px] bottom-0 absolute"
            src="project5.png"
            alt=""
          />
          <div className="bg-gradient-to-l to-[#804CEC] from-[#584974] absolute  w-[94%] md:max-h-[89%] max-h-[85%]  bottom-[-50px] imgtext p-4 md:p-6">
            <h1 className="font-extrabold text-2xl">Get Dream Job</h1>
            <p className=" leading-tight text-justify mt-1">
              I created a job portal where recruiters can post job openings and
              job seekers can find their dream jobs. Users can edit their
              profiles, upload resumes, and add profile pictures to enhance
              their visibility. The platform features a dashboard for managing
              applications and tracking job postings. A search function with
              filters helps job seekers find relevant positions quickly.
              Additionally, a messaging system facilitates direct communication
              between recruiters and candidates.
            </p>
          </div>
        </div>
        <div className="img7 w-[100%] rounded-t-xl h-[280px]  bg-black flex justify-center relative   imgblock">
          <img
            className="w-[96%] h-[260px] bottom-0 absolute"
            src="project11.png"
            alt=""
          />
          <div className="bg-gradient-to-l to-[#804CEC] from-[#584974] absolute  w-[94%] md:max-h-[89%] max-h-[85%]  bottom-[-50px] imgtext p-4 md:p-6">
            <h1 className="font-extrabold text-2xl">Khao-pio</h1>
            <p className=" leading-tight text-justify mt-1">
              I created a fast food website for our restaurant where users can
              browse the full menu and order their favorite dishes. The platform
              allows customers to view detailed descriptions and images of each
              item. Users can also take advantage of special discounts available
              in our area. The website features a user-friendly interface for
              easy navigation and a seamless ordering process. Additionally,
              customers can track their orders and receive updates on delivery
              status.
            </p>
          </div>
        </div>
        <div className="img8 w-[100%] rounded-t-xl h-[280px]  bg-black flex justify-center relative   imgblock">
          <img
            className="w-[96%] h-[260px] bottom-0 absolute"
            src="project10.png"
            alt=""
          />
          <div className="bg-gradient-to-l to-[#804CEC] from-[#584974] absolute  w-[94%] md:max-h-[89%] max-h-[85%]  bottom-[-50px] imgtext p-4 md:p-6">
            <h1 className="font-extrabold text-2xl">Food Order</h1>
            <p className=" leading-tight text-justify mt-1">
              I created a fast food website for our restaurant where users can
              browse the full menu and order their favorite dishes. The platform
              allows customers to view detailed descriptions and images of each
              item. Users can also take advantage of special discounts available
              in our area. The website features a user-friendly interface for
              easy navigation and a seamless ordering process. Additionally,
              customers can track their orders and receive updates on delivery
              status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
