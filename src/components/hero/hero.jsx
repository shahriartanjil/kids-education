import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text Content (Left Side) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-400">Empowering</span> <br /> students from small <br /> age <span className="text-sky-500">towards vision</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            With the courage, Confidence, Creativity and Compassion to make their Unique Contribution in a Diverse and Dynamic World.
          </p>
          
          <div className="border-t border-gray-300 w-24 mx-auto md:mx-0 mb-8"></div>
          
          <button className=" bg-black text-white font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-300 transform hover:scale-105">
            Enroll Now
          </button>
        </div>

        {/* Image (Right Side) */}
        <div className="md:w-1/2">
          <img 
            src="https://i.postimg.cc/MTCR2dm3/Group-4.png" 
            alt="Happy students learning"
            className="w-full h-auto rounded-lg  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;