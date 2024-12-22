// import React from 'react';

const Navbar = () => {
  return (
    <nav className="top-0 w-full bg-white shadow-md z-50">
      <div className=" container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16 ">
          {/* <img src="/logo.png" style={{height:"60px",width:"80px"}}/> */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-violet-800">
              Blogify
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex space-x-6">
            <a
              href="/"
              className="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              About
            </a>
            {/* <div className="relative group">
              <button
                className="text-gray-800 hover:text-gray-600 font-medium transition focus:outline-none"
              >
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 3
                </a>
              </div>
            </div> */}
            <a
              href="/create"
              className="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              Add Blog
            </a>
            {/* <a
              href="#"
              className="text-gray-800 hover:text-gray-600 font-medium transition"
            >
              Contact
            </a> */}
          </div>

          
          {/* <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500 transition"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md shadow-md hover:bg-blue-50 transition"
            >
              Sign Up
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
