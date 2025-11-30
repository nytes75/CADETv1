'use client'
 
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
 
const initiatives = [
  {
    name: 'Provincial alerting expansion',
    status: 'In delivery',
    detail: 'Rolling out SMS + radio broadcast alerts for priority provinces with training packages.',
  },
  {
    name: 'Hydro-met data hub',
    status: 'Design',
    detail: 'Curated APIs and download services for rainfall, river gauges, and model outputs.',
  },
  {
    name: 'Coastal inundation playbooks',
    status: 'Pilot',
    detail: 'Community-ready guidance for surge and king-tide events with localized maps.',
  },
  {
    name: 'Agriculture climate outlooks',
    status: 'Discovery',
    detail: 'Seasonal guidance co-developed with grower groups and extension officers.',
  },
]

const Page = () => {
  return (
   <div className="flex min-h-screen flex-col bg-white text-gray-899">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-sky-50 via-white to-white">
        <section className="mx-auto max-w-5xl px-6 py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Projects</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">Building capability together</h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            From national systems to local pilots, CADET works alongside partners to deliver reliable tools, training, and data services.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {initiatives.map((item) => (
              <article key={item.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-gray-700">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-sky-200 bg-sky-50 p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Propose a collaboration</h3>
            <p className="mt-2 text-gray-700">Have a need for data, dashboards, or training? Let’s scope it together.</p>
            <a
              href="mailto:info@cadet.com"
              className="mt-4 inline-flex items-center rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600"
            >
              Start a conversation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
 }
 
 export default Page
