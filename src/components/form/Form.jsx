import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../features/getInfo/infoSlice'

const Form = () => {
  const dispatch = useDispatch()

  const imgRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const enrollRef = useRef()
  const dateRef = useRef()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      name: nameRef.current.value,
      imageUrl: imgRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
      enrollNumber: enrollRef.current.value,
      date: dateRef.current.value,
    }
    
    dispatch(addUser(obj))
    nameRef.current.value = ""
    emailRef.current.value = ""
    dateRef.current.value = ""
    phoneRef.current.value = ""
    enrollRef.current.value = ""
    imgRef.current.value = ""
  }

  return (
    <div className='p-3 sm:p-5 rounded-lg bg-[#F2EAE1]'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <h1 className='text-center text-lg sm:text-xl font-semibold'>Add Users</h1>
        <input className='outline-none p-1 sm:p-1.5 sm:px-3 rounded-full px-2.5 border-2 border-[#F8D442] bg-transparent min-w-60 transition-all duration-300 focus:shadow-lg focus:placeholder:text-orange-500 focus:shadow-orange-400 sm:min-w-[300px]' ref={imgRef} type="text" placeholder="User's Image Link" />

        <input  className='outline-none p-1 sm:p-1.5 sm:px-3 rounded-full px-2.5 border-2 border-[#F8D442] bg-transparent min-w-60 transition-all duration-300 focus:shadow-lg focus:placeholder:text-orange-500 focus:shadow-orange-400 sm:min-w-[300px]' required ref={nameRef} type="text" placeholder="Name" />

        <input className='outline-none p-1 sm:p-1.5 sm:px-3 rounded-full px-2.5 border-2 border-[#F8D442] bg-transparent min-w-60 transition-all duration-300 focus:shadow-lg focus:placeholder:text-orange-500 focus:shadow-orange-400 sm:min-w-[300px]' required ref={emailRef} type="email" placeholder="Email" />

        <input className='outline-none p-1 sm:p-1.5 sm:px-3 rounded-full px-2.5 border-2 border-[#F8D442] bg-transparent min-w-60 transition-all duration-300 focus:shadow-lg focus:placeholder:text-orange-500 focus:shadow-orange-400 sm:min-w-[300px]' ref={phoneRef} type="number" placeholder="Phone Number" />

        <input className='outline-none p-1 sm:p-1.5 sm:px-3 rounded-full px-2.5 border-2 border-[#F8D442] bg-transparent min-w-60 transition-all duration-300 focus:shadow-lg focus:placeholder:text-orange-500 focus:shadow-orange-400 sm:min-w-[300px]' required ref={enrollRef} type="number" placeholder="Enroll Number" />

        <input className='outline-none p-1 sm:p-1.5 sm:px-3 rounded-full px-2.5 border-2 border-[#F8D442] bg-transparent min-w-60 transition-all duration-300 focus:shadow-lg focus:placeholder:text-orange-500 focus:shadow-orange-400 sm:min-w-[300px]' required ref={dateRef} type="date" placeholder="Date" />

        <button className='bg-[#F8D442] p-1 sm:p-1.5 rounded-full transition-all duration-300 text-cyan-500 border-2 border-[#F8D442] cursor-pointer hover:bg-transparent hover:shadow-lg hover:shadow-cyan-600 hover:border-cyan-500' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form
