import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Signin from './pages/signIn/Signin'
import Students from './pages/students/Students'
import Payment from './pages/payment/Payment'
import Course from './pages/course/Course'
import Sidebar from './components/sidebar/Sidebar'
import Edit from './pages/edit/Edit'

const App = () => {
  const [signed, setSigned] = useState(false)
    const [changed, setChanged] = useState(false)

  if (signed) {
  return (
      <div className='flex flex-1 relative w-full'>
        <Sidebar setSigned={setSigned} />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/students' element={<Students  changed={changed} setChanged={setChanged}  />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/course' element={<Course />} />
          <Route path='/edit/:id' element={<Edit changed={changed} setChanged={setChanged}  />} />
        </Routes>
      </div>
    )
  } else if (!signed) {
    return (
      <div>
        <Signin setSigned={setSigned}  />
      </div>
    )
  }


}

export default App