import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin
} from 'react-icons/ai'
import {MdOutlineFacebook} from 'react-icons/md'


const Navbar = () => {
  return (
    <div className='w-[100%] h-[78px] bg-[#091242] bg-opacity-25 flex justify-center items-center'>
      <div className='flex gap-[277px] items-center'>

        <div>
          <ul className='flex text-white'>
            <li>Home</li>
            <div className='border-r-2 border-[#ffffff33] mx-7'></div>
            <li>About</li>
            <div className='border-r-2 border-[#ffffff33] mx-7'></div>
            <li>Pages</li>
            <div className='border-r-2 border-[#ffffff33] mx-7'></div>
            <li>Project</li>
            <div className='border-r-2 border-[#ffffff33] mx-7'></div>
            <li>Contact</li>
          </ul>
        </div>

        <div className='flex justify-center items-center gap-12'>
          <ul className='flex gap-6'>
            <li><AiOutlineInstagram size={20} style={{color:'#ffff'}} /></li>
            <li><MdOutlineFacebook size={20} style={{color:'#ffff'}}/></li>
            <li><AiOutlineTwitter size={20} style={{color:'#ffff'}} /></li>
            <li><AiFillLinkedin size={20} style={{color:'#ffff'}} /></li>
          </ul>
          <div className='w-[216px] h-[78px] bg-white flex justify-center items-center'>
            <p>Request Quote</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar