import React, { useRef, useState } from 'react'

const Signin = ({ setSigned }) => {
  const [isTrue, setIsTrue] = useState(true)
  const nameRef = useRef()
  const emailRef = useRef()

  const getInfo = (e) => {
    e.preventDefault();

    if (nameRef.current.value == "admin" && emailRef.current.value == "1234") {
      setSigned(true)
      nameRef.current.value = ""
      emailRef.current.value = ""

    } else {
      setIsTrue(false)
    }

  }

  return (
    <div className='min-h-screen  w-full bg-linear-to-r from-[#FEAF00] to-[#F8D442] flex justify-center items-center'>
      <div className="form  h-fit sm:w-[400px] sm:h-[500px] bg-white p-3 sm:p-5 sm:px-6 rounded-lg">
        <div className="flex flex-col gap-4 justify-between h-full">

          <h1 className="text-[20px] sm:text-[28px] font-bold pl-2.5 border-l-[#F8D442] border-l-6">CRUD OPERATIONS</h1>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-[18px] sm:text-[22px] font-semibold">SIGN IN</p>
            <p className="text-[14px] font-normal">Enter your credentials to access your account</p>
          </div>

          {
            !isTrue && <p className="text-center text-red-500 text-[14px]">Wrong username or password!</p>
          }

          <form onSubmit={getInfo} className='flex flex-col gap-4' id='mainForm'>
            <div className="flex flex-col gap-1">
              <label className='cursor-pointer text-[14px] font-normal' htmlFor="username">Username</label>
              <input required ref={nameRef} className='border-[1.5px] border-gray-400 rounded-sm px-3 outline-0 py-2' type="text" id='username' placeholder='Enter your username' />
            </div>
            <div className="flex flex-col gap-1">
              <label className='cursor-pointer text-[14px] font-normal' htmlFor="pass">Password</label>
              <input required ref={emailRef} className='border-[1.5px] border-gray-400 rounded-sm px-3 outline-0 py-2' type="password" id='pass' placeholder='Enter your password' />
            </div>
            <button type='submit' className="text-white duration-200 transition-all bg-[#FEAF00] border-2 border-[#FEAF00] hover:bg-transparent hover:text-[#FEAF00] py-2 px-2.5 text-[14px] rounded-sm cursor-pointer mt-4">SIGN IN</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Signin
