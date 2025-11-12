import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../../features/getInfo/infoSlice'
import Loader from '../../components/loader/Loader'

const Edit = ({ setChanged }) => {
    const url = "https://68eb4fa276b3362414cd5222.mockapi.io/users"

    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const param = useParams();
    const navigate = useNavigate();

    const imgRef = useRef()
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const enrollRef = useRef()
    const dateRef = useRef()

    useEffect(() => {
        const fetchData = () => {
            axios.get(`${url}/${param.id}`)
                .then(resp => setData(resp.data)
                )
                .catch(error => console.log(error)
                )
        }
        fetchData()
    }, [])

    const sendData = (e) => {
        e.preventDefault()
        let updatedUser = {
            name: nameRef?.current.value,
            imageUrl: imgRef?.current.value,
            email: emailRef?.current.value,
            phoneNumber: phoneRef?.current.value,
            enrollNumber: enrollRef?.current.value,
            date: dateRef?.current.value,
            id: data?.id,
        }
        dispatch(editUser(updatedUser));

        nameRef.current.value = ""
        emailRef.current.value = ""
        dateRef.current.value = ""
        phoneRef.current.value = ""
        enrollRef.current.value = ""
        imgRef.current.value = ""
        
        setChanged(true)
        navigate(-1)
    }


    return (
        <div className='w-full min-h-screen bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%'>
            <div className="main-container">
                <div className="flex items-center justify-center min-h-screen">
                    <form onSubmit={sendData} className='rounded-lg bg-fuchsia-400/50 backdrop-blur-md //bg-fuchsia-600 p-3 sm:p-6 flex flex-col gap-4'>
                        <h1 className='text-center text-lg sm:text-2xl font-semibold text-[#FEAF00]'>Edit User</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                            <div className="flex flex-col">
                                <label className='text-white text-base sm:text-lg font-medium cursor-pointer' htmlFor="url">Image URL:</label>
                                <input ref={imgRef} defaultValue={data.imageUrl} id='url' type="text" placeholder='Image URL' className='bg-white/50 border-2 border-white text-black min-w-[250px] px-2 py-1 rounded-md outline-0 transition-all duration-300 focus:shadow-xl focus:shadow-[#FEAF00] //focus:bg-transparent focus:scale-110 focus:text-cyan-800' />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-white text-base sm:text-lg font-medium cursor-pointer' htmlFor="name">Name:</label>
                                <input ref={nameRef} defaultValue={data.name} id='name' type="text" placeholder='Name' className='bg-white/50 border-2 border-white text-black min-w-[250px] px-2 py-1 rounded-md outline-0 transition-all duration-300 focus:shadow-xl focus:shadow-[#FEAF00] //focus:bg-transparent focus:scale-110 focus:text-cyan-800' />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-white text-base sm:text-lg font-medium cursor-pointer' htmlFor="email">Email:</label>
                                <input ref={emailRef} defaultValue={data.email} id='email' type="email" placeholder='Email' className='bg-white/50 border-2 border-white text-black min-w-[250px] px-2 py-1 rounded-md outline-0 transition-all duration-300 focus:shadow-xl focus:shadow-[#FEAF00] //focus:bg-transparent focus:scale-110 focus:text-cyan-800' />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-white text-base sm:text-lg font-medium cursor-pointer' htmlFor="phone">Phone Number:</label>
                                <input ref={phoneRef} defaultValue={data.phoneNumber} id='phone' type="number" placeholder='Phone Number' className='bg-white/50 border-2 border-white text-black min-w-[250px] px-2 py-1 rounded-md outline-0 transition-all duration-300 focus:shadow-xl focus:shadow-[#FEAF00] //focus:bg-transparent focus:scale-110 focus:text-cyan-800' />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-white text-base sm:text-lg font-medium cursor-pointer' htmlFor="enroll">Enroll Number:</label>
                                <input ref={enrollRef} defaultValue={data.enrollNumber} id='enroll' type="number" placeholder='Enroll Number' className='bg-white/50 border-2 border-white text-black min-w-[250px] px-2 py-1 rounded-md outline-0 transition-all duration-300 focus:shadow-xl focus:shadow-[#FEAF00] //focus:bg-transparent focus:scale-110 focus:text-cyan-800' />
                            </div>
                            <div className="flex flex-col">
                                <label className='text-white text-base sm:text-lg font-medium cursor-pointer' htmlFor="date">Date:</label>
                                <input ref={dateRef} defaultValue={data.date} id='date' type="date" placeholder='Date' className='bg-white/50 border-2 border-white text-black min-w-[250px] px-2 py-1 rounded-md outline-0 transition-all duration-300 focus:shadow-xl focus:shadow-[#FEAF00] //focus:bg-transparent focus:scale-110 focus:text-cyan-800' />
                            </div>

                        </div>
                        <div className="flex items-center justify-end gap-4">
                            <button type='submit' className='bg-green-600 py-1 px-5 rounded-lg text-white border-2 border-white cursor-pointer transition-all duration-300 hover:bg-transparent'>Save</button>
                            <Link to="/students">
                                <button type='button' className='bg-red-400 py-1 px-5 rounded-lg text-white border-2 border-white cursor-pointer transition-all duration-300 hover:bg-transparent'>Cancel</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit
