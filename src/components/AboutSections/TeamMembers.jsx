import React from 'react'
import eliqoynundaImg from '../../assets/eliqoynunda.jpg'
import xaamImg from '../../assets/xaam.jpg'
import sarimuratImg from '../../assets/sarimurat.jpg'

const TeamMembers = () => {
  const team = [
    { 
      id: 1, 
      name: 'Tom Cruise', 
      role: 'Founder & Chairman', 
      img: eliqoynundaImg 
    },
    { 
      id: 2, 
      name: 'Emma Watson', 
      role: 'Managing Director', 
      img: xaamImg 
    },
    { 
      id: 3, 
      name: 'Will Smith', 
      role: 'Product Designer', 
      img: sarimuratImg 
    }
  ]

  return (
    <div className="w-full py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((person) => (
            <div key={person.id} className="flex flex-col items-center text-center">

              <div className="w-full h-80 bg-gray-100 rounded mb-4 overflow-hidden flex items-center justify-center">
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-contain object-center" 
                />
              </div>
              <h3 className="text-lg font-semibold text-black">{person.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{person.role}</p>

              <div className="flex space-x-4 text-sm text-gray-700">
                <a href="#" className="hover:text-black"><i className="fa-brands fa-twitter"></i></a>
                <a href="#" className="hover:text-black"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="hover:text-black"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white ring-1 ring-red-500"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        </div>

        <div className="w-full mt-10 border-b-4 border-green-700"></div>
      </div>
    </div>
  )
}

export default TeamMembers