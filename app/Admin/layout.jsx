// components/Layout.jsx
import { FaHome, FaTachometerAlt, FaUserFriends, FaPlusCircle, FaCog } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-neutral-900 text-yellow-200 p-6 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">Wing Consultants</h2>
        <ul>
          <li className="mb-6 flex items-center text-lg">
            <FaHome className="mr-4 text-xl" />
            <a href="/" className="hover:text-gray-300">Homepage</a>
          </li>
          <li className="mb-6 flex items-center text-lg">
            <FaTachometerAlt className="mr-4 text-xl" />
            <a href="/" className="hover:text-gray-300">Dashboard</a>
          </li>
          <li className="mb-6 flex items-center text-lg">
            <FaUserFriends className="mr-4 text-xl" />
            <a href="/candidates" className="hover:text-gray-300">Candidates</a>
          </li>
          <li className="mb-6 flex items-center text-lg">
            <FaPlusCircle className="mr-4 text-xl" />
            <a href="/addjob" className="hover:text-gray-300">+ Job</a>
          </li>
          <li className="mb-6 flex items-center text-lg">
            <FaCog className="mr-4 text-xl" />
            <a href="/settings" className="hover:text-gray-300">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1  bg-white h-screen overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Layout;
