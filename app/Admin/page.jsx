 "use client"
//  import React, { useEffect, useState } from 'react';
//  import { FaBriefcase, FaUserAlt, FaPlusCircle, FaUsers } from 'react-icons/fa';
 
//  const Dashboard = () => {
//    const [companiesCount, setCompaniesCount] = useState(0);
//    const [candidatesCount, setCandidatesCount] = useState(0);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState('');
 
//    useEffect(() => {
//      const fetchDashboardData = async () => {
//        try {
//          const [companiesRes, candidatesRes] = await Promise.all([
//            fetch('http://localhost:5000/api/employer'),
//            fetch('http://localhost:5000/api/candidate/candidates'),
//          ]);
//          const companiesData = await companiesRes.json();
//          const candidatesData = await candidatesRes.json();
 
//          setCompaniesCount(companiesData.length);
//          setCandidatesCount(candidatesData.candidates.length);
//          setLoading(false);
//        } catch (err) {
//          setError('Failed to fetch dashboard data. Please try again.');
//          setLoading(false);
//        }
//      };
 
//      fetchDashboardData();
//    }, []);
 
//    if (loading) {
//      return (
//        <div className="flex justify-center items-center h-screen text-lg">
//          Loading Dashboard...
//        </div>
//      );
//    }
 
//    if (error) {
//      return (
//        <div className="flex justify-center items-center h-screen text-lg text-red-500">
//          {error}
//        </div>
//      );
//    }
 
//    return (
//      <div className="bg-gray-50 min-h-screen p-8">
//        {/* Header */}
//        <h1 className="text-5xl font-bold text-center text-yellow-600 mb-12">Dashboard</h1>
 
//        {/* Stats Cards */}
//        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//          {/* Total Companies Card */}
//          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//            <FaBriefcase className="text-6xl text-yellow-600 mx-auto" />
//            <h2 className="text-2xl font-semibold text-neutral-900 mt-4">Total Companies</h2>
//            <p className="text-4xl font-bold text-yellow-600 mt-4">{companiesCount}</p>
//          </div>
 
//          {/* Total Candidates Card */}
//          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//            <FaUserAlt className="text-6xl text-yellow-600 mx-auto" />
//            <h2 className="text-2xl font-semibold text-neutral-900 mt-4">Total Candidates</h2>
//            <p className="text-4xl font-bold text-yellow-600 mt-4">{candidatesCount}</p>
//          </div>
 
//          {/* Actions Card */}
//          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Actions</h2>
//            <div className="flex justify-around mt-4">
//              <button className="bg-yellow-600 text-white p-4 rounded-full flex items-center justify-center space-x-2 hover:bg-yellow-700 transition">
//                <FaPlusCircle className="text-2xl" />
//                <span>Add Job</span>
//              </button>
//              <button className="bg-yellow-600 text-white p-4 rounded-full flex items-center justify-center space-x-2 hover:bg-yellow-700 transition">
//                <FaUsers className="text-2xl" />
//                <span>View Candidates</span>
//              </button>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
//  };
 
//  export default Dashboard;
 
 









// import React from 'react';
// import { FaBriefcase, FaUserAlt, FaPlusCircle, FaClipboardList, FaEye, FaUsers } from 'react-icons/fa';

// const Dashboard = () => {
//   return (
//     <div className=" min-h-screen p-10">
//       {/* Header */}
//       <h1 className="text-6xl font-bold text-center text-yellow-600 mb-12">Wing Consultants Dashboard</h1>

//       {/* Actions Card */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
//         {/* Add Job Card */}
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
//           <FaPlusCircle className="text-6xl text-teal-600 mx-auto" />
//           <h2 className="text-2xl font-semibold text-neutral-900 mt-4">Add Job</h2>
//           <p className="text-lg text-gray-600 mt-4">Create a new job listing</p>
//           <button className="bg-teal-600 text-white p-4 rounded-full mt-4 hover:bg-teal-700 transition duration-300">
//             <FaBriefcase className="m-2" />
        
//           </button>
//         </div>

//         {/* View Jobs Card */}
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
//           <FaClipboardList className="text-6xl text-teal-600 mx-auto" />
//           <p className="text-lg text-gray-600 mt-4">Check the list of all posted jobs</p>
//           <button className="bg-teal-600 text-white p-4 rounded-full mt-4 hover:bg-teal-700 transition duration-300">
//             <FaEye className="m-2" />
//           </button>
//         </div>

//         {/* View Applications Card */}
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
//           <FaUsers className="text-6xl text-teal-600 mx-auto" />
//           <p className="text-lg text-gray-600 mt-4">View all job applications</p>
//           <button className="bg-teal-600 text-white p-4 rounded-full mt-4 hover:bg-teal-700 transition duration-300">
//             <FaClipboardList className="m-2" />
//           </button>
//         </div>

//         {/* View Candidates Card */}
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
//           <FaUserAlt className="text-6xl text-teal-600 mx-auto" />
//           <p className="text-lg text-gray-600 mt-4">View all registered candidates</p>
//           <button className="bg-teal-600 text-white p-4 rounded-full mt-4 hover:bg-teal-700 transition duration-300">
//             <FaUsers className="m-2" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;














import { FaPlusCircle, FaClipboardList, FaUsers, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="min-h-screen p-10" suppressHydrationWarning>
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-neutral-800 mb-12">Wing Consultants</h1>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {/* Add Job Card */}
        <Link href="/Admin/addjob">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaPlusCircle className="text-4xl text-yellow-600 mx-auto" />
            <p className="text-neutral-200 mt-3">Add Job</p>
          </div>
        </Link>

        {/* View Jobs Card */}
        <Link href="/Admin/jobs">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaClipboardList className="text-4xl text-yellow-600 mx-auto" />
            <p className="text-neutral-200 mt-3">View Jobs</p>
          </div>
        </Link>

        {/* View Applications Card */}
        <Link href="/Admin/candidates">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaUsers className="text-4xl text-yellow-600 mx-auto" />
            <p className="text-neutral-200 mt-3">View Applications</p>
          </div>
        </Link>

        {/* View Candidates Card */}
        <Link href="/Admin/candidates">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
            <FaUserAlt className="text-4xl text-yellow-600 mx-auto" />
            <p className="text-neutral-200 mt-3">All Candidates</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

