import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          AI배틀!
        </h1>
      </div>
    </header>
  );
};

export default Header;