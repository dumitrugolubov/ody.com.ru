import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="w-10 h-10" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Odyssey Exchange
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;