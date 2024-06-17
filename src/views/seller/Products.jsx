import React, { useState } from "react";
import Search from "../components/Search";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">All Products </h1>
      <div className="w-full p-4 bg-white rounded-md">
        <Search setItemsPerPage={setItemsPerPage} />
      </div>
    </div>
  );
};
export default Products;
