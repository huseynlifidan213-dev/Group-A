import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { FiUser, FiShoppingBag, FiXCircle, FiStar, FiLogOut } from 'react-icons/fi';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='flex flex-col w-full h-[120px] bg-[#FFFFFF] border-b border-black/20'>
      {/* qara basliq hisse */}
      <div className='bg-[rgb(0,0,0)] w-full h-[40px] flex items-center text-[#FAFAFA] text-sm'>
        <div className='w-[65%] h-[100%] flex items-center justify-end'>
          <p className='text-[#FAFAFA] leading-[24px] font-normal text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href='#' className='underline font-bold ml-[10px] font-semibold'>ShopNow</a></p>
        </div>
        <div className='h-[100%] flex items-center w-[390px] justify-end cursor-pointer'>English <p className='ml-[5px]'><IoIosArrowDown /></p></div>
      </div>
      {/* exsculisev hissesi */}
      <div className='w-[100%] flex justify-center'>
        <div className='flex w-[82%] h-[60px]'>
          <div className='flex items-end gap-60 w-[57%] h-[60px]'>
            <div className='text-2xl font-bold tracking-[3%] text-[#000000] font-bold'>Exclusive</div>
            <nav>
              <ul className='flex gap-12 text-base font-normal tracking-[0%]'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'underline decoration-1 underline-offset-6' : ''}>Home</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'underline decoration-1 underline-offset-6' : ''}>Contact</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'underline decoration-1 underline-offset-6' : ''}>About</NavLink></li>
                <li><NavLink to="/signup" className={({ isActive }) => isActive ? 'underline decoration-1 underline-offset-6' : ''}>Signup</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className='w-[43%] flex items-end justify-end gap-[50px]'>
            <div className=" relative w-[250px] h-[35px] flex items-center bg-[#F5F5F5] rounded-[4px] px-3 py-1">
              <input type="text" placeholder='What are you looking for?' className='w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400' />
              <AiOutlineSearch className='absolute right-4 text-2xl text-black cursor-pointer' />
            </div>
            {/* ikonlar hissesi */}
            <div className='flex item-end gap-[20px] relative pb-[4px]'>
              <AiOutlineHeart className='text-3xl w[32px] h-[32px] cursor-pointer' />
              <AiOutlineShoppingCart className='text-xl w-[32px] h-[32px] cursor-pointer' />
              <div className='relative'>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`rounded-full w-[32px] h-[32px] flex justify-center items-center transition-colors ${isOpen ? 'bg-[#DB4444] text-white' : 'bg-transparent text-black'
                    }`}
                >
                  <AiOutlineUser className='text-2xl cursor-pointer' />
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-3 w-[225px] bg-black/40 backdrop-blur-md text-white rounded-[4px] p-4 flex flex-col gap-4 z-50 text-xs font-normal">
                    <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                      <FiUser className="text-lg" />
                      <span>Manage My Account</span>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                      <FiShoppingBag className="text-lg" />
                      <span>My Order</span>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                      <FiXCircle className="text-lg" />
                      <span>My Cancellations</span>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                      <FiStar className="text-lg" />
                      <span>My Reviews</span>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
                      <FiLogOut className="text-lg" />
                      <span>Logout</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header