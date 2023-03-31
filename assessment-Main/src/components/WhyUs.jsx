import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

const WhyUs = () => {
  return (
    <div className='relative flex flex-col justify-center items-center mb-16'>
      <div className='absolute top-72 w-[950px] h-[400px] bg-white flex '>
        <div className='grid grid-cols-2 p-[50px]'>
          <div className='flex flex-col '>
            <h2>We provide full range global logistics solution</h2>
            <p className='py-6'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p> 
            <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
            <div className='flex flex-col'>
              <div className='flex items-center pt-4'>
                <div className='h-[40px] w-[40px] bg-[#F6B426] rounded-full flex justify-center items-center'>
                  <AiOutlineClockCircle 
                  size={20}
                  style={{color:'#111C55'}}
                  />
                </div>
                  <h4 className='pl-4'>Delivery on Time</h4>
              </div>
              <div className='flex items-center  pt-4'>
                <div className='h-[40px] w-[40px] bg-[#F6B426] rounded-full flex justify-center items-center'>
                  <AiOutlineClockCircle 
                  size={20}
                  style={{color:'#111C55'}}
                  />
                </div>
                  <h4 className='pl-4'>Optimized Travel Cost</h4>
              </div>
            </div>
          </div>
          <div>
          <img src="/assests//full-airplane.png" alt="" />
          </div>
        </div>
      </div>
    <img src="/assests/Background.jpg" alt="/" />

    <div className='pt-[350px] h-[143px] w-[700px] pb-10'>
      <div className='flex flex-col justify-center items-center '>
        <hr className='w-full h-1' />
        <div className='flex'>
          <div className='flex justify-center items-center gap-4'>
          <h1>1294</h1>
          <div className='h-4 w-4 bg-[#FFB629]'></div>
          <p>Deliverd Package</p>
        </div>
        <div className=' h-[100px] border-r-2  mx-10'></div>
          <div className='flex justify-center items-center gap-4'>
          <h1>1294</h1>
          <div className='h-4 w-4 bg-[#FFB629]'></div>
          <p>Satified clients</p>
      </div>
        </div>
        <hr className='w-full h-1' />
      </div>
    </div>
    </div>
  )
}

export default WhyUs