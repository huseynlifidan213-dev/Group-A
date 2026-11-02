import React, { useRef } from 'react'

import Phone from '../../assets/Category-CellPhone.png'
import Computer from '../../assets/Category-Computer.png'
import SmartWatch from '../../assets/Category-SmartWatch.png'
import Camera from '../../assets/Category-Camera.png'
import Headphone from '../../assets/Category-Headphone.png'
import Gamepad from '../../assets/Category-Gamepad.png'

const CategoriesSection = () => {
  const categoriesRef = useRef(null)

  const categories = [
    { id: 1, name: 'Phones', image: Phone },
    { id: 2, name: 'Computers', image: Computer },
    { id: 3, name: 'SmartWatch', image: SmartWatch },
    { id: 4, name: 'Camera', image: Camera },
    { id: 5, name: 'HeadPhones', image: Headphone },
    { id: 6, name: 'Gaming', image: Gamepad },
  ]

  const scrollCategories = (direction) => {
    categoriesRef.current?.scrollBy({
      left: direction * 200,
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full bg-white px-[6%] py-10 text-black">
      <div className="w-full">
        <div className="mb-6 flex items-center gap-4">
          <span className="h-10 w-5 rounded bg-[#DB4444]" />

          <span className="text-base font-semibold text-[#DB4444]">
            Categories
          </span>
        </div>

        <div className="mb-10 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-wide sm:text-4xl">
            Browse By Category
          </h2>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scrollCategories(-1)}
              aria-label="Əvvəlki kateqoriyalar"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F5F5F5] transition hover:bg-gray-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => scrollCategories(1)}
              aria-label="Növbəti kateqoriyalar"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F5F5F5] transition hover:bg-gray-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={categoriesRef}
          className="flex gap-5 overflow-x-auto pb-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="group flex h-[140px] min-w-[130px] flex-1 cursor-pointer flex-col items-center justify-center gap-4 rounded border border-gray-300 bg-white transition-colors duration-200 hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white focus-visible:border-[#DB4444] focus-visible:bg-[#DB4444] focus-visible:text-white focus-visible:outline-none"
            >
              <img
                src={category.image}
                alt=""
                className="h-12 w-12 object-contain transition duration-200 group-hover:brightness-0 group-hover:invert group-focus-visible:brightness-0 group-focus-visible:invert"
              />

              <span className="text-sm sm:text-base">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriesSection