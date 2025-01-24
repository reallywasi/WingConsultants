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
//         className="bg-yellow-500 text-white py-2 px-4 rounded mt-4 hover:bg-yellow-600"
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
  <h1 className="text-4xl font-extrabold text-gray-900 text-center underline decoration-yellow-500 decoration-4 underline-offset-4 mx-auto">
  {jobDetails.position}
</h1>



  {/* Back to Jobs Button */}
  <button
    onClick={() => router.push("/jobs")}
    className="bg-yellow-600 text-white py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out"
  >
    <span className="font-semibold text-lg">Back to Jobs</span>
  </button>
</div>

  {/* Grid layout for 40:60 split */}
  <div className="grid grid-cols-5 gap-6">

    {/* Left section (Job Details) - 40% width */}
    <div className="col-span-2 bg-gradient-to-br from-gray-50 to-gray-200 p-6 rounded-xl shadow-2xl border-4 border-gray-300 max-h-[80vh] overflow-auto">
  <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-yellow-500 inline-block pb-1">Job Details</h2>

  <div className="mb-1 border-b border-gray-300 pb-3">
    <p className="text-lg font-semibold text-yellow-700 mb-0.5">Company:</p>
    <p className="text-base text-gray-800 bg-gray-100 p-2 rounded-md">{jobDetails.companyName}</p>
  </div>

  <div className="mb-1 border-b border-gray-300 pb-3">
    <p className="text-lg font-semibold text-yellow-700 mb-0.5">Contact:</p>
    <p className="text-base text-gray-800 bg-gray-100 p-2 rounded-md">{jobDetails.contactPerson}</p>
  </div>

  <div className="mb-1 border-b border-gray-300 pb-3">
    <p className="text-lg font-semibold text-yellow-700 mb-0.5">Business Email:</p>
    <p className="text-base text-gray-800 bg-gray-100 p-2 rounded-md">{jobDetails.businessEmail}</p>
  </div>

  <div className="mb-1 border-b border-gray-300 pb-3">
    <p className="text-lg font-semibold text-yellow-700 mb-0.5">Budget Range:</p>
    <p className="text-base text-gray-800 bg-gray-100 p-2 rounded-md">{jobDetails.budgetRange}</p>
  </div>

  <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-yellow-500 inline-block pb-1">Skills & Description</h2>

  <div className="mb-1 border-b border-gray-300 pb-3">
    <p className="text-lg font-semibold text-yellow-700 mb-0.5">Required Skills:</p>
    <p className="text-base text-gray-800 bg-gray-100 p-2 rounded-md">{jobDetails.requiredSkills}</p>
  </div>

  <div className="mb-1 border-b border-gray-300 pb-3">
    <p className="text-lg font-semibold text-yellow-700 mb-1">Job Type:</p>
    <p className="text-base text-gray-800 bg-gray-100 p-2 rounded-md">{jobDetails.jobType}</p>
  </div>

  <div className="mb-1">
    <p className="text-lg font-semibold text-yellow-700 mb-1">Job Description:</p>
    <p className="text-sm text-gray-800 bg-gray-100 p-3 rounded-md shadow-inner border border-gray-300">
      {jobDetails.jobDescription}
    </p>
  </div>
</div>






    {/* Right section (Candidate Form) - 60% width */}
    <div className="col-span-3 bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-h-[700px] overflow-y-auto relative">
     

    {/* <h2 className="text-3xl font-bold text-gray-800 mb-6">Candidate Form</h2>    */}
       <CandidateForm jobId={id} />

    </div>
  </div>
</div>

  


  );
};

export default JobDetails;
