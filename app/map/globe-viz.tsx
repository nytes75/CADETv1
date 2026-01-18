'use client'

import React, { useEffect, useRef, useState, useMemo } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'
import weatherData from '../data/weather-scenarios.json'

interface WeatherStation {
    name: string
    lat: number
    lng: number
    temp: number
    condition: string
}

const GlobeViz = () => {
    const globeEl = useRef<GlobeMethods | undefined>(undefined)
    const [stations, setStations] = useState<WeatherStation[]>([])
    const [countries, setCountries] = useState({ features: [] })
    const [hoverD, setHoverD] = useState<object | null>(null)
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 })

    useEffect(() => {
        // Handle window resize
        if (typeof window !== 'undefined') {
            setDimensions({ width: window.innerWidth, height: window.innerHeight })
            const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight })
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        // Transform weather data into points
        const points = weatherData.districts.map(d => ({
            name: d.district,
            lat: d.lat,
            lng: d.lng,
            temp: d.current.temp,
            condition: d.current.condition.shortDescription
        }))
        setStations(points)

        // Load GeoJSON
        fetch('/custom.geo.json')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
            .catch(err => console.error('Failed to load GeoJSON', err))
    }, [])

    useEffect(() => {
        if (globeEl.current) {
            // Stop auto-rotate and focus on PNG
            globeEl.current.controls().autoRotate = false
            globeEl.current.controls().minDistance = 101 // Constraints for zoom (approximate, varies by control impl)
            globeEl.current.controls().maxDistance = 300 // Constrain zoom out

            // Initial view
            globeEl.current.pointOfView({ lat: -6, lng: 147, altitude: 0.5 }, 1000)
        }
    }, [])

    return (
        <div className="relative h-full w-full">
            <Globe
                ref={globeEl}
                width={dimensions.width}
                height={dimensions.height}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

                pointsData={stations}
                pointLat="lat"
                pointLng="lng"
                pointColor={d => (d as WeatherStation).temp > 30 ? 'red' : 'orange'}
                pointAltitude={0.01}
                pointRadius={0.5}
                pointLabel={d => `
                    <div style="color: black; background: white; padding: 4px; border-radius: 4px; font-family: sans-serif;">
                        <b>${(d as WeatherStation).name}</b><br/>
                        ${(d as WeatherStation).temp}°C - ${(d as WeatherStation).condition}
                    </div>
                `}

                polygonsData={countries.features}
                polygonCapColor={d => d === hoverD ? 'rgba(0, 200, 255, 0.1)' : 'rgba(0, 0, 0, 0)'}
                polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
                polygonStrokeColor={() => '#00ffff'}
                polygonLabel={({ properties: d }: any) => `
                    <div style="color: black; background: white; padding: 4px; border-radius: 4px; font-family: sans-serif;">
                        <b>${d.admin || d.name || 'Unknown Region'}</b>
                    </div>
                `}
                onPolygonHover={setHoverD}
                polygonsTransitionDuration={300}
            />

            {/* Sidebar Toggle */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="absolute top-4 left-4 z-50 rounded bg-gray-800 p-2 text-white hover:bg-gray-700"
            >
                {sidebarOpen ? 'Close Menu' : 'Open Menu'}
            </button>

            {/* Sidebar Overlay */}
            {sidebarOpen && (
                <div className="absolute top-16 left-4 z-40 w-72 rounded-lg bg-black/80 p-4 text-sm text-gray-200 backdrop-blur-md border border-gray-700 font-mono">
                    <div className="mb-2 grid grid-cols-[80px_1fr] gap-2">
                        <span className="text-gray-400">Data</span>
                        <span className="text-white">Wind @ Surface</span>
                    </div>
                    <div className="mb-2 grid grid-cols-[80px_1fr] gap-2">
                        <span className="text-gray-400">Date</span>
                        <span className="text-white">2026-01-17 18:00 Local</span>
                    </div>
                    <div className="mb-2 grid grid-cols-[80px_1fr] gap-2">
                        <span className="text-gray-400">Source</span>
                        <span className="text-white">GFS / NCEP / US National Weather Service</span>
                    </div>

                    <div className="mb-4 mt-2">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400">Scale</span>
                            <div className="h-4 flex-1 rounded bg-gradient-to-r from-blue-500 via-green-400 to-red-500"></div>
                        </div>
                    </div>

                    <div className="my-3 h-px bg-gray-600"></div>

                    <div className="mb-3">
                        <span className="mb-1 block text-gray-400">Control</span>
                        <div className="flex gap-1">
                            <button className="px-2 py-1 hover:bg-gray-700 bg-gray-700/50 rounded text-yellow-400 font-bold">Now</button>
                            <button className="px-2 py-1 hover:bg-gray-700 bg-gray-700/50 rounded">📅</button>
                            <button className="px-2 py-1 hover:bg-gray-700 bg-gray-700/50 rounded">«</button>
                            <button className="px-2 py-1 hover:bg-gray-700 bg-gray-700/50 rounded">‹</button>
                            <button className="px-2 py-1 hover:bg-gray-700 bg-gray-700/50 rounded">›</button>
                            <button className="px-2 py-1 hover:bg-gray-700 bg-gray-700/50 rounded">»</button>
                            <button className="ml-auto px-2 py-1 hover:bg-gray-700 bg-gray-700/50 rounded">Grid</button>
                        </div>
                    </div>

                    <div className="mb-3">
                        <span className="mb-1 block text-gray-400">Mode</span>
                        <div className="flex flex-wrap gap-1 text-xs">
                            <button className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded border border-yellow-400/50">Air</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">Ocean</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">Chem</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">Particulates</button>
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="mb-1 block text-gray-400">Animation</span>
                        <div className="flex flex-wrap gap-1 text-xs">
                            <button className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded border border-yellow-400/50">Wind</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">Currents</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">Waves</button>
                        </div>
                    </div>

                    <div className="mb-2">
                        <span className="mb-1 block text-gray-400">Overlay</span>
                        <div className="flex flex-wrap gap-1 text-xs">
                            <button className="px-2 py-1 bg-yellow-400/20 text-yellow-400 rounded border border-yellow-400/50">Wind</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">Temp</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">RH</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">WPD</button>
                            <button className="px-2 py-1 hover:bg-gray-700 text-gray-400 rounded">None</button>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-between text-[10px] text-gray-500">
                        <span>about</span>
                        <div className="flex gap-2">
                            <span>fb</span>
                            <span>tw</span>
                            <span>yt</span>
                            <span>ig</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GlobeViz
