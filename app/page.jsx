import UserInfo from "@/components/UserInfo";
import JobCard from "@/components/JobCard";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="relative h-screen -mt-24">
      {/* <UserInfo /> */}
      {/* <LandingPage/> */}
  <JobCard   className="my-10" />





 {/* section lower to hero */}


 <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive recruitment solutions tailored for tech startups and growing companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
            <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Technical Recruitment</h3>
            <p className="text-gray-600 mb-4">
              Specialized hiring for software developers, engineers, and tech professionals with proven
              expertise in startup environments.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Technical Assessment
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Skill Matching
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Code Review
              </li>
            </ul>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-white"
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
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Startup Hiring Solutions</h3>
            <p className="text-gray-600 mb-4">
              End-to-end recruitment services designed specifically for early-stage and growing startups.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Culture Fit Assessment
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Scalable Hiring Plans
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Team Building
              </li>
            </ul>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-white"
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
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">Candidate Screening</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive screening process ensuring only the most qualified candidates reach your inbox.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Background Checks
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Technical Interviews
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-blue-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                Skill Verification
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>




  <section id="process" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Our Recruitment Process</h2>
          <p className="text-lg text-gray-600">A streamlined approach to connect talent with opportunity</p>
        </div>

        <div className="relative">
          {/* Process Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {/* Process Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center animate__animated animate__fadeInLeft">
              <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Profile Submission</h3>
                  <p className="text-gray-600">Candidates submit their resumes and complete their profiles with relevant experience and skills.</p>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                1
              </div>
              <div className="flex-1 md:pl-12 hidden md:block"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center animate__animated animate__fadeInRight">
              <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                2
              </div>
              <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                <div className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Initial Screening</h3>
                  <p className="text-gray-600">Our team reviews applications and conducts preliminary assessments of candidates' qualifications.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center animate__animated animate__fadeInLeft">
              <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Technical Assessment</h3>
                  <p className="text-gray-600">Selected candidates complete technical evaluations and coding challenges specific to their roles.</p>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                3
              </div>
              <div className="flex-1 md:pl-12 hidden md:block"></div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center animate__animated animate__fadeInRight">
              <div className="flex-1 md:text-right md:pr-12 hidden md:block"></div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                4
              </div>
              <div className="flex-1 md:pl-12 mb-4 md:mb-0">
                <div className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Interview Process</h3>
                  <p className="text-gray-600">Successful candidates proceed to technical and cultural fit interviews with potential employers.</p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex flex-col md:flex-row items-center animate__animated animate__fadeInLeft">
              <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                <div className="bg-neutral-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Offer & Placement</h3>
                  <p className="text-gray-600">Final selection, offer negotiation, and successful placement with the client company.</p>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                5
              </div>
              <div className="flex-1 md:pl-12 hidden md:block"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="#candidateportal"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite"
          >
            Start Your Journey
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>






  <section id="contact" class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold text-neutral-900 mb-4">Get In Touch</h2>
        <p class="text-lg text-gray-600">Have questions? We're here to help with your recruitment needs</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="bg-neutral-50 p-8 rounded-xl shadow-lg animate__animated animate__fadeInLeft">
          <h3 class="text-2xl font-bold text-neutral-900 mb-6">Contact Information</h3>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium text-neutral-900">Phone</h4>
                <p class="mt-1 text-gray-600">+1 (555) 123-4567</p>
                <p class="text-gray-600">Mon-Fri 9am-6pm EST</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium text-neutral-900">Email</h4>
                <p class="mt-1 text-gray-600">info@wingconsultants.com</p>
                <p class="text-gray-600">24/7 Support</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-medium text-neutral-900">Location</h4>
                <p class="mt-1 text-gray-600">123 Tech Avenue</p>
                <p class="text-gray-600">Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </div>

        <div class="animate__animated animate__fadeInRight">
        <form className="space-y-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm font-medium text-gray-700">First Name*</label>
      <input
        type="text"
        required
        placeholder="Enter your first name"
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Last Name*</label>
      <input
        type="text"
        required
        placeholder="Enter your last name"
        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">Email Address*</label>
    <input
      type="email"
      required
      placeholder="Enter your email"
      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">Subject*</label>
    <select
      required
      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Select a subject</option>
      <option value="hiring">Hiring Inquiry</option>
      <option value="job">Job Application</option>
      <option value="partnership">Partnership</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700">Message*</label>
    <textarea
      rows="4"
      required
      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 animate__animated animate__pulse animate__infinite"
  >
    Send Message
  </button>
</form>



        </div>
      </div>
    </div>
</section>






<Testimonial/>


<footer id="footer" className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Wing Consultants</h3>
            <p className="text-gray-400">
              Connecting top tech talent with innovative startups and companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#joblistings" className="text-gray-400 hover:text-white transition-colors">
                  Job Listings
                </a>
              </li>
              <li>
                <a href="#candidateportal" className="text-gray-400 hover:text-white transition-colors">
                  Candidate Portal
                </a>
              </li>
              <li>
                <a href="#employerzone" className="text-gray-400 hover:text-white transition-colors">
                  Employer Zone
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with latest opportunities</p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Wing Consultants. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>


    </div>
  );
}
