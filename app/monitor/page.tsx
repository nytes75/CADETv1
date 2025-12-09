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
        {/* Header Section with Sky Gradient */}
        <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-600 text-white">
          <div className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">Monitoring</p>
            <h1 className="mt-3 text-4xl font-bold lg:text-5xl">Papua New Guinea Operations Center</h1>
            <p className="mt-4 max-w-3xl text-lg text-sky-100">Monitor weather, climate patterns, and operational models across PNG.</p>

            {/* Tab Navigation */}
            <div className="mt-8 flex gap-2 border-b border-white/20">
              {['weather', 'climate', 'model-map'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 font-semibold capitalize transition ${
                    activeTab === tab ? 'border-b-2 border-white text-white' : 'text-sky-100 hover:text-white'
                  }`}
                >
                  {tab === 'model-map' ? 'Model Map' : tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content based on active tab */}
        {activeTab === 'weather' && (
          <WeatherTab
            regions={regions}
            provincesByRegion={provincesByRegion}
            districtsByProvince={districtsByProvince}
            region={region}
            setRegion={setRegion}
            province={province}
            setProvince={setProvince}
            district={district}
            setDistrict={setDistrict}
            weatherData={weatherData}
          />
        )}
        {activeTab === 'climate' && (
          <ClimateTab
            regions={regions}
            provincesByRegion={provincesByRegion}
            districtsByProvince={districtsByProvince}
            region={region}
            setRegion={setRegion}
            province={province}
            setProvince={setProvince}
            district={district}
            setDistrict={setDistrict}
            weatherData={weatherData}
          />
        )}
        {activeTab === 'model-map' && <ModelMapTab />}
      </main>
      <Footer />
    </div>
  )
}

export default Page
