import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black p-4 border-b sticky top-0 z-50">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">My Blog</h1>
      </div>
    </header>
  );
};

export default Header;
