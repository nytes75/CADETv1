
"use client"
import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'


const values = [
  {
    title: 'Impact-first',
    description: 'Every workflow is tuned for decisions on the ground—from evacuation triggers to water management.',
  },
  {
    title: 'Open collaboration',
    description: 'We co-design products with agencies, researchers, and communities to ensure they stay relevant.',
  },
  {
    title: 'Reliability',
    description: 'Data quality, uptime, and operational support underpin how CADET is built and maintained.',
  },
]

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-sky-50 via-white to-white">
        <section className="mx-auto max-w-5xl px-6 py-16 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">About CADET</p>
          <h1 className="text-4xl font-bold text-gray-900">Our mission is to keep communities ready for what comes next</h1>
          <p className="text-lg text-gray-700">
            CADET (Climate and Disaster Early-warning Tool) brings together monitoring, modeling, and communication tools so partners can act quickly. We build for Papua New Guinea’s diverse geography—from islands to highlands—and the people who steward it.
          </p>
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900">What we do</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Operate monitoring dashboards with real-time alerts and thresholds</li>
              <li>• Deliver climate outlooks and impact-based summaries for planners</li>
              <li>• Provide APIs and data services for research and operational systems</li>
              <li>• Coordinate with partners to validate observations and reports</li>
            </ul>
          </div>
        </section>

        <section className="bg-sky-900 py-12 text-white">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-sky-100">{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-2xl border border-dashed border-sky-200 bg-sky-50 p-6">
            <h3 className="text-2xl font-semibold text-gray-900">Work with us</h3>
            <p className="mt-2 text-gray-700">We welcome collaborators across science, emergency management, infrastructure, and community organizations.</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-sky-800">
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sky-200">Data partnerships</span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sky-200">Pilot programs</span>
              <span className="rounded-full bg-white px-3 py-1 ring-1 ring-sky-200">Training & readiness</span>
            </div>
            <a
              href="mailto:info@cadet.com"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600"
            >
              Contact the team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
 }

export default Page

