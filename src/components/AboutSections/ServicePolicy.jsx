import React from 'react'
import { FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa'

const ServicePolicy = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1170px] mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-[88px]">

          <article className="w-full max-w-[260px] text-center">
            <div className="flex justify-center items-center w-20 h-20 mx-auto bg-gray-300 rounded-full">
              <div className="flex justify-center items-center w-[58px] h-[58px] bg-black text-white text-2xl rounded-full">
                <FaTruck />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">
              FREE AND FAST DELIVERY
            </h3>
            <p className="mt-2 text-sm text-black">
              Free delivery for all orders over $140
            </p>
          </article>

          <article className="w-full max-w-[260px] text-center">
            <div className="flex justify-center items-center w-20 h-20 mx-auto bg-gray-300 rounded-full">
              <div className="flex justify-center items-center w-[58px] h-[58px] bg-black text-white text-2xl rounded-full">
                <FaHeadset />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="mt-2 text-sm text-black">
              Friendly 24/7 customer support
            </p>
          </article>

          <article className="w-full max-w-[260px] text-center">
            <div className="flex justify-center items-center w-20 h-20 mx-auto bg-gray-300 rounded-full">
              <div className="flex justify-center items-center w-[58px] h-[58px] bg-black text-white text-2xl rounded-full">
                <FaShieldAlt />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black">
              MONEY BACK GUARANTEE
            </h3>
            <p className="mt-2 text-sm text-black">
              We return money within 30 days
            </p>
          </article>

        </div>
      </div>
    </section>
  )
}

export default ServicePolicy