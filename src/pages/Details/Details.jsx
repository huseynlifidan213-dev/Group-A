import React, { useState } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import { AiFillStar, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { TbTruckDelivery, TbRefresh } from 'react-icons/tb'
import { FiMinus, FiPlus } from 'react-icons/fi'
import coatImg from '../../assets/bestseller-coat.png'
import bagImg from '../../assets/bestseller-bag.png'
import coolerImg from '../../assets/bestseller-cooler.png'
import shelfImg from '../../assets/bestseller-shelf.png'

const fallbackProducts = [
  {
    id: 1,
    name: 'The north coat',
    price: 260,
    rating: 5,
    reviews: 65,
    image: coatImg,
    category: 'Clothing',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  },
  {
    id: 2,
    name: 'Gucci duffle bag',
    price: 960,
    rating: 5,
    reviews: 65,
    image: bagImg,
    category: 'Fashion',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  },
  {
    id: 3,
    name: 'RGB liquid CPU Cooler',
    price: 160,
    rating: 5,
    reviews: 65,
    image: coolerImg,
    category: 'Computers',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  },
  {
    id: 4,
    name: 'Small BookSelf',
    price: 360,
    rating: 5,
    reviews: 65,
    image: shelfImg,
    category: 'Furniture',
    description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
  },
]

const Details = () => {
  const { id } = useParams()
  const location = useLocation()

  const productFromState = location.state?.product
  const matchedProduct = fallbackProducts.find((p) => String(p.id) === String(id))
  const currentProduct = productFromState || matchedProduct || fallbackProducts[0]

  const [quantity, setQuantity] = useState(2)
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedThumbnail, setSelectedThumbnail] = useState(0)
  const [isWishlist, setIsWishlist] = useState(false)

  const thumbnails = [
    currentProduct.image,
    currentProduct.image,
    currentProduct.image,
    currentProduct.image,
  ]

  const colors = ['#A0BCE0', '#E07575']
  const sizes = ['XS', 'S', 'M', 'L', 'XL']

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="w-full flex justify-center py-10 md:py-16">
      <div className="w-[82%] flex flex-col gap-10">
        <nav className="flex items-center gap-3 text-sm text-black/50">
          <Link to="/" className="hover:text-black transition">Account</Link>
          <span>/</span>
          <span className="hover:text-black cursor-pointer transition">
            {currentProduct.category || 'Gaming'}
          </span>
          <span>/</span>
          <span className="text-black font-semibold">{currentProduct.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          <div className="flex flex-col-reverse sm:flex-row gap-6 w-full lg:w-auto">
            <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-visible">
              {thumbnails.map((imgSrc, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedThumbnail(index)}
                  className={`w-[130px] sm:w-[150px] lg:w-[170px] h-[110px] sm:h-[125px] lg:h-[138px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-3 cursor-pointer border transition ${
                    selectedThumbnail === index
                      ? 'border-black/70'
                      : 'border-transparent hover:border-black/20'
                  }`}
                >
                  <img
                    src={imgSrc}
                    alt={`${currentProduct.name} thumbnail ${index + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </button>
              ))}
            </div>

            <div className="w-full sm:w-[420px] lg:w-[500px] h-[360px] sm:h-[480px] lg:h-[600px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-8">
              <img
                src={thumbnails[selectedThumbnail] || currentProduct.image}
                alt={currentProduct.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <div className="w-full lg:w-[420px] xl:w-[460px] flex flex-col">
            <h1 className="text-2xl font-semibold text-black tracking-wide">
              {currentProduct.name}
            </h1>

            <div className="flex items-center gap-3 mt-3 flex-wrap">
              <div className="flex text-[#FFAD33] text-sm">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <span className="text-black/50 text-sm">
                ({currentProduct.reviews || 150} Reviews)
              </span>
              <span className="text-black/30">|</span>
              <span className="text-[#00FF66] text-sm font-medium">In Stock</span>
            </div>

            <div className="text-2xl font-semibold text-black mt-4 tracking-wide">
              ${Number(currentProduct.price).toFixed(2)}
            </div>

            <p className="text-sm text-black leading-relaxed mt-4">
              {currentProduct.description ||
                'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.'}
            </p>

            <div className="w-full border-t border-black/30 my-6" />

            <div className="flex items-center gap-4 mb-5">
              <span className="text-xl text-black">Colours:</span>
              <div className="flex items-center gap-2">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedColor(index)}
                    className={`w-5 h-5 rounded-full cursor-pointer transition ${
                      selectedColor === index
                        ? 'ring-2 ring-black ring-offset-2'
                        : 'opacity-90 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-black">Size:</span>
              <div className="flex items-center gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-8 h-8 rounded-[4px] text-sm font-medium flex items-center justify-center cursor-pointer transition ${
                      selectedSize === size
                        ? 'bg-[#DB4444] text-white border border-[#DB4444]'
                        : 'border border-black/50 text-black hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center h-10 border border-black/50 rounded-[4px] overflow-hidden">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="w-10 h-full flex items-center justify-center hover:bg-gray-100 transition cursor-pointer text-lg border-r border-black/50"
                >
                  <FiMinus />
                </button>
                <div className="w-16 h-full flex items-center justify-center font-semibold text-base select-none">
                  {quantity}
                </div>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="w-10 h-full bg-[#DB4444] hover:bg-[#c13e3e] text-white flex items-center justify-center hover:opacity-90 transition cursor-pointer text-lg"
                >
                  <FiPlus />
                </button>
              </div>

              <button
                type="button"
                className="h-10 px-9 bg-[#DB4444] hover:bg-[#c13e3e] text-white text-base font-medium rounded-[4px] transition cursor-pointer flex items-center justify-center"
              >
                Buy Now
              </button>

              <button
                type="button"
                onClick={() => setIsWishlist(!isWishlist)}
                className="w-10 h-10 border border-black/50 rounded-[4px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
              >
                {isWishlist ? (
                  <AiFillHeart className="text-[#DB4444] text-xl" />
                ) : (
                  <AiOutlineHeart className="text-black text-xl" />
                )}
              </button>
            </div>

            <div className="border border-black/50 rounded-[4px] mt-8 divide-y divide-black/50">
              <div className="flex items-center gap-4 p-4">
                <TbTruckDelivery className="text-4xl text-black shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium text-base text-black">Free Delivery</span>
                  <span className="text-xs text-black mt-1 underline cursor-pointer">
                    Enter your postal code for Delivery Availability
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4">
                <TbRefresh className="text-4xl text-black shrink-0" />
                <div className="flex flex-col">
                  <span className="font-medium text-base text-black">Return Delivery</span>
                  <span className="text-xs text-black mt-1">
                    Free 30 Days Delivery Returns.{' '}
                    <span className="underline cursor-pointer font-medium">Details</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
