import React from 'react'

const Transporting = () => {
  return (
    <div className='relative h-[759px] w-full flex flex-col justify-center items-center'>
    <div className='absolute top-[100px] flex flex-col justify-center items-center mx-20  '>
      <h2 className='pb-9'>Transporting Across The World</h2>
      <div className='flex justify-center items-center gap-5 '>
        <img className='w-[300px] h-[333px]' src="/assests/transport-1.png" alt="/" />
        <img className='w-[300px] h-[333px]' src="/assests/transport-2.png" alt="/" />
        <img className='w-[300px] h-[333px]' src="/assests/transport-3.png" alt="" />
        <img className='w-[300px] h-[333px]' src="/assests/transport-4.png" alt="" />
        <img className='w-[300px] h-[333px]' src="/assests/transport-5.png" alt="" />
      </div>
      <img className='w-[194px] h-[60px] my-16' src="/assests/transport-Button.png" alt="" />
    </div>
      <div className='w-full h-[379px] bg-white'></div>
      <div className='w-full h-[379px] bg-[#FFB629]'></div>
    </div>
  )
}

export default Transporting