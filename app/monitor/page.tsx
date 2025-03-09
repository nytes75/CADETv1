'use client'

import React from 'react'
import Navbar from '../components/navbar'

const Page = () => {
  return (
    <div className='container mx-auto'>
      <Navbar/>
      <div id="monitor-main" className="bg-red-50 flex-1 flex items-center justify-center">
        {/* Add weather maps or other monitoring components here */}
        {/* Temperature Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800">Temperature</h3>
          <p className="text-4xl font-bold text-blue-500">22°C</p>
          <p className="text-gray-600">Sunny</p>
        </div>

        {/* Humidity Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800">Humidity</h3>
          <p className="text-4xl font-bold text-blue-500">45%</p>
          <p className="text-gray-600">Normal</p>
        </div>

        {/* Wind Speed Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800">Wind Speed</h3>
          <p className="text-4xl font-bold text-blue-500">10 km/h</p>
          <p className="text-gray-600">Breezy</p>
        </div>

        {/* Rainfall Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800">Rainfall</h3>
          <p className="text-4xl font-bold text-blue-500">12 mm</p>
          <p className="text-gray-600">Moderate</p>
        </div>

        {/* Air Quality Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800">Air Quality</h3>
          <p className="text-4xl font-bold text-blue-500">Good</p>
          <p className="text-gray-600">AQI: 45</p>
        </div>

      </div>

    </div>
  )
}

export default Page
