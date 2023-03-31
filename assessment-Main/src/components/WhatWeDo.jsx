import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='w-full h-[500px] flex justify-center items-center'>
    <div className='flex'>
    <div className='w-[294] h-[131] flex justify-center items-start pr-8'>
      <h1>Safe & Reliable<br/> Cargo Solutions</h1>
    </div>
    <div className='grid grid-cols-2 gap-20 justify-center items-center'>

      <div className='flex'>
        <img src="/assests/wwd-boat.png" alt="icon" />
        <div className=' h-[100px] border-r-2 mt-2 border-[#F4F4F4] mx-4'></div>
        <div>
          <h3>Sea Transport Services</h3>
          <p className='py-4'>Following the quality of our service<br/> thus having gained trust of our<br /> many clients.</p>
        </div>
      </div>

      <div className='flex'>
      <img src="/assests/wwd-load.png" alt="icon" />
      <div className=' h-[100px] border-r-2 mt-2 border-[#F4F4F4] mx-4'></div>
      <div>
        <h3>Warehousing Services</h3>
        <p className='py-4'>Following the quality of our service<br/> thus having gained trust of our<br /> many clients.</p>
      </div>
    </div>

    <div className='flex'>
    <img src="/assests/wwd-plane.png" alt="icon" />
    <div className=' h-[100px] border-r-2 mt-2 border-[#F4F4F4] mx-4'></div>
    <div>
      <h3>Air Fright Services</h3>
      <p className='py-4'>Following the quality of our service<br/> thus having gained trust of our<br /> many clients.</p>
    </div>
  </div>

  <div className='flex'>
  <img src="/assests/wwd-truck.png" alt="icon" />
  <div className=' h-[100px] border-r-2 mt-2 border-[#F4F4F4] mx-4'></div>
  <div>
    <h3>Local Shipping Services</h3>
    <p className='py-4'>Following the quality of our service<br/> thus having gained trust of our<br /> many clients.</p>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default WhatWeDo