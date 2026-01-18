'use client'

interface WeatherCondition {
  shortDescription: string
  briefDescription: string
  description: string
}

interface WeatherCurrent {
  temp: number | string
  condition: WeatherCondition
  feelsLike: number | string
  humidity: number | string
  windSpeed: number | string
  pressure: number | string
  uvIndex: number | string
}

interface WeatherThreeHourly {
  hour: string
  icon: string
  temp: number | string
  chance: string
}

interface WeatherDaily {
  day: string
  icon: string
  condition: string
  high: number | string
  low: number | string
  chance: string
}

interface WeatherScenario {
  region: string
  province: string
  district: string
  current: WeatherCurrent
  threeHourly: WeatherThreeHourly[]
  daily: WeatherDaily[]
}

interface WeatherAlert {
  icon: string
  title: string
  description: string
}

interface RegionAlert {
  region: string
  alerts: WeatherAlert[]
}

interface WeatherData {
  districts: WeatherScenario[]
  regionAlerts: RegionAlert[]
}

interface WeatherTabProps {
  region: string
  province: string
  district: string
  weatherData: WeatherData
}

export default function WeatherTab({ region, province, district, weatherData }: WeatherTabProps) {
  const scenario = weatherData.districts.find(
    (d) => d.region === region && d.province === province && d.district === district
  )
  const regionAlert = weatherData.regionAlerts.find((r) => r.region === region)

  return (
    <section className="mx-auto max-w-5xl px-6 py-6 space-y-6">
      {/* Current Weather Card */}
      <div className="rounded-2xl bg-white shadow-md ring-1 ring-gray-100 p-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Current Conditions</p>
            <div className="mt-4">
              <div className="text-6xl font-bold text-gray-900">{scenario ? scenario.current.temp : '--'}°</div>
              <p className="mt-2 text-xl text-gray-700">{scenario ? scenario.current.condition.briefDescription : 'N/A'}</p>
              <p className="mt-1 text-sm text-gray-600">Feels like {scenario ? scenario.current.feelsLike : '--'}°</p>
              <p className="mt-1 text-sm text-gray-500 italic">{scenario ? scenario.current.condition.description : ''}</p>
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
          {regionAlert &&
            regionAlert.alerts.map((alert, idx) => (
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
        <h2 className="text-2xl font-bold text-gray-900">3-Hourly Forecast</h2>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-4">
          {scenario &&
            scenario.threeHourly.map((hour, idx) => (
              <div key={idx} className="min-w-max rounded-lg bg-sky-50 p-4 text-center ring-1 ring-sky-200">
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
          {scenario &&
            scenario.daily.map((day, idx) => (
              <div key={idx} className="rounded-lg bg-sky-50 p-4 ring-1 ring-sky-200">
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
  )
}

