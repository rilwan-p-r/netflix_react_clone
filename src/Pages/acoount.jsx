import React from 'react'
import Savedshows from '../components/savedshows'
const Acoount = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_medium.jpg"
          alt="/"
        />
        <div className='bg-black/60 fixed top-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md::text-5xl font-bold'>My Shows</h1>
        </div>
    </div>
    <Savedshows/>
    </>
  )
  
}

export default Acoount
