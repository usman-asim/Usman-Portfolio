import React from "react";
import { Link } from "react-router-dom";

const Foooter = () => {
  return (
    <div className=" h-[250px] justify-between items-center bg-[#0F0715]  flex flex-col">
      {/* <div className=" absolute  left-10 gap-4 text-[36px] flex flex-col justify-center items-center mt-14  text-green-800">
        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/chaudhary-usman-asim-949264300/"}
        >
          {" "}
          <img className="w-8 h-8" src="linkdin.png" alt="" />
        </Link>
        <img className="w-12 h-12" src="instagram.png" alt="" />
        <Link target="_blank" to={"https://github.com/osmandevlpr"}>
          {" "}
          <img className="w-8 h-8 bg-gray-300" src="github.png" alt="" />
        </Link>

        {/* <img className="w-10 h-9 bg-white" src="github.png" alt="" /> */}
      {/* </div>  */}

      <div>
        <img className="w-20  mt-5" src="portfoliologo.png" alt="" />
      </div>
      <div className="flex flex-row mt-5 text-white sm:gap-5 gap-3 font-bold items-center justify-center">
        <Link to="/About">
          {" "}
          <h2 className=" hover:text-[white] hover:font-light">About me</h2>
        </Link>
        <Link to="/Services">
          {" "}
          <h2 className=" hover:text-[white] hover:font-light">Services</h2>
        </Link>
        <Link to="/Skills">
          {" "}
          <h2 className=" hover:text-[white] hover:font-light">Skills</h2>
        </Link>
        <Link to="/Contact">
          {" "}
          <h2 className=" hover:text-[white] hover:font-light">Contact us </h2>
        </Link>
      </div>

      {/* <div className='flex flex-col mt-8 mr-12 font-semibold text-1xl '>
        <h2 className='text-[19px]'>Get In Touch</h2>
        <h1 className='mt-2'>+92 3197135894</h1>
        <a href="https://wa.me/923447290612"  className='mt-2 hover:text-white hover:font-light' target="_blank">+92 3447290612</a>
        <a href="mailto:usmandevlpr@gmail.com"  className='mt-2 hover:text-white hover:font-light'>usmandevlpr@gmail.com</a>
        
        <h1 className='mt-2 '>57-A Sadar <br/> Pakistan-42</h1>
      </div> */}
      <div>
        <h1 className="">
          <footer className="text-[#8350F7] text-[15px] text-center mb-3 font-medium bg-[#0F0715] ">
            Copyright © {new Date().getUTCFullYear()} Usman-Dvlpr. <br /> All
            rights reserved.
          </footer>
        </h1>
      </div>
    </div>
  );
};

export default Foooter;
