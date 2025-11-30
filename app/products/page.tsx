'use client'

import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

type Product = {
  name: string
  tagline: string
  description: string
  status: 'Available' | 'Coming Soon'
  highlights: string[]
}

const products: Product[] = [
  {
    name: 'Climate Data API',
    tagline: 'Always-on data access',
    description: 'Programmatic access to weather observations, climate outlooks, and environmental indicators built for integration with your tools.',
    status: 'Available',
    highlights: ['REST + stream endpoints', 'Historical + live data', 'Role-based access controls'],
  },
  {
    name: 'Decision Support Dashboards',
    tagline: 'Operational clarity',
    description: 'Curated dashboards for emergency services, agriculture, and infrastructure partners with configurable alerts and thresholds.',
    status: 'Available',
    highlights: ['Multi-hazard alerting', 'Mobile-friendly layouts', 'Printable situation reports'],
  },
  {
    name: 'Hydro-Met Forecast Toolkit',
    tagline: 'Forecasts you can act on',
    description: "Ensemble forecasts, riverine outlooks, and impact-based summaries tuned for Papua New Guinea's diverse regions.",
    status: 'Coming Soon',
    highlights: ['Impact-centric summaries', 'Automated bulletin templates', 'Localised risk guidance'],
  },
  {
    name: 'Geospatial Data Hub',
    tagline: 'Maps, layers, and context',
    description: 'Downloadable layers, map services, and basemaps to pair environmental intelligence with the geography that matters.',
    status: 'Coming Soon',
    highlights: ['WMS + WMTS services', 'Curated shapefiles and rasters', 'High-resolution elevation coverage'],
  },
]

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>

      <header className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-600 text-white">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-200">CADET Products</p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold">Purpose-built tools for climate resilience</h1>
          <p className="mt-4 max-w-3xl text-lg text-sky-100">
            Explore the operational products that power CADET—from APIs to decision-support dashboards—designed to keep communities and partners prepared.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-12">
        <section>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm font-semibold text-sky-700">Product Suite</p>
              <h2 className="text-3xl font-bold text-gray-900">Built for collaboration and action</h2>
              <p className="mt-2 max-w-2xl text-gray-600">
                Each product is designed to help partners monitor hazards, understand impacts, and coordinate responses across Papua New Guinea.
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">Continuous updates</span>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <article key={product.name} className="flex flex-col rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start justify-between gap-2 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{product.tagline}</p>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">{product.name}</h3>
                    <p className="mt-3 text-gray-600">{product.description}</p>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                      product.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <div className="mt-auto border-t border-gray-100 p-6">
                  <div className="space-y-2">
                    {product.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="mt-1 h-2 w-2 rounded-full bg-sky-600" aria-hidden />
                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-sky-900 px-8 py-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Why CADET</p>
              <h3 className="text-3xl font-bold">Operational focus from day one</h3>
              <p className="text-sky-100">
                Data quality, timely alerts, and field-ready guidance are at the core of every CADET product. We work alongside emergency managers, planners, and researchers to ensure the tools stay relevant.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {["Impact-driven", "Partner-led", "Secure by design"].map((value) => (
                  <div key={value} className="rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-semibold">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white text-gray-900 p-6 shadow-sm">
              <h4 className="text-xl font-bold">Work with the team</h4>
              <p className="mt-2 text-gray-700">Tell us what you need from CADET products and we will align delivery with your mission.</p>
              <a
                href="mailto:info@cadet.com"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-sky-700 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
              >
                Contact CADET
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default Page
