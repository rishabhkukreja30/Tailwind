import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Search"
        className="py-2 px-4 w-full rounded-full focus:outline-none focus:shadow-outline border border-gray-300"
      />
      <button className="absolute right-0 top-0 h-full px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 8a7 7 0 0 0-14 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
