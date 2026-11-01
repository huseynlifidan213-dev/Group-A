import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillHeart, AiOutlineHeart, AiOutlineEye, AiFillStar } from 'react-icons/ai'
import coatImg from '../../assets/bestseller-coat.png'
import bagImg from '../../assets/bestseller-bag.png'
import coolerImg from '../../assets/bestseller-cooler.png'
import shelfImg from '../../assets/bestseller-shelf.png'

const products = [
  {
    id: 1,
    name: 'The north coat',
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
    image: coatImg,
  },
  {
    id: 2,
    name: 'Gucci duffle bag',
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 65,
    image: bagImg,
  },
  {
    id: 3,
    name: 'RGB liquid CPU Cooler',
    price: 160,
    oldPrice: 170,
    rating: 5,
    reviews: 65,
    image: coolerImg,
  },
  {
    id: 4,
    name: 'Small BookSelf',
    price: 360,
    oldPrice: null,
    rating: 5,
    reviews: 65,
    image: shelfImg,
  },
]

const BestSellingSection = () => {
  const navigate = useNavigate()
  const [likedItems, setLikedItems] = useState({})

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleDetails = (product) => {
    navigate(`/details/${product.id}`, { state: { product } })
  }

  return (
    <section className="w-full flex justify-center py-10">
      <div className="w-[82%] flex flex-col">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-[#DB4444] rounded-[4px]" />
          <span className="text-[#DB4444] font-semibold text-base">This Month</span>
        </div>

        <div className="flex items-center justify-between mt-5 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black tracking-wider">
            Best Selling Products
          </h2>
          <button className="bg-[#DB4444] hover:bg-[#c13e3e] transition text-white px-12 py-4 rounded-[4px] font-medium text-base cursor-pointer">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const isLiked = likedItems[product.id]

            return (
              <div key={product.id} className="flex flex-col">
                <div className="relative bg-[#F5F5F5] rounded-[4px] h-[250px] flex items-center justify-center p-6">
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button
                      type="button"
                      onClick={() => toggleLike(product.id)}
                      className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center cursor-pointer transition hover:scale-110"
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
                      className="w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center cursor-pointer transition hover:scale-110"
                    >
                      <AiOutlineEye className="text-black text-xl" />
                    </button>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-[180px] max-w-full object-contain"
                  />
                </div>

                <h3 className="font-medium text-base text-black mt-4">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mt-2 text-base font-medium">
                  <span className="text-[#DB4444]">${product.price}</span>
                  {product.oldPrice && (
                    <span className="text-black/50 line-through">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-[#FFAD33] text-sm">
                    {[...Array(5)].map((_, i) => (
                      <AiFillStar key={i} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-black/50">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BestSellingSection