'use client'

import React from 'react'

interface ClimateTabProps {
  regions: string[]
  provincesByRegion: Record<string, string[]>
  districtsByProvince: Record<string, string[]>
  region: string
  setRegion: (r: string) => void
  province: string
  setProvince: (p: string) => void
  district: string
  setDistrict: (d: string) => void
  weatherData: any
}

export default function ClimateTab({
  regions,
  provincesByRegion,
  districtsByProvince,
  region,
  setRegion,
  province,
  setProvince,
  district,
  setDistrict,
  weatherData,
}: ClimateTabProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      {/* Dropdown menu */}
      <div className="flex flex-wrap gap-4 items-center bg-white p-6 rounded-2xl shadow-md ring-1 ring-gray-100">
        <div>
          <label className="block text-xs font-semibold text-sky-700 mb-1">Region</label>
          <select
            value={region}
            onChange={e => setRegion(e.target.value)}
            className="rounded-lg px-3 py-2 text-gray-900 border border-gray-300"
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
            className="rounded-lg px-3 py-2 text-gray-900 border border-gray-300"
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
            className="rounded-lg px-3 py-2 text-gray-900 border border-gray-300"
          >
            {districtsByProvince[province].map(d => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Climate Patterns & Analysis</h2>
        <p className="text-gray-700 mb-6">
          Comprehensive climate data and long-term pattern analysis for Papua New Guinea.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seasonal Outlook */}
          <div className="rounded-xl bg-sky-50 p-6 ring-1 ring-sky-200">
            <h3 className="font-semibold text-gray-900 mb-3">Seasonal Outlook</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Temperature Trend</span>
                <span className="font-semibold text-gray-900">+0.8°C above normal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Rainfall Expected</span>
                <span className="font-semibold text-gray-900">Above average</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Monsoon Onset</span>
                <span className="font-semibold text-gray-900">On schedule</span>
              </div>
            </div>
          </div>

          {/* Climate Indices */}
          <div className="rounded-xl bg-sky-50 p-6 ring-1 ring-sky-200">
            <h3 className="font-semibold text-gray-900 mb-3">Climate Indices</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">ENSO Status</span>
                <span className="font-semibold text-amber-600">Neutral</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">SOI Index</span>
                <span className="font-semibold text-gray-900">+12.5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Sea Surface Temp</span>
                <span className="font-semibold text-gray-900">+0.3°C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Long-term trends chart placeholder */}
        <div className="mt-8 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 p-8 ring-1 ring-sky-200">
          <h3 className="font-semibold text-gray-900 mb-4">Annual Temperature Trend (1990-2025)</h3>
          <div className="h-48 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p className="text-lg mb-2">📊 Chart visualization will be displayed here</p>
              <p className="text-sm">Climate trend data and historical analysis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rainfall Distribution */}
      <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Rainfall Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { region: 'Highlands', rainfall: '3500mm', trend: '↑ +5%' },
            { region: 'Coastal', rainfall: '2800mm', trend: '→ Stable' },
            { region: 'Islands', rainfall: '3200mm', trend: '↓ -3%' },
          ].map((item, idx) => (
            <div key={idx} className="rounded-lg bg-sky-50 p-4 ring-1 ring-sky-200">
              <p className="font-semibold text-gray-900">{item.region}</p>
              <p className="text-2xl font-bold text-sky-700 mt-2">{item.rainfall}</p>
              <p className="text-sm text-gray-600 mt-1">{item.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
