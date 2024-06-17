import React from "react";

const Search = ({ setItemsPerPage }) => {
  return (
    <div className="flex justify-between items-center">
      <select
        onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
        className="px-4 py-2 focus:border-indigo-900 outline-none bg-[#8A30E2] border border-[#8A30E2] rounded-md text-[#d0d2d6]"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <input
        className="px-4 py-2 focus:border-indigo-500 outline-none bg-white border border-[#8A30E2] rounded-md text-[#d0d2d6]"
        type="text"
        placeholder="search"
      />
    </div>
  );
};
export default Search;
