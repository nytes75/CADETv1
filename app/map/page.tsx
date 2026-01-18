'use client'

import React from 'react'
import Navbar from '../components/navbar'
import dynamic from 'next/dynamic'

// Dynamically import GlobeViz with no SSR to avoid window not found errors
const GlobeViz = dynamic(() => import('./globe-viz'), { ssr: false })

const Page = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-gray-900 text-white">
      <Navbar />
      <div className="flex-1 relative">
        <GlobeViz />
      </div>
    </div>
  )
}

export default Page
