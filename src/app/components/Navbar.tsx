import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState); // Toggle state based on previous state
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check resize on initial load

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex h-11 w-full items-center justify-between bg-white px-1 shadow-md md:h-16 md:px-4">
      <div className="flex flex-wrap items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="32"
          viewBox="0 -960 960 960"
          fill="#1e3a8a"
        >
          <path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z" />
        </svg>
        <p className="ml-1 text-xs font-bold text-blue-900 md:text-lg">
          Prime Rentals
        </p>
      </div>

      {/* Burger menu for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-11 z-50 w-full bg-white shadow-md md:hidden">
          {" "}
          {/* Added z-50 to ensure menu is above other elements */}
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="text-base text-gray-600 hover:text-blue-900">
              Home
            </a>
            <a href="#" className="text-base text-gray-600 hover:text-blue-900">
              Rent
            </a>
            <a href="#" className="text-base text-gray-600 hover:text-blue-900">
              Contact
            </a>
            <button className="px-4 py-2 text-base text-blue-900 hover:text-blue-700">
              Log-in
            </button>
            <button className="rounded bg-blue-900 px-5 py-2 text-base text-white hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900">
              Sign-Up
            </button>
          </div>
        </div>
      )}

      {/* Desktop menu */}
      <div className="hidden items-center space-x-6 md:flex">
        <a href="#" className="text-base text-gray-600 hover:text-blue-900">
          Home
        </a>
        <a href="#" className="text-base text-gray-600 hover:text-blue-900">
          Rent
        </a>
        <a href="#" className="text-base text-gray-600 hover:text-blue-900">
          Contact
        </a>
      </div>

      <div className="hidden space-x-1 md:flex">
        <button className="px-4 py-2 text-base text-blue-900 hover:text-blue-700">
          Log-in
        </button>
        <button className="rounded bg-blue-900 px-5 py-2 text-base text-white hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900">
          Sign-Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
