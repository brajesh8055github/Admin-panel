import { FiHome, FiBox, FiUsers, FiBarChart2, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Mobile Menu Button */}
      <button
        className="absolute top-4 left-4 p-2 bg-gray-800 text-white rounded-md md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 z-40`}
      >
        <h2 className="text-2xl font-bold p-4 text-center border-b border-gray-700">
          Admin Panel
        </h2>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
              <FiHome className="inline mr-2" /> Dashboard
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
              <FiBox className="inline mr-2" /> Products
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
              <FiUsers className="inline mr-2" /> Users
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 flex items-center">
              <FiBarChart2 className="inline mr-2" /> Analytics
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      {/* <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold">Welcome to the Admin Panel</h1>
        <p>Manage your dashboard, products, users, and analytics here.</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
