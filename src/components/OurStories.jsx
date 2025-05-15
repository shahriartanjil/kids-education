import React from "react";

const OurStories = () => {
    const stories = [
        {
            id: 1,
            date: "November 19, 2019",
            title: "A fun toddler coloring training on classroom",
            description: "Beautiful branding for changes by Never Now in Australia. changes is a platform for open discussion in an inclusive and collaborative environment, providing the...",
            image: "https://i.postimg.cc/gjSG0K03/Rectangle-12.png",
            position: "left"
        },
        {
            id: 2,
            date: "September 10, 2019",
            title: "Find out if a school fits the family's needs",
            image: "https://i.postimg.cc/tCcXQDwj/Article.png"
        },
        {
            id: 3,
            date: "November 19, 2019",
            title: "Classroom management techniques for new tutors",
            image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            date: "July 19, 2019",
            title: "Summer math & literacy centres for kids",
            image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            date: "July 19, 2019",
            title: "Conversation rhymes improve kids listening",
            image: "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-8 font-sans">
            <h1 className="text-3xl font-bold text-center mb-12">Our Stories</h1>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-8 w-full">
                {/* Left Column - Single Featured Story */}
                <div className="lg:w-[40%]">
                    <div className="sticky top-4">

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="mb-8">
                                <img
                                    src={stories[0].image}
                                    alt={stories[0].title}
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            <p className="text-gray-500 text-sm mb-2">November 19, 2019</p>
                            <h2 className="text-xl text-black font-medium mb-4">{stories[0].title}</h2>
                            <div className="text-gray-600 text-base">
                                <p className="mb-2">Beautiful branding for changes
                                    by Never Now in Australia.changes is a platform for open discussion in an inclusive and collaborative environment, providing the...</p>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Other Stories in 2-column Grid */}
                <div className="lg:w-[60%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stories.slice(1).map((story) => (
                            <div key={story.id} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                                    <img className="w-full h-full object-cover"
                                        src={story.image}
                                        alt={story.title}

                                    />
                                </div>
                                <div>
                                    {story.date && <p className="text-black font-bold text-center text-sm mb-2">{story.date}</p>}
                                    <h2 className="text-xl text-black font-medium">{story.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-center mt-6 ">
            <button className=" bg-black text-white font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-300 transform hover:scale-105">
            View All
          </button>
            </div>
        </section>
    );
};

export default OurStories;