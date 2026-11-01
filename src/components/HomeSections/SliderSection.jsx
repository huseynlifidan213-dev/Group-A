import React from 'react'
import { Carousel } from 'antd';
import { IoIosArrowForward } from "react-icons/io";
import mehsul3 from '..//..//assets/iphone.png'
import mehsul1 from '..//..//assets/mehsul1.png'
import mehsul2 from '..//..//assets/mehsul2.png'
import mehsul4 from '..//..//assets/mehsul4.png'
import mehsul5 from '..//..//assets/mehsul5.png'

const contentStyle = {
  margin: 0,
  height: '100%',
  color: '#fff',
  lineHeight: '465px',
  textAlign: 'center',
  background: '#000000',
};
const SliderSection = () => {
  const onChange = currentSlide => {
    console.log(currentSlide);
  };

  return (
    <div className='w-full h-[calc(100vh_-_120px)] bg-white flex justify-center'>
      <div className='w-[82%] h-[80%] flex'>
        <div className='h-[100%] w-[26%] border-r border-black/10 flex items-end'>
          <div className='w-[95%] h-[90%] flex flex-col gap-[27px] text-[16px] text-black'>
            <div className='w-full flex justify-between items-center cursor-pointer transition-colors  hover:text-gray-700'>
              <span>Woman's Fashion</span>
              <IoIosArrowForward className='text-[#000000]' />
            </div>
            <div className='w-full flex justify-between items-center cursor-pointer transition-colors  hover:text-gray-700'>
              <span>Men's Fashion</span>
              <IoIosArrowForward className='text-[#000000]' />
            </div>
            <div className='cursor-pointer hover:text-gray-700 transition-colors'>
              Electronics
            </div>
            <div className='cursor-pointer hover:text-gray-700 transition-colors'>
              Home & Lifestyle
            </div>
            <div className='cursor-pointer hover:text-gray-700 transition-colors'>
              Medicine
            </div>
            <div className='cursor-pointer hover:text-gray-700 transition-colors'>
              Sports & Outdoor
            </div>
            <div className='cursor-pointer hover:text-gray-700 transition-colors'>
              Baby’s & Toys
            </div>
            <div className='cursor-pointer hover:text-gray-700 transition-colors'>
              Groceries & Pets
            </div>
            <div className='cursor-pointer hover:text-gray-700 transition-colors'>
              Health & Beauty
            </div>
          </div>
        </div>
        <div className='flex w-[74%] h-[100%] justify-end items-end'>
          <div className='w-[97%] h-[90%]'>
            <Carousel afterChange={onChange} autoplay>
              <div className='h-[calc((100vh-120px)*0.8*0.9)]'>
                <img src={mehsul4} alt="slayd1" className='w-full h-[100%]'></img>
              </div>
              <div className='h-[calc((100vh-120px)*0.8*0.9)]'>
                <img src={mehsul2} alt="slayd1" className='w-full h-[100%]'></img>
              </div>
              <div className='h-[calc((100vh-120px)*0.8*0.9)]'>
                <img src={mehsul3} alt="slayd1" className='w-full h-[100%]'></img>
              </div>
              <div className='h-[calc((100vh-120px)*0.8*0.9)]'>
                <img src={mehsul1} alt="slayd1" className='w-full h-[100%]'></img>
              </div>
              <div className='h-[calc((100vh-120px)*0.8*0.9)]'>
                <img src={mehsul5} alt="slayd1" className='w-full h-[100%]'></img>
              </div>

            </Carousel>


          </div>
        </div>
      </div>
    </div>

  )
}


export default SliderSection