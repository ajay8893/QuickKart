import React from 'react'
import { NavLink } from 'react-router-dom'

const categories = [
    "Bestsellers",
    "Today's Deals",
    "Mobiles",
    "Electronics",
    "Fashion",
    "Home and Kitchen",
    "Books",
    "Appliances",
    "Computers",
    "Toys",
]

function CategoryNav() {
  return (
    <div className='bg-jordy-blue-200  shadow-sm '>
        <div className='max-w-7xl mx-auto px-4 '>
            <div className='flex space-x-4 overflow-x-auto py-1 no-scrollbar md:justify-center'>
                {categories.map((cat, index) => (
                <NavLink
                  key={index}
              to={`/category/${cat.toLowerCase()}`}
              className= "relative px-3 py-1 whitespace-nowrap font-medium text-black hover:text-blue-600 transition group"
            >
              {/* Bubble Effect */}
              {/* <span className="absolute inset-0 w-0 h-0 bg-blue-100 rounded-full transition-all duration-500 ease-out 
                              group-hover:w-32 group-hover:h-20 group-hover:top-1/2 group-hover:left-1/2 
                              group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"></span> */}
              <span className="relative">{cat}</span>
                </NavLink>
                
                ))}

            </div>

        </div>

    </div>
  )
}

export default CategoryNav
