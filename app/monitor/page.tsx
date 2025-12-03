'use client'

import React, { useState } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import weatherData from '../data/weather-scenarios.json';

const regions = Array.from(new Set(weatherData.districts.map(d => d.region)));
const provincesByRegion = Object.fromEntries(
  regions.map(region => [region, Array.from(new Set(weatherData.districts.filter(d => d.region === region).map(d => d.province)))])
);
const districtsByProvince = Object.fromEntries(
  Object.values(provincesByRegion).flat().map(province => [
    province,
    weatherData.districts.filter(d => d.province === province).map(d => d.district)
  ])
);

const Page = () => {
  // Selection state
  const [region, setRegion] = useState(regions[0]);
  const [province, setProvince] = useState(provincesByRegion[regions[0]][0]);
  const [district, setDistrict] = useState(districtsByProvince[provincesByRegion[regions[0]][0]][0]);

  // Update province/district when region changes
  React.useEffect(() => {
    setProvince(provincesByRegion[region][0]);
  }, [region]);
  React.useEffect(() => {
    setDistrict(districtsByProvince[province][0]);
  }, [province]);

  // Get scenario for selected district
  const scenario = weatherData.districts.find(d => d.region === region && d.province === province && d.district === district);
  // Get alerts for selected region
  const regionAlert = weatherData.regionAlerts.find(r => r.region === region);

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        {/* Header Section with Sky Gradient */}
        <section className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-600 text-white">
          <div className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-200">Weather Monitoring</p>
            <h1 className="mt-3 text-4xl font-bold lg:text-5xl">Real-time conditions for Papua New Guinea</h1>
            <p className="mt-4 max-w-3xl text-lg text-sky-100">
              Track live weather patterns, alerts, and forecasts across PNG with integrated monitoring dashboards.
            </p>
            {/* Dropdown menu */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <div>
                <label className="block text-xs font-semibold text-sky-100 mb-1">Region</label>
                <select value={region} onChange={e => setRegion(e.target.value)} className="rounded-lg px-3 py-2 text-gray-900">
                  {regions.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-sky-100 mb-1">Province</label>
                <select value={province} onChange={e => setProvince(e.target.value)} className="rounded-lg px-3 py-2 text-gray-900">
                  {provincesByRegion[region].map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-sky-100 mb-1">Town/District</label>
                <select value={district} onChange={e => setDistrict(e.target.value)} className="rounded-lg px-3 py-2 text-gray-900">
                  {districtsByProvince[province].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto max-w-5xl px-6 py-12 space-y-6">
          {/* Current Weather Card */}
          <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 p-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Current Conditions</p>
                <div className="mt-4">
                  <div className="text-6xl font-bold text-gray-900">{scenario ? scenario.current.temp : '--'}°</div>
                  <p className="mt-2 text-xl text-gray-700">{scenario ? scenario.current.condition : 'N/A'}</p>
                  <p className="mt-1 text-sm text-gray-600">Feels like {scenario ? scenario.current.feelsLike : '--'}°</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-sky-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Humidity</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{scenario ? scenario.current.humidity : '--'}%</p>
                </div>
                <div className="rounded-lg bg-sky-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Wind</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{scenario ? scenario.current.windSpeed : '--'} km/h</p>
                </div>
                <div className="rounded-lg bg-sky-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Pressure</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{scenario ? scenario.current.pressure : '--'} mb</p>
                </div>
                <div className="rounded-lg bg-sky-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">UV Index</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{scenario ? scenario.current.uvIndex : '--'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Active Advisories</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {regionAlert && regionAlert.alerts.map((alert, idx) => (
                <div key={idx} className="rounded-xl bg-white shadow-sm ring-1 ring-gray-100 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{alert.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{alert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {!regionAlert && <div className="text-gray-500">No alerts for this region.</div>}
            </div>
          </div>

          {/* Hourly Forecast */}
          <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900">Hourly Forecast</h2>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-4">
              {scenario && scenario.hourly.map((hour, idx) => (
                <div
                  key={idx}
                  className="min-w-max rounded-lg bg-sky-50 p-4 text-center ring-1 ring-sky-200"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{hour.hour}</p>
                  <p className="my-2 text-2xl">{hour.icon}</p>
                  <p className="text-lg font-bold text-gray-900">{hour.temp}°</p>
                  <p className="text-xs text-gray-600">{hour.chance}</p>
                </div>
              ))}
              {!scenario && <div className="text-gray-500">No forecast data.</div>}
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 p-6">
            <h2 className="text-2xl font-bold text-gray-900">5-Day Forecast</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {scenario && scenario.daily.map((day, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-sky-50 p-4 ring-1 ring-sky-200"
                >
                  <p className="font-semibold text-sky-700">{day.day}</p>
                  <p className="my-2 text-3xl text-center">{day.icon}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-700">{day.condition}</p>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">{day.high}°</span>
                      <span className="text-gray-600">{day.low}°</span>
                    </div>
                    <p className="text-xs text-gray-600">Rain: {day.chance}</p>
                  </div>
                </div>
              ))}
              {!scenario && <div className="text-gray-500">No forecast data.</div>}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Page
