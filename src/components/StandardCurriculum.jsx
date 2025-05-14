import React from "react";

const StandardCurriculum = () => {
    const curriculumData = [
        {
            title: "Kinder (3-6) Years",
            description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient",
            hasReadMore: true,
            image: "https://i.postimg.cc/d0MNYK4Y/SVG.png"
        },
        {
            title: "Elementary School",
            description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient",
            hasReadMore: true,
            image: " https://i.postimg.cc/fbGNpF0t/SVG-1.png"
        },
        {
            title: "Middle (10-16) Years",
            description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mu sdis parturient",
            hasReadMore: true,
            image: "https://i.postimg.cc/ZnfDtBD7/SVG-2.png"
        }
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Standard Curriculum</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {curriculumData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            {/* Image at the top of each card */}
                            <div className="h-48 overflow-hidden">
                                <img className=" h-full ml-25 mt-2 "
                                    src={item.image}
                                    alt={item.title}

                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mb-6">{item.description}</p>
                                {item.hasReadMore && (
                                    <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
                                        Read More
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StandardCurriculum;