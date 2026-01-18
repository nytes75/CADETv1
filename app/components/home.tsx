"use client"

import Link from "next/link"
import weatherData from "../data/weather-scenarios.json"

const stats = [
  { label: "Active Alerts", value: "12", context: "across PNG provinces" },
  { label: "Data Sources", value: "48", context: "stations, satellites, and models" },
  { label: "Response Partners", value: "30+", context: "coordinated agencies" },
]

// Map JSON data to Ticker format
const weatherTicker = weatherData.districts.map((d) => ({
  location: d.district,
  temperature: `${d.current.temp}°C`,
  condition: d.current.condition.shortDescription,
}))

// Map Alert Level to Severity Color/Label
const getSeverity = (level: string) => {
  switch (level) {
    case "alert":
      return "Red"
    case "warning":
      return "Orange"
    case "info":
    default:
      return "Yellow"
  }
}

const getSeverityStyles = (severity: string) => {
  switch (severity) {
    case "Red":
      return "bg-red-100 text-red-800"
    case "Orange":
      return "bg-orange-100 text-orange-800"
    case "Yellow":
    default:
      return "bg-amber-100 text-amber-800"
  }
}

// Map JSON alerts to Advisories format
const advisories = weatherData.regionAlerts.flatMap((r) =>
  r.alerts.map((a) => ({
    area: r.region,
    type: a.title,
    severity: getSeverity(a.level),
    detail: a.description,
  }))
)

const initiatives = [
  {
    name: "Flood Ready",
    description: "Impact-based flood thresholds tuned for critical river basins and townships.",
    status: "Live in 6 provinces",
  },
  {
    name: "Community Observers",
    description: "Field reports and photos stitched directly into monitoring dashboards.",
    status: "Piloting with local councils",
  },
  {
    name: "Climate Outlooks",
    description: "Action-focused guidance for planners, utilities, and logistics teams.",
    status: "New seasonal release",
  },
]

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:flex lg:items-center lg:gap-12">
        <div className="space-y-6 lg:w-3/5">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-sky-100 ring-1 ring-white/20">
            CADET • Climate and Disaster Early-warning Tool
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Climate intelligence for faster, better decisions across Papua New Guinea
          </h1>
          <p className="text-lg text-sky-100 lg:text-xl">
            Stay ahead of severe weather with integrated monitoring, forecast insights, and operational dashboards tailored for responders, planners, and community partners.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-sky-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore products
            </Link>
            <Link
              href="/monitor"
              className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Open monitoring center
            </Link>
          </div>
        </div>
        <div className="mt-10 grid flex-1 grid-cols-1 gap-4 rounded-2xl bg-white/5 p-6 text-sky-50 shadow-inner ring-1 ring-white/15 sm:grid-cols-3 lg:mt-0">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10">
              <p className="text-sm font-semibold text-sky-200">{item.label}</p>
              <p className="mt-2 text-3xl font-bold">{item.value}</p>
              <p className="mt-1 text-sm text-sky-100">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


const AlertBar = () => {
  return (
    <div className="border-b border-gray-200 bg-white py-4 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 text-sm text-gray-700">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800">
          Live conditions
        </span>
        <div className="flex flex-1 items-center gap-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {[...weatherTicker, ...weatherTicker].map((data, index) => (
              <span
                key={`${data.location}-${index}`}
                className="mr-6 inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-gray-800 shadow-sm"
              >
                <strong className="mr-2">{data.location}</strong>
                {data.temperature} · {data.condition}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const AlertMap = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
          <p className="text-sm font-semibold text-sky-700">Advisory focus</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Situational snapshot</h2>
          <p className="mt-2 text-gray-600">
            Monitor rainfall, river heights, wind, and volcanic signals to anticipate impacts and plan resources.
          </p>
          <div className="mt-6 h-72 rounded-xl bg-gradient-to-br from-sky-100 via-white to-sky-50 ring-1 ring-gray-100" aria-label="Map placeholder" />
        </div>
        <div className="space-y-4">
          {advisories.map((advisory, idx) => (
            <div
              key={`${advisory.area}-${idx}`}
              className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
            >
              <div className="mt-1 h-3 w-3 rounded-full bg-sky-600" aria-hidden />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">{advisory.area}</p>
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">{advisory.type}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getSeverityStyles(advisory.severity)}`}>{advisory.severity}</span>
                </div>
                <p className="mt-2 text-base font-semibold text-gray-900">{advisory.detail}</p>
                <p className="text-sm text-gray-600">Updated 15 minutes ago</p>
              </div>
            </div>
          ))}
          {/*<div className="rounded-xl border border-dashed border-sky-200 bg-sky-50 p-5 text-sky-800">
            Want to feature your agency alerts? <Link href="/about" className="font-semibold underline">Partner with CADET</Link>.
          </div> */}
        </div>
      </div>
    </section>
  )
}


const EventHolder = () => {
  return (
    <section className="bg-sky-900 py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-200">Programs</p>
            <h3 className="text-3xl font-bold">What we are delivering with partners</h3>
          </div>
          <Link
            href="/projects"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/15"
          >
            See project pipeline
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {initiatives.map((item) => (
            <article key={item.name} className="flex flex-col rounded-2xl bg-white/5 p-6 shadow-inner ring-1 ring-white/10">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-sky-100">{item.status}</span>
              </div>
              <p className="mt-3 text-sky-100">{item.description}</p>
              <div className="mt-auto pt-4 text-sm text-sky-200">Co-design sessions open</div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-sky-200">Spotlight</p>
            <h4 className="mt-2 text-2xl font-bold">Coastal inundation readiness</h4>
            <p className="mt-3 text-sky-100">
              We are working with maritime authorities to blend tide gauges, HF radar, and community observers. Alerts are tuned to local infrastructure and evacuation routes so responders can act quickly.
            </p>
          </div>
          <div className="rounded-xl bg-white/10 p-4 text-sm text-sky-50 ring-1 ring-white/10">
            <p className="font-semibold">Upcoming</p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                New rainfall anomaly layers in dashboards
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                SMS alerting expansion for remote districts
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                Rapid post-event reporting templates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero, AlertBar, AlertMap, EventHolder }
