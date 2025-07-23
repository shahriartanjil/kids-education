import React, { useState } from 'react';

const AdmissionsSection = () => {
  const [activeTab, setActiveTab] = useState('process');

  const admissionProcess = [
    { step: 1, title: "Inquiry", description: "Submit our online inquiry form or visit our campus" },
    { step: 2, title: "Application", description: "Complete the application form with required documents" },
    { step: 3, title: "Assessment", description: "Student assessment and family interview" },
    { step: 4, title: "Decision", description: "Admission committee review and decision" },
    { step: 5, title: "Enrollment", description: "Complete registration and payment process" }
  ];

  const requirements = [
    "Completed application form",
    "Birth certificate (copy)",
    "Previous school records",
    "Two recommendation letters",
    "Health immunization records",
    "Passport-sized photos"
  ];

  const fees = [
    { grade: "Kindergarten", amount: "$8,500/year" },
    { grade: "Elementary (1-5)", amount: "$10,200/year" },
    { grade: "Middle School (6-8)", amount: "$12,500/year" },
    { grade: "High School (9-12)", amount: "$14,800/year" }
  ];

  return (
    <div className="bg-white">
      {/* Cover Image */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt="Students in classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            Admissions
          </h1>
        </div>
      </div>

      {/* Admissions Content */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 font-medium ${activeTab === 'process' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Admission Process
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-6 py-3 font-medium ${activeTab === 'requirements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Requirements
            </button>
            <button
              onClick={() => setActiveTab('fees')}
              className={`px-6 py-3 font-medium ${activeTab === 'fees' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Tuition Fees
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {activeTab === 'process' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Admission Process</h2>
                <div className="space-y-6">
                  {admissionProcess.map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Admission Requirements</h2>
                <ul className="space-y-3">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'fees' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Tuition Fees (2023-2024)</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-gray-700">Grade Level</th>
                        <th className="py-3 px-4 text-left text-gray-700">Annual Tuition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fees.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-3 px-4 text-gray-700">{item.grade}</td>
                          <td className="py-3 px-4 text-gray-700 font-medium">{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    <span className="font-semibold">Note:</span> Fees include textbooks and basic materials. 
                    Additional fees may apply for extracurricular activities and field trips.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Inquiry Form */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Request More Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Parent/Guardian Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="grade" className="block text-gray-700 mb-2">Grade Level Interested In</label>
                <select id="grade" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Select grade level</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="elementary">Elementary (1-5)</option>
                  <option value="middle">Middle School (6-8)</option>
                  <option value="high">High School (9-12)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 mb-2">Questions/Comments</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsSection;