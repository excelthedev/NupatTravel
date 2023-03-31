import {BsArrowRightCircleFill,BsArrowLeftCircleFill,BsFillStarFill} from 'react-icons/bs'

const Customer = () => {
  return (
      <div className='flex w-full h-[600px] flex-col justify-center items-center'>
        <div className='flex w-[1000px] h-[542px] flex-col justify-center'>
          <div className='flex justify-between items-center'>
            <h2>What Our Customer Say</h2>
            <div className='flex gap-2'>
            <BsArrowLeftCircleFill    size={30}
            style={{color:'#F6B426'}}/>
              <BsArrowRightCircleFill    size={30}
              style={{color:'#091242'}} />
            </div>
          </div>

            <div className='flex justify-center pt-10'>
              <div className='w-[500px] h-[325px] bg-[#F4F4F4] p-8'>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-center items-center'>
                    <img 
                      className='w-[61px] h-[61px] rounded-full' 
                      src="/assests/user-1.png" alt="/"
                    />
                    <div className='pl-2'>
                      <h3>Kathleen Smithvv</h3>
                      <p>Fuel Company</p>
                    </div>
                  </div>
                  <img className='w-[51px] h-[51px]' src="/assests/double-comma.png" alt="" />
                </div>
                <p className='py-4'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <div className='flex gap-2'>
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                </div>
              </div>

              <div className='w-[500px] h-[325px] bg-[#091242] text-white p-8'>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-center items-center'>
                    <img 
                      className='w-[61px] h-[61px] rounded-full' 
                      src="/assests/user-2.png" alt="/"
                    />
                    <div className='pl-2'>
                      <h3>Kathleen Smithvv</h3>
                      <p>Fuel Company</p>
                    </div>
                  </div>
                  <img className='w-[51px] h-[51px]' src="/assests/double-comma.png" alt="" />
                </div>
                <p className='py-4'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <div className='flex gap-2'>
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                  <BsFillStarFill size={20}
                  style={{color:'#F6B426'}} />
                </div>
              </div>
            </div>



          </div>
      </div>
  )
}

export default Customer