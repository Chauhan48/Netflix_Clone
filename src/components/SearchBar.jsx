import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center mt-20">
      <form className="flex bg-[#141414] rounded-full px-4 py-2 w-full max-w-xl shadow-lg">
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="
            flex-grow 
            bg-transparent 
            outline-none 
            text-white 
            placeholder-gray-400 
            px-4 
            py-3 
            text-lg
          "
        />
        <button
          type="submit"
          className="
            bg-red-600 
            hover:bg-red-700 
            text-white 
            rounded-full 
            px-6 
            py-3 
            font-semibold 
            transition-colors 
            duration-200
            ml-2
          "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
