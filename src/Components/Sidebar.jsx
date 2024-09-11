import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CiImageOn } from "react-icons/ci";
import { FiUsers, FiCheckSquare, FiFileText } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';



export default function Sidebar() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  


  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const location = useLocation()

  const navItems = [
    { icon: FiUsers , label: 'Users', path: '/' },
    { icon: FiFileText, label: 'Posts',  path: '/posts' },
    { icon: FiCheckSquare, label: 'Todos',  path: '/todos' },
    { icon: CiImageOn, label: 'Albums',  path: '/albums' },
    { icon: IoSettingsOutline, label: 'Settings',  path: '/settings' },
  ];
  function isActive(routes){
    return location.pathname === routes 
  }

  
    return (
      <div className="flex bg-gray-100 ">
        {/* Sidebar */}
        <aside className={`bg-gray-800 text-white ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out`}>
          <div className="p-4 flex justify-between items-center">
            <h2 className={`font-bold ${sidebarOpen ? 'block' : 'hidden'}`}>Dashboard</h2>
            <button onClick={toggleSidebar}>
              {sidebarOpen ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
            </button>
          </div>
          <nav className="mt-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-6 py-3 hover:bg-gray-700 ${
                  isActive(item.path) ? 'bg-indigo-50 text-indigo-600 border-r-4 border-indigo-600' : 'text-gray-400'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3"/>
                <span className={`${sidebarOpen ? 'block' : 'hidden'}`}>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>
      </div>
    );
  
}

