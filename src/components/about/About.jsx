import React from 'react';

const AboutSection = () => {
  return (
    <div className="bg-white">
      {/* Cover Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt="School building with students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            About Our School
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl text-black font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide exceptional education that nurtures curiosity, creativity, 
                and critical thinking in a supportive learning environment.
              </p>
              
              <h3 className="text-xl text-black font-semibold mb-4">History</h3>
              <p className="text-gray-600">
                Founded in 1995, we've grown from a small community school to a 
                leading educational institution serving over 1,200 students annually.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl text-black font-semibold mb-4">Facilities</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                <li>Modern science laboratories</li>
                <li>Fully-equipped computer center</li>
                <li>Comprehensive library resources</li>
                <li>Sports complex and swimming pool</li>
                <li>Arts and music studios</li>
              </ul>
              
              <h3 className="text-xl text-black font-semibold mb-4">Achievements</h3>
              <p className="text-gray-600">
                Recognized as "Excellence in Education" award winner for 5 consecutive years, 
                with 98% college acceptance rate among graduates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;