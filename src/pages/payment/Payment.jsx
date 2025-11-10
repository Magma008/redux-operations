import React from 'react'
import bg from "../../assets/moneyBg.jpg"
import money from "../../assets/money.png"
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className='w-full min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center' style={{backgroundImage: `url(${bg})`}} >
      <Link to="/course">
        <img src={money} alt="$$" />
      </Link>
    </div>
  )
}

export default Payment
Payment