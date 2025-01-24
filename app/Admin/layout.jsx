// // components/Layout.jsx
// import { FaHome, FaTachometerAlt, FaUserFriends, FaPlusCircle, FaCog } from 'react-icons/fa';

// const Layout = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-neutral-900 text-yellow-500 p-6 shadow-lg">
//         <ul>
//           <li className="mb-6 flex items-center text-lg">
//             <FaHome className="mr-4 text-xl" />
//             <a href="/" className="hover:text-gray-300">Homepage</a>
//           </li>
//           <li className="mb-6 flex items-center text-lg">
//             <FaTachometerAlt className="mr-4 text-xl" />
//             <a href="/" className="hover:text-gray-300">Dashboard</a>
//           </li>
//           <li className="mb-6 flex items-center text-lg">
//             <FaUserFriends className="mr-4 text-xl" />
//             <a href="/candidates" className="hover:text-gray-300">Candidates</a>
//           </li>
//           <li className="mb-6 flex items-center text-lg">
//             <FaPlusCircle className="mr-4 text-xl" />
//             <a href="/addjob" className="hover:text-gray-300">+ Job</a>
//           </li>
//           <li className="mb-6 flex items-center text-lg">
//             <FaCog className="mr-4 text-xl" />
//             <a href="/settings" className="hover:text-gray-300">Settings</a>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1  bg-white h-screen overflow-hidden">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;









import { FaHome, FaTachometerAlt, FaUserFriends, FaPlusCircle, FaCog } from 'react-icons/fa';
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-neutral-900 text-yellow-500 p-6 shadow-2xl rounded-l-lg border-r-2 border-yellow-500">
        <ul>
          {/* Homepage Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaHome className="mr-4 text-2xl text-yellow-300" />
            <a href="/" className="font-semibold">Homepage</a>
          </li>
          {/* Dashboard Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaTachometerAlt className="mr-4 text-2xl text-yellow-300" />
            <Link href="/Admin" className="font-semibold">Dashboard</Link>
          </li>
          {/* Candidates Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaTachometerAlt className="mr-4 text-2xl text-yellow-300" />
            <Link href="/Admin/jobs" className="font-semibold">All Jobs</Link>
          </li>

          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaUserFriends className="mr-4 text-2xl text-yellow-300" />
            <a href="/Admin/candidates" className="font-semibold">Candidates</a>
          </li>
          {/* Add Job Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaPlusCircle className="mr-4 text-2xl text-yellow-300" />
            <Link href="/Admin/addjob" className="font-semibold">+ Job</Link>
          </li>
          {/* Settings Link */}
          <li className="mb-8 flex items-center text-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white rounded-lg transition-all duration-200 p-3">
            <FaCog className="mr-4 text-2xl text-yellow-300" />
            <a href="/settings" className="font-semibold">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 h-screen overflow-auto p-8">
        {/* Main content box */}
        <div className="bg-white rounded-xl shadow-xl  overflow-auto border-2 border-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
