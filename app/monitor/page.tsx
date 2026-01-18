'use client'

import React, { useState } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import weatherData from '../data/weather-scenarios.json'
import WeatherTab from './tabs/weather'
import ClimateTab from './tabs/climate'
import ModelMapTab from './tabs/model-map'

const regions = Array.from(new Set(weatherData.districts.map(d => d.region)))
const provincesByRegion = Object.fromEntries(
  regions.map(region => [region, Array.from(new Set(weatherData.districts.filter(d => d.region === region).map(d => d.province)))])
)
const districtsByProvince = Object.fromEntries(
  Object.values(provincesByRegion)
    .flat()
    .map(province => [
      province,
      weatherData.districts.filter(d => d.province === province).map(d => d.district),
    ])
)

const Page = () => {
  const [activeTab, setActiveTab] = useState('weather')

  const [region, setRegion] = useState(regions[0])
  const [province, setProvince] = useState(provincesByRegion[regions[0]][0])
  const [district, setDistrict] = useState(districtsByProvince[provincesByRegion[regions[0]][0]][0])

  React.useEffect(() => {
    setProvince(provincesByRegion[region][0])
  }, [region])

  React.useEffect(() => {
    setDistrict(districtsByProvince[province][0])
  }, [province])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        {/* Header Section with Sky Gradient (compact) */}
        <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-600 text-white">
          <div className="mx-auto max-w-5xl px-6 py-4 lg:py-6">
            <h1 className="text-xl font-semibold lg:text-2xl">Monitoring for now</h1>
          </div>
        </section>

        {/* Compact Tab Navigation */}
        <div className="mx-auto max-w-5xl px-6 py-3">
          <div className="flex gap-2 border-b border-sky-200/20">
            {['weather', 'climate', 'model-map'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 text-sm font-semibold capitalize transition ${
                  activeTab === tab
                    ? 'border-b-2 border-sky-600 text-sky-900'
                    : 'text-sky-700 hover:text-sky-900'
                }`}
              >
                {tab === 'model-map' ? 'Model Map' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Location selectors */}
        {activeTab !== 'model-map' && (
          <div className="mx-auto max-w-5xl px-6 py-4">
            <div className="flex flex-wrap items-center gap-4">
              <div>
                <label className="block text-xs font-semibold text-sky-700 mb-1">Region</label>
                <select
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  className="rounded-md px-3 py-2 text-gray-900 border border-gray-300"
                >
                  {regions.map(r => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-sky-700 mb-1">Province</label>
                <select
                  value={province}
                  onChange={e => setProvince(e.target.value)}
                  className="rounded-md px-3 py-2 text-gray-900 border border-gray-300"
                >
                  {provincesByRegion[region].map(p => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-sky-700 mb-1">Town/District</label>
                <select
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                  className="rounded-md px-3 py-2 text-gray-900 border border-gray-300"
                >
                  {districtsByProvince[province].map(d => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Content based on active tab */}
        {activeTab === 'weather' && (
          <WeatherTab region={region} province={province} district={district} weatherData={weatherData} />
        )}
        {activeTab === 'climate' && <ClimateTab />}
        {activeTab === 'model-map' && <ModelMapTab />}
      </main>
      <Footer />
    </div>
  )
}

export default Page
