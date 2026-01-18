'use client'

import React from 'react'

export default function ModelMapTab() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
      <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Operational Model Maps</h2>
        <p className="text-gray-700 mb-6">
          Real-time forecasts and model outputs for meteorological and hydrological applications.
        </p>

        {/* Model Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { name: 'Surface Pressure', icon: '🌐', description: 'Pressure systems and fronts' },
            { name: 'Rainfall Forecast', icon: '🌧️', description: 'Predicted precipitation' },
            { name: 'Wind Field', icon: '🌬️', description: 'Wind speed and direction' },
            { name: 'Temperature Map', icon: '🌡️', description: 'Surface temperature analysis' },
            { name: 'Humidity Analysis', icon: '💧', description: 'Atmospheric moisture content' },
            { name: 'Wave Height', icon: '🌊', description: 'Marine conditions' },
          ].map((model, idx) => (
            <button
              key={idx}
              className="rounded-lg bg-gradient-to-br from-sky-50 to-blue-50 p-4 ring-1 ring-sky-200 hover:ring-sky-400 transition"
            >
              <div className="text-3xl mb-2">{model.icon}</div>
              <h3 className="font-semibold text-gray-900">{model.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{model.description}</p>
            </button>
          ))}
        </div>

        {/* Placeholder */}
        <div className="rounded-xl border border-dashed border-sky-300 bg-sky-50/70 p-8 text-center text-gray-700">
          <p className="text-lg font-semibold text-gray-900">Map placeholder</p>
          <p className="mt-2 text-sm text-gray-600">
            The map preview is temporarily unavailable. It will return here once the new data pipeline is ready.
          </p>
        </div>
      </div>

      {/* Model Information */}
      <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Models & Updates</h2>
        <div className="space-y-4">
          {[
            {
              name: 'GFS (Global Forecast System)',
              resolution: '0.25° grid',
              range: '16 days',
              updated: 'Last 6 hours',
              status: 'Active',
            },
            {
              name: 'ECMWF (European Centre)',
              resolution: '0.1° grid',
              range: '10 days',
              updated: 'Last 12 hours',
              status: 'Active',
            },
            {
              name: 'NAM (North American Model)',
              resolution: '4 km grid',
              range: '3.5 days',
              updated: 'Last 6 hours',
              status: 'Active',
            },
          ].map((model, idx) => (
            <div key={idx} className="rounded-lg bg-sky-50 p-4 ring-1 ring-sky-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{model.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Resolution: {model.resolution}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                  {model.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Forecast Range</p>
                  <p className="font-semibold text-gray-900">{model.range}</p>
                </div>
                <div>
                  <p className="text-gray-600">Last Updated</p>
                  <p className="font-semibold text-gray-900">{model.updated}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Model Documentation */}
      <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 shadow-md ring-1 ring-sky-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Model Documentation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">How to Use</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Select a model from the options above</li>
              <li>• View real-time geographic forecast</li>
              <li>• Zoom, pan, and interact with layers</li>
              <li>• Export data for analysis</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Supported Formats</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• GeoTIFF raster data</li>
              <li>• NetCDF scientific format</li>
              <li>• Shapefile vector data</li>
              <li>• WMS/WFS web services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
