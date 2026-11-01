import React from 'react'
import logo from '../../assets/logo.png'
import ps5 from '../../assets/ps5.png'
import womenİmg from '../../assets/women img.png'
import speakers from '../../assets/speakers.png'
import parfume from '../../assets/parfume.png'

const NewArrivalSection = () => {
  return (
    <div className='max-w-[1200px] w-full bg-white mx-auto pt-4 pb-4 px-4'>
      <section className='w-full mt-10'>
        <div className="ust-hisse mt-5">
          <div className="flex items-center gap-5">
            <img src={logo} alt="sekil" />
            <h3 className="text-red-500 font-['Poppins'] text-[16px] font-semibold">Featured</h3>
          </div>
          <h1 className="font-['Inter'] text-[36px] font-semibold">New Arrival</h1>
        </div>
        <div className="cards flex gap-[30px] mt-[18px]">
          <div className="relative w-[570px] h-[590px] bg-black rounded-[5px] overflow-hidden">
            <img src={ps5} alt="sekil" className="object-cover relative left-[40px] top-[80px]" />

            <div className="absolute left-[32px] bottom-[30px] text-2xl font-semibold text-white font-['Poppins']">
              <h2 className="text-2xl font-semibold">PlayStation 5</h2>
              <p className="mt-2 text-[14px]   font-['Poppins']">Black and White version of the PS5 <br />coming out on sale.</p>
              <h3 className="mt-4 underline cursor-pointer">Shop Now</h3>
            </div>
          </div>



          <div className="flex flex-col gap-8 ">
            <div className="relative w-[570px] h-[280px] bg-black rounded-[5px] overflow-hidden font-['Poppins']">
              <img src={womenİmg} alt="sekil" className="ml-30 object-cover" />

              <div className="absolute left-[24px] top-[100px] z-10 text-white">
                <h2 className="text-2xl font-semibold">Women’s Collections</h2>
                <p className="mt-2 text-[14px] w-[240px]">Featured woman collections that give you another vibe.</p>
                <h3 className="mt-4 underline cursor-pointer">Shop Now</h3>
              </div>
            </div>

            <div className="flex gap-[30px]">
              <div className="w-[270px] h-[280px] bg-neutral-800 rounded-[5px] overflow-hidden font-['Poppins'] ">
                <img src={speakers} alt="sekil" className=" object-cover relative left-[40px] top-[30px] " />
                <h2 className="text-white  absolute bottom-10 left-5 relative z-10 text-2xl">Speakers</h2>
                <p className="text-white  absolute bottom-10 left-5  relative z-10 ">Amazon wireless speakers</p>
                <h3 className="text-white  absolute bottom-10 left-5  relative z-10 underline cursor-pointer">Shop Now</h3>

              </div>
              <div className="w-[270px] h-[280px] bg-neutral-800 rounded-[5px] overflow-hidden">
                <img src={parfume} alt="sekil" className=" object-cover relative left-[40px] top-[30px] " />
                <h2 className="text-white  absolute bottom-5 left-5 relative z-1 text-2xl">Perfume</h2>
                <p className="text-white absolute bottom-5 left-5  relative z-10  ">GUCCI INTENSE OUD EDP</p>
                <h3 className="text-white  absolute bottom-5 left-5  relative z-10 underline cursor-pointer">Shop Now</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewArrivalSection