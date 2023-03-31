import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiEnvelope } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='w-full h-[800px] bg-[#091242] flex flex-col justify-center items-center text-white'>
      <div className='flex w-[600px] h-[500px] '>
        {/* ////////////////////// */}
        <div className=''>
          <h2>Get in touch with us</h2>
          <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
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

        <div className='flex justify-center items-center'>
        <div className='h-[63px] w-[63px] bg-[#111C55] rounded-full flex justify-center items-center'>
          <AiOutlineClockCircle 
          size={20}
          style={{color:'#F6B426'}}
          />
        </div>
        <p className='text-white font-medium text-left px-4'>Mon - Sat 9.00 - 18.00<br/>Sunday Closed</p>
      </div>
    </div>

        {/* ////////////////////// */}
        <div>
          <form>
            <div className='grid grid-cols-2'>
              <input type="text" placeholder='Your name*' />
              <input type="text" placeholder='Email*' />
              <input type="text" placeholder='Phone Number*' />
              <input type="text" placeholder='City*' />
            </div>
            <input type="text" placeholder='Your Message' />
            <button>Submit Message</button>
          </form>
        </div>
        {/* ////////////////////// */}
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Contact