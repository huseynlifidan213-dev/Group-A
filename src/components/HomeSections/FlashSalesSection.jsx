import React, { useState } from 'react'

import Game from '../../assets/game.png'
import Game2 from '../../assets/kl.png'
import Game3 from '../../assets/mr.png'
import Game4 from '../../assets/st.png'

const FlashSalesSection = () => {
  const [favorites, setFavorites] = useState([])

  const products = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      oldPrice: 160,
      discount: '-40%',
      rating: 5,
      reviews: 88,
      image: Game,
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      price: 960,
      oldPrice: 1160,
      discount: '-35%',
      rating: 4,
      reviews: 75,
      image: Game2,
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      price: 370,
      oldPrice: 400,
      discount: '-30%',
      rating: 5,
      reviews: 99,
      image: Game3,
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      price: 375,
      oldPrice: 400,
      discount: '-25%',
      rating: 4.5,
      reviews: 99,
      image: Game4,
    },
  ]

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    )
  }

  return (
    <div className="w-full bg-white px-[6%] py-10 text-black">
      <div className="w-full">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-10 w-5 rounded bg-[#DB4444]" />

          <span className="text-base font-semibold text-[#DB4444]">
            Today’s
          </span>
        </div>

        <div className="mb-10 flex flex-wrap items-end gap-6 sm:gap-12">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Flash Sales
          </h2>

          <div className="flex items-center gap-3 sm:gap-4">
            {[
              { label: 'Days', value: '03' },
              { label: 'Hours', value: '23' },
              { label: 'Minutes', value: '19' },
              { label: 'Seconds', value: '56' },
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && (
                  <span className="mt-4 text-2xl text-[#DB4444]">
                    :
                  </span>
                )}

                <div>
                  <p className="mb-1 text-xs font-medium">
                    {item.label}
                  </p>

                  <p className="text-2xl font-bold sm:text-3xl">
                    {item.value}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const isFavorite = favorites.includes(product.id)

            return (
              <div key={product.id} className="min-w-0">
                <div className="group relative flex h-[230px] items-center justify-center overflow-hidden rounded bg-[#F5F5F5]">
                  <span className="absolute left-3 top-3 z-10 rounded bg-[#DB4444] px-3 py-1 text-xs text-white">
                    {product.discount}
                  </span>

                  <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => toggleFavorite(product.id)}
                      aria-label={
                        product.name + ' üçün sevimli seçimi'
                      }
                      aria-pressed={isFavorite}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white transition hover:scale-110"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill={isFavorite ? '#ef4444' : 'none'}
                        stroke={isFavorite ? '#ef4444' : 'black'}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                      </svg>
                    </button>

                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                      >
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </span>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[155px] w-[65%] object-contain"
                  />

                  <button
                    type="button"
                    className="absolute bottom-0 left-0 w-full cursor-pointer bg-black py-2.5 text-sm text-white transition-opacity lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100"
                  >
                    Add To Cart
                  </button>
                </div>

                <h3 className="mt-4 text-sm font-medium sm:text-base">
                  {product.name}
                </h3>

                <div className="mt-2 flex gap-3 text-sm font-medium">
                  <span className="text-[#DB4444]">
                    ${product.price}
                  </span>

                  <span className="text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <div
                    role="img"
                    aria-label={product.rating + ' / 5 ulduz'}
                    className="flex gap-1"
                  >
                    {[1, 2, 3, 4, 5].map((star) => {
                      const percentage = Math.max(
                        0,
                        Math.min(
                          100,
                          (product.rating - star + 1) * 100
                        )
                      )

                      return (
                        <span
                          key={star}
                          aria-hidden="true"
                          className="relative inline-block text-lg leading-none text-gray-300"
                        >
                          ★
                          <span
                            className="absolute left-0 top-0 overflow-hidden text-[#FFAD33]"
                            style={{ width: percentage + '%' }}
                          >
                            ★
                          </span>
                        </span>
                      )
                    })}
                  </div>

                  <span className="text-xs font-semibold text-gray-500">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="cursor-pointer rounded bg-[#DB4444] px-10 py-3.5 text-sm font-medium text-white transition hover:bg-red-600"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlashSalesSection