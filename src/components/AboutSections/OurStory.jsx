import React from 'react'
import qizdarImg from '../../assets/qizdar.jpg'

const OurStory = () => {
  return (
    <div className='w-full pt-4 pb-4 px-4 bg-white'>
      <div className="max-w-6xl mx-auto">


        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-10">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <span>/</span>
          <span className="text-black font-semibold">About</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold text-black tracking-wide">Our Story</h1>
            <p className="text-gray-700 leading-relaxed text-sm">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>

          <div className="w-full flex justify-end">
            <img 
              src={qizdarImg} 
              alt="Our Story" 
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurStory