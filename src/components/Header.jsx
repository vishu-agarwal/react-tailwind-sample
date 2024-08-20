import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-2">
          <h1 className="text-xl font-bold">Indeed</h1>
          <nav className="max-md:hidden">
            <a href="#" className="px-4">
              Post a Job
            </a>
            <a href="#" className="px-4">
              Find CVs
            </a>
            <a href="#" className="px-4">
              Products
            </a>
            <a href="#" className="px-4">
              Resources
            </a>
          </nav>
        </div>
        <nav>
          <a href="#" className="px-4 max-md:hidden">
            Help Center
          </a>
          <a href="#" className="px-2 max-md:px-4">
            <button> Sign in</button>
          </a>
          <a href="#" className="px-4 max-md:hidden">
            Find Jobs
          </a>
        </nav>
        <button className="text-white md:hidden">☰</button>
      </div>
    </div>
  );
};

export default Header;
