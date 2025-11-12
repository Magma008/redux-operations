import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import mini from "../../assets/mini_Icon.png"
import { FaPencilAlt } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../features/getInfo/infoSlice';
import axios from 'axios';
import Loader from '../../components/loader/Loader';

const Students = ({ changed, setChanged }) => {
  const url = "https://68eb4fa276b3362414cd5222.mockapi.io/users"
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  const handleDelete = (id) => {
    if (confirm("Do you really want to delete this user?")) {
      dispatch(deleteUser(id));
      setChanged(true)
      console.log(changed);
    } return id
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(url)
          .then(res => setData(res.data)
          )
          .catch(error => console.log(error)
          )
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    setChanged(false)
  }, [url, changed])


  return (
    <div className='w-full bg-[#F8F8F8] min-h-screen'>
      <div className="main-container">

        <div className="flex p-4 flex-col gap-3 items-center sm:flex-row justify-between">
          <h1 className='text-xl font-bold'>Students List</h1>
          <Link to="/" >
            <button className='bg-[#F8D442] p-1  py-0.5 sm:p-1.5 sm:px-3 rounded-lg transition-all duration-300 text-cyan-500 border-2 border-[#F8D442] text-[15px] cursor-pointer hover:bg-transparent hover:shadow-lg hover:shadow-cyan-600 hover:border-cyan-500'>ADD NEW STUDENT</button>
          </Link>
        </div>

        <div className="overflow-auto w-full">
          <table cellSpacing="10" className="xl:table-auto border-separate border-spacing-y-5 overflow-auto  border-blue-200 w-full gap-0.5">
            <thead className='p-48'>
              <tr className='text-[15px] lg:text-base'>
                <th></th>
                <th className='text-left'><p className='text-[15px] md:text-base w-max px-4'>Name</p></th>
                <th className='text-left'><p className='text-[15px] md:text-base w-max px-4'>Email</p></th>
                <th className='text-left'><p className='text-[15px] md:text-base w-max px-4'>Phone Number</p></th>
                <th className='text-left'><p className='text-[15px] md:text-base w-max px-4'>Enroll Number</p></th>
                <th className='text-left'><p className='text-[15px] md:text-base w-max px-4'>Date of Admission</p></th>
                <th></th>
              </tr>
            </thead>
            <tbody className=''>
              {
                // (users.value).map((person, i) => (
                //   <tr key={i} className='border-2 bg-white py-4'>
                //     <td className='whitespace-nowrap w-fit px-4 py-4'>
                //       <div className="w-[50px]">
                //         <img className='w-full h-full' src={mini} alt="mini" />
                //       </div>
                //     </td>
                //     <td className='whitespace-nowrap w-fit px-4 py-4'>
                //       <p className='text-[14px] font-normalt'>{person.name}</p>
                //     </td>
                //     <td className='whitespace-nowrap w-fit px-4 py-4'>
                //       <p className='text-[14px] break-all xl:break-[none] font-normalt'>{person.email}</p>
                //     </td>
                //     <td className='whitespace-nowrap w-fit px-4 py-4'>
                //       <p className='text-[14px] font-normalt'>{person.phone}</p>
                //     </td>
                //     <td className='whitespace-nowrap w-fit px-4 py-4'>
                //       <p className='text-[14px] font-normalt'>{person.enroll}</p>
                //     </td>
                //     <td className='whitespace-nowrap w-fit px-4 py-4'>
                //       <p className='text-[14px] font-normalt'>{person.date}</p>
                //     </td>
                //     <td className='whitespace-nowrap w-fit px-4 py-4'>
                //       <div className="flex gap-6 text-[20px] text-[#FEAF00]">
                //         <button>
                //           <FaPencilAlt className='cursor-pointer' />
                //         </button>
                //         <button onClick={() => handleDelete(person.id)}>
                //           <IoTrash className='cursor-pointer' />
                //         {/* <IoTrash onClick={() => dispatch(deleteUser(person.id))} className='cursor-pointer' /> */}
                //         </button>
                //       </div>
                //     </td>
                //   </tr>
                // ))
                data.map((person, i) => (
                  <tr key={i} className='border-2 bg-white py-4'>
                    <td className='whitespace-nowrap w-fit px-4 py-4'>
                      <div className="w-[50px]">
                        <img className='w-full h-full' src={person?.imageUrl.length > 14 ? person.imageUrl : mini} alt="mini" />
                      </div>
                    </td>
                    <td className='whitespace-nowrap w-fit px-4 py-4'>
                      <p className='text-[14px] font-normalt'>{person?.name}</p>
                    </td>
                    <td className='whitespace-nowrap w-fit px-4 py-4'>
                      <p className='text-[14px] break-all xl:break-[none] font-normalt'>{person.email}</p>
                    </td>
                    <td className='whitespace-nowrap w-fit px-4 py-4'>
                      <p className='text-[14px] font-normalt'>{person?.phoneNumber || "Unavailable"}</p>
                    </td>
                    <td className='whitespace-nowrap w-fit px-4 py-4'>
                      <p className='text-[14px] font-normalt'>{person?.enrollNumber}</p>
                    </td>
                    <td className='whitespace-nowrap w-fit px-4 py-4'>
                      <p className='text-[14px] font-normalt'>{person?.date}</p>
                    </td>
                    <td className='whitespace-nowrap w-fit px-4 py-4'>
                      <div className="flex gap-6 text-[20px] text-[#FEAF00]">
                        <Link to={`/edit/${person?.id}`} >
                          <button className='transition-all duration-300 hover:scale-[1.3]'>
                            <FaPencilAlt className='cursor-pointer' />
                          </button>
                        </Link>
                        <button className='transition-all duration-300 hover:scale-[1.3]' onClick={() => handleDelete(person?.id)}>
                          <IoTrash className='cursor-pointer' />
                          {/* <IoTrash onClick={() => dispatch(deleteUser(person.id))} className='cursor-pointer' /> */}
                        </button>
                      </div>
                    </td>
                  </tr>
                )) 
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Students
