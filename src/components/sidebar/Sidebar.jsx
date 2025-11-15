import React from 'react'
import circle from "../../assets/main_Icon.png"
import { Link } from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { GiKnightBanner } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { HiOutlineLogout } from "react-icons/hi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';

const Sidebar = ({ setSigned }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className={`w-[150px] transition-all z-30 duration-300 ${!isOpen && "translate-x-[-153px] sm:translate-x-[-202px] md:translate-x-[-330px]"} fixed ${isOpen ? "xl:sticky" : "xl:fixed"} sm:w-[200px] md:w-[330px] min-h-screen bg-[rgba(242,234,225,0.5)] backdrop-blur-sm xl:backdrop-blur-none  xl:bg-[#F2EAE1] p-1.5 sm:p-3 md:p-5`}>
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-[13px] md:text-[20px] font-bold pl-1 sm:pl-3 border-l-6 border-l-[#F8D442]">CRUD OPERATIONS</h3>

        <div className="flex items-center flex-col gap-3">
          <img className='w-[50%] md:w-fit' src={circle} alt="circle" />
        </div>

        <ul className="flex flex-col">
          <Link to="/" >
            <li className="flex items-center gap-3 sm:text-[25px] pl-2  md:pl-[30%] p-1.5 sm:p-2 md:p-3 hover:text-cyan-600 hover:pl-5 md:hover:pl-[35%] rounded-lg bg-transparent duration-200 transition-all hover:bg-[#FEAF00]">
              <IoHome />
              <span className='text-[14px] font-normal'>Home</span>
            </li>
          </Link>
          <Link to="course" >
            <li className="flex items-center gap-3 sm:text-[25px] pl-2  md:pl-[30%] p-1.5 sm:p-2 md:p-3 hover:text-cyan-600 hover:pl-5 md:hover:pl-[35%] rounded-lg bg-transparent duration-200 transition-all hover:bg-[#FEAF00]">
              <GiKnightBanner />
              <span className='text-[14px] font-normal'>Course</span>
            </li>
          </Link>
          <Link to="students">
            <li className="flex items-center gap-3 sm:text-[25px] pl-2  md:pl-[30%] p-1.5 sm:p-2 md:p-3 hover:text-cyan-600 hover:pl-5 md:hover:pl-[35%] rounded-lg bg-transparent duration-200 transition-all hover:bg-[#FEAF00]">
              <FaGraduationCap />
              <span className='text-[14px] font-normal'>Students</span>
            </li>
          </Link>
          <Link to="payment">
            <li className="flex items-center gap-3 sm:text-[25px] pl-2  md:pl-[30%] p-1.5 sm:p-2 md:p-3 hover:text-cyan-600 hover:pl-5 md:hover:pl-[35%] rounded-lg bg-transparent duration-200 transition-all hover:bg-[#FEAF00]">
              <RiMoneyDollarBoxFill />
              <span className='text-[14px] font-normal'>Payment</span>
            </li>
          </Link>
        </ul>

        <div className='absolute bottom-[35px] left-[25%] sm:left-[30%]  md:left-[35%]'>
          <div onClick={() => setSigned(false)} className="flex items-center mt-auto gap-3 group text-[18px] md:text-[20px] justify-center transition-all duration-200 hover:text-red-500 cursor-pointer">
            <span className='text-[14px] font-normal'>Logout</span>
            <HiOutlineLogout className='transition-all duration-300 group-hover:rotate-180 group-hover:scale-[1.5]' />
          </div>
        </div>

      </div>
      <div className='bg-[rgba(242,234,225,0.5)] backdrop-blur-sm xl:backdrop-blur-none absolute xl:bg-[#F2EAE1] bottom-6 -right-12 text-red-600 rounded-tr-md rounded-br-md p-3'>
        <FaArrowAltCircleRight onClick={() => setIsOpen(!isOpen)} className={` transition-all duration-300 ${isOpen && "rotate-180"} cursor-pointer text-[25px]`} />
      </div>
    </div>
  )
}

export default Sidebar
