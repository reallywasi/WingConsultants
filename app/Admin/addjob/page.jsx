
"use client"

import React, { useState } from "react";

const EmployerZone = () => {

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    businessEmail: "",
    position: "",
    requiredSkills: "",
    jobDescription: "",
    budgetRange: "",
    jobType: "",
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/employer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Requirement posted successfully!");
        setFormData({
          companyName: "",
          contactPerson: "",
          businessEmail: "",
          position: "",
          requiredSkills: "",
          jobDescription: "",
          budgetRange: "",
          jobType: "",
        });
      } else {
        alert("Failed to post requirement. Please try again.");
      }
    } catch (error) {
      console.error("Error posting requirement:", error);
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <section id="employerzone" className=" text-black py-2 h-screen">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-1 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-1">Employer Zone</h2>
          <p className="text-lg text-gray-800">
            Post a job to find your next <span className="text-yellow-600">tech superstar</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8 animate__animated animate__fadeInLeft text-white pb-10">
            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-yellow-600 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </span>
                Specialized Tech Talent Pool
              </h3>
              <p className="text-gray-300">
                Access our pre-screened pool of developers, engineers, and tech
                professionals ready for immediate deployment.
              </p>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-yellow-600 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                </span>
                Quality Assurance
              </h3>
              <p className="text-gray-300">
                Rigorous technical assessment and background verification for
                all candidates.
              </p>
            </div>

            <div className="bg-neutral-800 rounded-xl p-6 hover:bg-neutral-700 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="bg-yellow-600 p-2 rounded-lg mr-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </span>
                Fast Turnaround
              </h3>
              <p className="text-gray-300">
                Get matched with qualified candidates within 48 hours of
                requirement submission.
              </p>
            </div>
          </div>

          {/* Right Section */}


          <div className="animate__animated animate__fadeInRight h-[75vh] overflow-y-auto">
            <div className="bg-neutral-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Post Your <span className="text-yellow-600">Requirnments</span></h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Contact Person*
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Business Email*
                  </label>
                  <input
                    type="email"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}

                    required
                    className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Position to Fill*
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Required Skills*
                  </label>
                  <input
                    type="text"
                    name="requiredSkills"
                    value={formData.requiredSkills}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white"
                    placeholder="e.g., React, Node.js, Python"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Job Description*
                  </label>
                  <textarea
                    rows="4"
                    name="jobDescription"
                    value={formData.jobDescription}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Budget Range (Annual in USD)*
                  </label>
                  <select
                  name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white"
                  >
                    <option value="">Select Range</option>
                    <option value="50-70k">$50,000 - $70,000</option>
                    <option value="70-90k">$70,000 - $90,000</option>
                    <option value="90-120k">$90,000 - $120,000</option>
                    <option value="120k+">$120,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Type*</label>
                  <select
                  name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white"
                  >
                    <option value="">Select Type</option>
                    <option value="remote">Remote</option>
                    <option value="internship">Internship</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="onsite">Onsite</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite"
                >
                  Submit Requirement
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default EmployerZone;

























































































