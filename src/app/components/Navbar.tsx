const Navbar = () => {
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

      <div className="flex items-center space-x-1 sm:space-x-6">
        <a
          href="#"
          className="text-[10px] text-gray-600 hover:text-blue-900 sm:text-base"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[10px] text-gray-600 hover:text-blue-900 sm:text-base"
        >
          Rent
        </a>
        <a
          href="#"
          className="text-[10px] text-gray-600 hover:text-blue-900 sm:text-base"
        >
          Contact
        </a>
      </div>

      <div className="flex space-x-1">
        <button className="px-1 py-0.5 text-[10px] text-blue-900 hover:text-blue-700 sm:px-4 sm:py-2 sm:text-base">
          Log-in
        </button>
        <button className="rounded bg-blue-900 px-2 py-1 text-[10px] text-white hover:border-2 hover:border-blue-900 hover:bg-white hover:text-blue-900 sm:px-5 sm:py-2 sm:text-base">
          Sign-Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
