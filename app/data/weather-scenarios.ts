// Weather scenario data for all districts in Papua New Guinea
// and alerts for the four regions

export type Region = 'Southern' | 'Momase' | 'Highlands' | 'New Guinea Islands';

export type Province = string;
export type District = string;

export interface WeatherScenario {
  region: Region;
  province: Province;
  district: District;
  current: {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    windDir: string;
    pressure: number;
    feelsLike: number;
    uvIndex: number;
    visibility: number;
  };
  hourly: Array<{
    hour: string;
    temp: number;
    icon: string;
    chance: string;
  }>;
  daily: Array<{
    day: string;
    high: number;
    low: number;
    condition: string;
    icon: string;
    chance: string;
  }>;
}

export interface RegionAlert {
  region: Region;
  alerts: Array<{
    level: 'warning' | 'alert' | 'info';
    title: string;
    description: string;
    icon: string;
  }>;
}

// Example data (fill in with real districts, provinces, and scenarios)
export const weatherScenarios: WeatherScenario[] = [
  {
    region: 'Southern',
    province: 'Central',
    district: 'Port Moresby',
    current: {
      temp: 31,
      condition: 'Humid',
      humidity: 78,
      windSpeed: 12,
      windDir: 'SE',
      pressure: 1010,
      feelsLike: 34,
      uvIndex: 8,
      visibility: 10,
    },
    hourly: [
      { hour: '9am', temp: 28, icon: '☀️', chance: '0%' },
      { hour: '10am', temp: 29, icon: '☀️', chance: '0%' },
      { hour: '11am', temp: 30, icon: '☀️', chance: '0%' },
      { hour: '12pm', temp: 31, icon: '☀️', chance: '0%' },
      { hour: '1pm', temp: 32, icon: '☀️', chance: '10%' },
      { hour: '2pm', temp: 33, icon: '🌤️', chance: '20%' },
      { hour: '3pm', temp: 32, icon: '🌤️', chance: '20%' },
      { hour: '4pm', temp: 31, icon: '🌤️', chance: '10%' },
      { hour: '5pm', temp: 30, icon: '🌙', chance: '0%' },
    ],
    daily: [
      { day: 'Mon', high: 32, low: 24, condition: 'Sunny', icon: '☀️', chance: '10%' },
      { day: 'Tue', high: 33, low: 25, condition: 'Cloudy', icon: '⛅', chance: '30%' },
      { day: 'Wed', high: 31, low: 23, condition: 'Rainy', icon: '🌧️', chance: '80%' },
      { day: 'Thu', high: 30, low: 22, condition: 'Stormy', icon: '⛈️', chance: '90%' },
      { day: 'Fri', high: 32, low: 24, condition: 'Clearing', icon: '🌤️', chance: '40%' },
    ],
  },
  {
    region: 'Highlands',
    province: 'Eastern Highlands',
    district: 'Goroka',
    current: {
      temp: 25,
      condition: 'Showers',
      humidity: 88,
      windSpeed: 8,
      windDir: 'NW',
      pressure: 1015,
      feelsLike: 25,
      uvIndex: 6,
      visibility: 8,
    },
    hourly: [
      { hour: '9am', temp: 22, icon: '🌧️', chance: '60%' },
      { hour: '10am', temp: 23, icon: '🌧️', chance: '70%' },
      { hour: '11am', temp: 24, icon: '🌦️', chance: '50%' },
      { hour: '12pm', temp: 25, icon: '🌦️', chance: '40%' },
      { hour: '1pm', temp: 26, icon: '⛅', chance: '20%' },
      { hour: '2pm', temp: 27, icon: '☀️', chance: '10%' },
      { hour: '3pm', temp: 26, icon: '☀️', chance: '0%' },
      { hour: '4pm', temp: 25, icon: '☀️', chance: '0%' },
      { hour: '5pm', temp: 24, icon: '🌙', chance: '0%' },
    ],
    daily: [
      { day: 'Mon', high: 27, low: 18, condition: 'Rainy', icon: '🌧️', chance: '80%' },
      { day: 'Tue', high: 28, low: 19, condition: 'Cloudy', icon: '⛅', chance: '30%' },
      { day: 'Wed', high: 26, low: 17, condition: 'Showers', icon: '🌦️', chance: '60%' },
      { day: 'Thu', high: 25, low: 16, condition: 'Stormy', icon: '⛈️', chance: '90%' },
      { day: 'Fri', high: 27, low: 18, condition: 'Clearing', icon: '🌤️', chance: '40%' },
    ],
  },
  // ...add more districts for all provinces and regions
];

export const regionAlerts: RegionAlert[] = [
  {
    region: 'Southern',
    alerts: [
      { level: 'warning', title: 'Flood Watch', description: 'Lower Fly River communities', icon: '⚠️' },
      { level: 'info', title: 'Heat Advisory', description: 'High temperatures expected in Port Moresby', icon: '🌡️' },
    ],
  },
  {
    region: 'Momase',
    alerts: [
      { level: 'alert', title: 'Strong Winds', description: 'Coastal gusts near Lae', icon: '🌪️' },
      { level: 'info', title: 'Marine Advisory', description: 'Rough seas expected in Madang', icon: '🌊' },
    ],
  },
  {
    region: 'Highlands',
    alerts: [
      { level: 'warning', title: 'Heavy Rain', description: 'River levels rising in Jiwaka and Simbu', icon: '🌧️' },
      { level: 'info', title: 'Landslide Risk', description: 'Localized landslide risk near highland passes', icon: '⛰️' },
    ],
  },
  {
    region: 'New Guinea Islands',
    alerts: [
      { level: 'alert', title: 'Volcanic Haze', description: 'Light ash fall possible around Rabaul', icon: '🌋' },
      { level: 'info', title: 'Tsunami Watch', description: 'No current threat, monitoring active', icon: '🌊' },
    ],
  },
];
