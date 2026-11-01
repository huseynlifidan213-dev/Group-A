import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart, AiOutlineEye, AiFillStar } from 'react-icons/ai'
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5'
import dogFoodImg from '../../assets/our-dogfood.png'
import cameraImg from '../../assets/our-camera.png'
import laptopImg from '../../assets/our-laptop.png'
import curologyImg from '../../assets/our-curology.png'
import carImg from '../../assets/our-car.png'
import cleatsImg from '../../assets/our-cleats.png'
import gamepadImg from '../../assets/our-gamepad.png'
import jacketImg from '../../assets/our-jacket.png'

const initialProducts = [
  {
    id: 101,
    name: 'Breed Dry Dog Food',
    price: 100,
    rating: 3,
    reviews: 35,
    image: dogFoodImg,
    category: 'Pet Food',
    description: 'High quality dry dog food tailored for all breed sizes to keep your pet energetic and healthy.',
  },
  {
    id: 102,
    name: 'CANON EOS DSLR Camera',
    price: 360,
    rating: 4,
    reviews: 95,
    image: cameraImg,
    category: 'Cameras',
    description: 'Capture life with stunning clarity using this professional Canon EOS DSLR Camera with optical lens.',
  },
  {
    id: 103,
    name: 'ASUS FHD Gaming Laptop',
    price: 700,
    rating: 5,
    reviews: 325,
    image: laptopImg,
    category: 'Computers',
    description: 'Immerse in next-generation gaming with top-tier FHD display, high refresh rate and powerful graphics.',
  },
  {
    id: 104,
    name: 'Curology Product Set',
    price: 500,
    rating: 4,
    reviews: 145,
    image: curologyImg,
    category: 'Beauty',
    description: 'Custom dermatological skin care set engineered to cleanse, moisturize, and clear your skin.',
  },
  {
    id: 105,
    name: 'Kids Electric Car',
    price: 960,
    rating: 5,
    reviews: 65,
    isNew: true,
    image: carImg,
    category: 'Toys',
    colors: ['#FB1314', '#DB4444'],
    description: 'Premium licensed Mercedes electric ride-on toy car with realistic sounds, remote control, and LED lights.',
  },
  {
    id: 106,
    name: 'Jr. Zoom Soccer Cleats',
    price: 1160,
    rating: 5,
    reviews: 35,
    image: cleatsImg,
    category: 'Sports',
    colors: ['#EEFF61', '#DB4444'],
    description: 'Lightweight performance soccer cleats with enhanced traction studs for high speed control and accuracy.',
  },
  {
    id: 107,
    name: 'GP11 Shooter USB Gamepad',
    price: 660,
    rating: 5,
    reviews: 55,
    isNew: true,
    image: gamepadImg,
    category: 'Gaming',
    colors: ['#000000', '#DB4444'],
    description: 'Ergonomic dual vibration USB gaming controller designed for high-precision shooting and responsiveness.',
  },
  {
    id: 108,
    name: 'Quilted Satin Jacket',
    price: 660,
    rating: 5,
    reviews: 55,
    image: jacketImg,
    category: 'Fashion',
    colors: ['#184A48', '#DB4444'],
    description: 'Classic luxury quilted satin flight bomber jacket with soft inner lining and heavy-duty ribbed cuffs.',
  },
]

const OurProductsSection = () => {
  const navigate = useNavigate()
  const [likedItems, setLikedItems] = useState({})
  const [selectedColors, setSelectedColors] = useState({})

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleColorSelect = (productId, colorIndex) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: colorIndex,
    }))
  }

  const handleDetails = (product) => {
    navigate(`/details/${product.id}`, { state: { product } })
  }

  return (
    <section className="w-full flex justify-center py-10 md:py-16">
      <div className="w-[82%] flex flex-col">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
          <span className="text-[#DB4444] font-semibold text-base">Our Products</span>
        </div>

        <div className="flex items-center justify-between mt-5 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-wider">
            Explore Our Products
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-11 h-11 bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
            >
              <IoArrowBackOutline className="text-xl text-black" />
            </button>
            <button
              type="button"
              className="w-11 h-11 bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition"
            >
              <IoArrowForwardOutline className="text-xl text-black" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {initialProducts.map((product) => {
            const isLiked = likedItems[product.id]
            const activeColorIndex = selectedColors[product.id] ?? 0

            return (
              <div key={product.id} className="group flex flex-col">
                <div className="relative bg-[#F5F5F5] rounded-[4px] h-[250px] flex items-center justify-center p-6 overflow-hidden">
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-3 py-1 rounded-[4px] font-normal z-10 select-none">
                      NEW
                    </span>
                  )}

                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button
                      type="button"
                      onClick={() => toggleLike(product.id)}
                      className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center cursor-pointer transition hover:scale-110 shadow-sm"
                    >
                      {isLiked ? (
                        <AiFillHeart className="text-[#DB4444] text-xl" />
                      ) : (
                        <AiOutlineHeart className="text-black text-xl" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDetails(product)}
                      className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center cursor-pointer transition hover:scale-110 shadow-sm"
                    >
                      <AiOutlineEye className="text-black text-xl" />
                    </button>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[180px] max-w-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black text-white text-sm font-medium py-2.5 text-center cursor-pointer transition-all duration-300 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                    Add To Cart
                  </div>
                </div>

                <h3 className="font-medium text-base text-black mt-4 truncate">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#DB4444] font-medium text-base">
                    ${product.price}
                  </span>
                  <div className="flex text-sm ml-1">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar
                        key={i}
                        className={
                          i < product.rating
                            ? 'text-[#FFAD33]'
                            : 'text-black/25'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-black/50">
                    ({product.reviews})
                  </span>
                </div>

                {product.colors && (
                  <div className="flex items-center gap-2 mt-2">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleColorSelect(product.id, idx)}
                        className={`w-5 h-5 rounded-full cursor-pointer transition ${
                          activeColorIndex === idx
                            ? 'ring-2 ring-black ring-offset-2'
                            : 'opacity-90 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            type="button"
            className="bg-[#DB4444] hover:bg-[#c13e3e] text-white font-medium text-base px-12 py-4 rounded-[4px] transition cursor-pointer"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurProductsSection