import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-semibold text-xl text-emerald-600">
              Purejoy
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-700 hover:bg-emerald-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-emerald-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-emerald-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-emerald-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Community
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-emerald-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
            </div>
          </div>
          {/* Mobile menu button (optional, can add later) */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
