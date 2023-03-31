import React from 'react'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiEnvelope} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='w-full h-[160px] bg-[#091242] flex justify-center items-center'>
      <div className='flex justify-center items-center gap-[244px] '>
        <div className='px-5'>
          <img src="/assests/transitflow-Logo.png" alt="Logo" />
        </div>
        <div className='flex justify-center'>

          <div className='flex justify-center items-center'>
            <div className='h-[63px] w-[63px] bg-[#111C55] rounded-full flex justify-center items-center'>
              <AiOutlineClockCircle 
              size={20}
              style={{color:'#F6B426'}}
              />
            </div>
            <p className='text-white font-medium text-left px-4'>Mon - Sat 9.00 - 18.00<br/>Sunday Closed</p>
          </div>

          <div className='flex justify-center items-center'>
            <div className='h-[63px] w-[63px] bg-[#111C55] rounded-full flex justify-center items-center'>
              <BiEnvelope 
              size={20}
              style={{color:'#F6B426'}}
              />
            </div>
            <p className='text-white font-medium text-left px-4'>Email<br/>
            contact@logistics.com</p>
          </div>

          <div className='flex justify-center items-center'>
            <div className='h-[63px] w-[63px] bg-[#111C55] rounded-full flex justify-center items-center'>
              <BsTelephone
              size={20}
              style={{color:'#F6B426'}}
              />
            </div>
            <p className='text-white font-medium text-left px-4'>Call Us 
            
            <br/>(00) 112 365 489</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header