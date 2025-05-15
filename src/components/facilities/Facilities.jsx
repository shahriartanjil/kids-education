import React from 'react';

const FacilitiesSection = () => {
    const facilities = [
        {
            name: "Science Laboratories",
            description: "State-of-the-art labs for physics, chemistry, and biology with modern equipment",
            image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Library",
            description: "Extensive collection of books, digital resources, and quiet study spaces",
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Sports Complex",
            description: "Indoor gymnasium, swimming pool, and outdoor athletic fields",
            image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Computer Center",
            description: "Modern computer lab with high-speed internet and latest software",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Arts Studio",
            description: "Creative spaces for visual arts, music, and theater productions",
            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            name: "Cafeteria",
            description: "Spacious dining area serving nutritious meals daily",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="bg-white">
            {/* Cover Image */}
            <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1549861833-c5932fd19229?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                    alt="School facilities overview"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                        <span className='text-orange-600'>O</span>ur <span className='text-orange-600'>F</span>acilities
                    </h1>
                </div>
            </div>

            {/* Facilities Grid */}
            <section className="py-12 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl text-black font-bold mb-4">World-Class Learning Environment</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We provide exceptional facilities designed to inspire learning, creativity, and personal growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="h-48 overflow-hidden">
                                    <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        src={facility.image}
                                        alt={facility.name}
                                        
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl text-black font-semibold mb-2">{facility.name}</h3>
                                    <p className="text-gray-600">{facility.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FacilitiesSection;