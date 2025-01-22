// "use client"
// import { useEffect, useState } from "react";
// import { useRouter, useParams } from "next/navigation";

// const JobDetails = () => {
//   const router = useRouter(); 
//   const { id } = useParams(); // Get the job id from the URL
//   const [jobDetails, setJobDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch the job details from the API using the id
//     const fetchJobDetails = async () => {
//       try {
//         // const response = await fetch("http://localhost:5000/api/employer/6790910ff638b473132d0fa9");
//         const response = await fetch(`http://localhost:5000/api/employer/${id}`);
//         const data = await response.json();
//         if (response.ok) {
//           setJobDetails(data);
//         } else {
//           setError(data.message);
//         }
//       } catch (err) {
//         setError("Error fetching job details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobDetails();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!jobDetails) {
//     return <div>No job details available</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-bold mb-4">{jobDetails.position}</h1>
//       <div className="text-lg mb-4">
//         <span className="font-semibold">Company Name:</span> {jobDetails.companyName}
//       </div>
//       <div className="text-lg mb-4">
//         <span className="font-semibold">Contact Person:</span> {jobDetails.contactPerson}
//       </div>
//       <div className="text-lg mb-4">
//         <span className="font-semibold">Business Email:</span> {jobDetails.businessEmail}
//       </div>
//       <div className="text-lg mb-4">
//         <span className="font-semibold">Required Skills:</span> {jobDetails.requiredSkills}
//       </div>
//       <div className="text-lg mb-4">
//         <span className="font-semibold">Job Description:</span> <p>{jobDetails.jobDescription}</p>
//       </div>
//       <div className="text-lg mb-4">
//         <span className="font-semibold">Budget Range:</span> {jobDetails.budgetRange}
//       </div>
//       <div className="text-lg mb-4">
//         <span className="font-semibold">Job Type:</span> {jobDetails.jobType}
//       </div>
//       <button
//         onClick={() => router.push("/jobs")}
//         className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
//       >
//         Back to Jobs
//       </button>
//     </div>
//   );
// };

// export default JobDetails;




















"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import CandidateForm from "@/components/CandidateForm";
const JobDetails = () => {
  const router = useRouter();
  const { id } = useParams(); // Get the job id from the URL
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the job details from the API using the id
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/employer/${id}`);
        const data = await response.json();
        if (response.ok) {
          setJobDetails(data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Error fetching job details");
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-2xl text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-2xl text-red-500">Error: {error}</div>;
  }

  if (!jobDetails) {
    return <div className="text-center py-10 text-2xl text-gray-500">No job details available</div>;
  }

  return (

<div className="mx-auto p-8 bg-white rounded-lg shadow-2xl">

<div className="flex justify-between items-center mb-6">
  {/* Job Title - Centered */}
  <h1 className="text-4xl font-extrabold text-gray-900 mx-auto">{jobDetails.position}</h1>

  {/* Back to Jobs Button */}
  <button
    onClick={() => router.push("/jobs")}
    className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
  >
    <span className="font-semibold text-lg">Back to Jobs</span>
  </button>
</div>

  {/* Grid layout for 40:60 split */}
  <div className="grid grid-cols-5 gap-6">

    {/* Left section (Job Details) - 40% width */}
    <div className="col-span-2 bg-gray-50 p-8 rounded-lg shadow-2xl border-2 border-gray-300">
  <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Job Details</h2>

  <p className="text-lg mb-4">
    <span className="font-bold text-indigo-600">Company:</span> 
    <span className="text-gray-800 ml-2">{jobDetails.companyName}</span>
  </p>

  <p className="text-lg mb-4">
    <span className="font-bold text-indigo-600">Contact:</span> 
    <span className="text-gray-800 ml-2">{jobDetails.contactPerson}</span>
  </p>

  <p className="text-lg mb-4">
    <span className="font-bold text-indigo-600">Business Email:</span> 
    <span className="text-gray-800 ml-2">{jobDetails.businessEmail}</span>
  </p>

  <p className="text-lg mb-6">
    <span className="font-bold text-indigo-600">Budget Range:</span> 
    <span className="text-gray-800 ml-2">{jobDetails.budgetRange}</span>
  </p>

  <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Skills & Description</h2>

  <p className="text-lg mb-4">
    <span className="font-bold text-indigo-600">Required Skills:</span> 
    <span className="text-gray-800 ml-2">{jobDetails.requiredSkills}</span>
  </p>

  <p className="text-lg mb-4">
    <span className="font-bold text-indigo-600">Job Type:</span> 
    <span className="text-gray-800 ml-2">{jobDetails.jobType}</span>
  </p>

  <div className="text-lg mb-6">
    <span className="font-bold text-indigo-600">Job Description:</span>
    <p className="mt-2 text-gray-800 ml-2">{jobDetails.jobDescription}</p>
  </div>
</div>



    {/* Right section (Candidate Form) - 60% width */}
    <div className="col-span-3 bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-h-[700px] overflow-y-auto relative">
     

    <h2 className="text-3xl font-bold text-gray-800 mb-6">Candidate Form</h2>      <CandidateForm />
    </div>
  </div>
</div>

  


  );
};

export default JobDetails;
