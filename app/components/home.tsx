"use client";

const Hero = () => {
  return (
    <section className="relative bg-sky-900 text-white h-[40vh] flex items-center justify-start">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>
      <div className="relative z-10 max-w-2xl px-4 lg:px-8 pl-8 flex flex-col items-start">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-left">
          CADET
        </h1>
        <p className="text-lg lg:text-xl mb-6 text-left">
          For weather, climate, and environmental monitoring.
        </p>
        <a href="#learn-more" className="px-8 py-3 bg-sky-700 text-white rounded-md hover:bg-sky-600 transition text-left">
          Learn More
        </a>
      </div>
    </section>
  );
}

const weatherData = [
  { location: 'Port Moresby', temperature: '31°C', condition: 'Sunny' },
  { location: 'Lae', temperature: '30°C', condition: 'Cloudy' },
  { location: 'Goroka', temperature: '25°C', condition: 'Rainy' },
  { location: 'Rabaul', temperature: '29°C', condition: 'Clear' },
  { location: 'Madang', temperature: '29°C', condition: 'Clear' },
  { location: 'Kavieng', temperature: '29°C', condition: 'Clear' },
  { location: 'Mt Hagen', temperature: '29°C', condition: 'Clear' },
  { location: 'Kerema', temperature: '29°C', condition: 'Clear' }, 
  { location: 'Alotau', temperature: '29°C', condition: 'Clear' },
  { location: 'Wabag', temperature: '29°C', condition: 'Clear' },
  { location: 'Popondetta', temperature: '29°C', condition: 'Clear' },  
  // Add more locations as needed
];

const AlertBar = () => {
  return (
    <div className="bg-gray-900 text-white py-4 overflow-hidden relative">
      <div className="mb-4 px-6">
        <span className="text-gray-100 font-semibold">Current Weather //</span>
      </div>
      <div className="whitespace-nowrap animate-marquee flex items-center space-x-4 px-6">
        {/* Duplicate the content to create a continuous scrolling effect */}
        {[...weatherData, ...weatherData].map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center px-6 py-2 bg-sky-700 rounded-lg shadow-md border border-sky-600"
          >
            <h4 className="text-lg font-semibold">{data.location}</h4>
            <p>{data.temperature} - {data.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AlertMap = () => {
  return (
    <section className="relative bg-black-500 text-white h-[40vh] flex items-center justify-start">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}></div>
      <div className="relative z-10 max-w-2xl px-4 lg:px-8 pl-8 flex flex-col items-start">
        {/*
          A map of Papua New Guinea
        */}  
      </div>
    </section>
  );
}

const main_project = [
  {
    name: 'Drought Monitoring',
    description: 'Track and analyze drought conditions to mitigate impacts on water supply, agriculture, and the ecosystem.',
    img: '/path/to/drought-image.jpg', // Placeholder path
  },
  {
    name: 'Coastal Inundation',
    description: 'Monitor coastal flooding risks to protect communities and infrastructure from rising sea levels and storm surges.',
    img: '/path/to/coastal-image.jpg', // Placeholder path
  },
  {
    name: 'Flood Forecasting',
    description: 'Predict and prepare for potential flooding events to reduce damage and safeguard communities.',
    img: '../data/flood-home-01231.jpg', // Placeholder path
  },
];

const EventHolder = () => {
  return (
    <section className="relative bg-sky-900 text-white h-[80vh] flex justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}
      ></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 py-8 flex flex-col items-center">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {main_project.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-sky-700 p-6 rounded-lg shadow-md max-w-xs mx-auto"
            >
              <div
                className="w-full h-40 bg-gray-300 rounded-lg mb-4 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.img})` }}
              >
                {/* Image */}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-center">{project.name}</h3>
              <p className="text-gray-300 text-center">{project.description}</p>
            </div>
          ))}
        </div>
        <div className="py-10 mx-6 rounded-md items-center">
          <span className="text-2xl font-thin text-black">
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            </p>  
          </span>
        </div>
      </div>
    </section>
  );
};

export {Hero, AlertBar,AlertMap,EventHolder};
