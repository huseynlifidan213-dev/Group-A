import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStore,
  faDollarSign,
  faBagShopping,
  faSackDollar
} from '@fortawesome/free-solid-svg-icons'

const StatCards = () => {
  return (
    <div className="w-full py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">


        <div className="py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            <div className="h-60 p-6 rounded border flex flex-col items-center justify-center text-center transition-all bg-white text-black border-gray-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-black">
                <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center border-gray-300">
                  <FontAwesomeIcon icon={faStore} className="text-xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">10.5k</h3>
              <p className="text-xs">Sallers active our site</p>
            </div>

            <div className="h-60 p-6 rounded border flex flex-col items-center justify-center text-center transition-all bg-red-500 text-white border-red-500">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-white">
                <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center border-red-200">
                  <FontAwesomeIcon icon={faDollarSign} className="text-xl text-black" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">33k</h3>
              <p className="text-xs">Mopnthly Produduct Sale</p>
            </div>

            <div className="h-60 p-6 rounded border flex flex-col items-center justify-center text-center transition-all bg-white text-black border-gray-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-black">
                <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center border-gray-300">
                  <FontAwesomeIcon icon={faBagShopping} className="text-xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">45.5k</h3>
              <p className="text-xs">Customer active in our site</p>
            </div>

            <div className="h-60 p-6 rounded border flex flex-col items-center justify-center text-center transition-all bg-white text-black border-gray-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-black">
                <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center border-gray-300">
                  <FontAwesomeIcon icon={faSackDollar} className="text-xl text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">25k</h3>
              <p className="text-xs">Anual gross sale in our site</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default StatCards