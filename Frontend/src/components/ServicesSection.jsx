import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Projects',
      description: 'Tailored to meet individual needs perfectly balanced.',
      iconColor: 'bg-pink-100 text-pink-600',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Commercial Projects',
      description: 'Tailored to meet individual needs perfectly balanced.',
      iconColor: 'bg-green-100 text-green-600',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Interior Work',
      description: 'Tailored to meet individual needs perfectly balanced.',
      iconColor: 'bg-blue-100 text-blue-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Architectural Drawing',
      description: 'Tailored to meet individual needs perfectly balanced.',
      iconColor: 'bg-orange-100 text-orange-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Structural Drawing',
      description: 'Tailored to meet individual needs perfectly balanced.',
      iconColor: 'bg-purple-100 text-purple-600',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our <span className="relative inline-block">
              <span className="relative z-10">Services</span>
              {/* Pink highlight behind text */}
              <span className="absolute bottom-0 left-0 w-full h-4 bg-pink-100 -z-10 transform -translate-y-1 rounded-sm"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
            Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative border border-gray-100 flex flex-col h-full"
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md flex items-center justify-center mb-6 ${service.iconColor}`}>
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Read More Link */}
              <a 
                href="#" 
                className="text-sm font-medium hover:underline flex items-center gap-1 mt-auto"
                style={{ color: service.iconColor.split(' ')[1].replace('text-', '') === 'pink-600' ? '#ec4899' : '#374151' }} // Matches link color to design roughly
              >
                Read more 
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 shadow-md">
            Hire Us Today &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;