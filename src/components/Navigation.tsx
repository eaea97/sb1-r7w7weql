import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Swords, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/', label: '홈', icon: <Home className="h-5 w-5" /> },
    { path: '/ranking', label: '랭킹', icon: <Trophy className="h-5 w-5" /> },
    { path: '/battle', label: '배틀', icon: <Swords className="h-5 w-5" /> },
    { path: '/description', label: '설명', icon: <FileText className="h-5 w-5" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-2">
      <div className="container mx-auto flex justify-around items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-primary-600 bg-primary-50 font-medium'
                  : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
              }`
            }
          >
            {item.icon}
            <span className="mt-1 text-sm">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;