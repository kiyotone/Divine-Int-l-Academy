import React from 'react'
import Navigation from './Navigation';
import logo from '../public/logo.png'
import Image from 'next/image';


const Topbar = () => {
    const classes =
    `w-full flex justify-between text-[#2358a5] transition-all rounded-b shadow-md ease-in-out md:justify-start bg-white p-6 items-center h-[90px] z-50`;
  return (

    <div className={classes}>
      <div className="md:text-center md:w-[95%] flex items-center">
        <Image src={logo} alt="1" width={100} height={100}/>
        <div className='font-bold text-[#2aa0cf] w-[6rem] text-center'>
            Divine Int'l Academy
        </div>
            
        
        </div>

        <div className="hidden md:block text-2xl">

            <Navigation />

        </div>
    </div>
  )
}

export default Topbar