"use client"

const navigation = [
  {name: 'About', href: '/about'},
  {name: 'Monitor', href: '/monitor'},
  {name: 'Products', href: '/products'},
  {name: 'Projects', href: '/projects'},
]

import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-3 lg:px-8 bg-gray-900'>
      <div className='flex lg:flex-1'>
        <h3 className='text-2xl font-bold text-white'>
          <a href="/">CADET</a>
        </h3>
      </div>
      <div className='flex-1 flex justify-center'>
        <div className='flex space-x-6'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='px-8 font-semibold text-gray-200 hover:text-gray-500'
            >

              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
