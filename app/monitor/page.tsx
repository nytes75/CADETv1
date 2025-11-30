'use client'
 
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
 
const metrics = [
  { label: 'Temperature', value: '29°C', detail: 'Humid, feels like 32°C' },
  { label: 'Humidity', value: '72%', detail: 'Stable' },
  { label: 'Wind', value: '18 km/h', detail: 'Coastal gusts' },
  { label: 'Rainfall', value: '14 mm', detail: 'Last 6 hours' },
  { label: 'River level', value: '2.3 m', detail: 'Rising at 3 cm/hr' },
  { label: 'Air quality', value: 'Good', detail: 'AQI 42' },
]

const Page = () => {
 return (
  <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-sky-50 via-white to-white">
        <section className="mx-auto max-w-6xl px-6 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Monitoring</p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Operational dashboard</h1>
              <p className="mt-2 max-w-3xl text-gray-700">
                Track live conditions across Papua New Guinea. Metrics update continuously from stations, satellites, and partner reports.
              </p>
            </div>
            <span className="rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-800">
              Updated just now
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <article key={metric.label} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                <p className="text-sm font-semibold text-sky-700">{metric.label}</p>
                <p className="mt-2 text-3xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-600">{metric.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Maps & layers</h2>
                  <p className="text-gray-600">Radar, rainfall anomaly, and flood outlooks</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">Stable</span>
              </div>
              <div className="mt-4 h-80 rounded-xl bg-gradient-to-br from-sky-100 via-white to-sky-50 ring-1 ring-gray-100" aria-label="Monitoring map placeholder" />
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-sky-900 p-5 text-white shadow-inner ring-1 ring-white/15">
                <h3 className="text-lg font-semibold">Active advisories</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>• Flood watch for lower Sepik River communities</li>
                  <li>• Strong wind warning for Huon Gulf</li>
                  <li>• Localized landslide risk near highland passes</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50 p-5 text-sm text-sky-900">
                Need a custom view or data export? <a href="mailto:info@cadet.com" className="font-semibold underline">Contact the team</a>.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
     </div>
   )
 }
 
 export default Page
