import React, { useState } from "react";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const DiscountProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Discount Products </h1>
      <div className="w-full p-4 bg-white rounded-md">
        <Search
          setItemsPerPage={setItemsPerPage}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-sm text-left app-dark-text">
            <thead className="text-sm app-dark-text uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Image
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Category
                </th>
                <th scope="col" className="py-3 px-4">
                  Brand
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Discount
                </th>
                <th scope="col" className="py-3 px-4">
                  Stock
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    {d}
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <img
                      className="w-[45px] h-[45px]"
                      src={`http://localhost:3000/images/category/${d}.jpg`}
                      alt=""
                    />
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    Men Full Sleeve
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    Tshirt
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    Veirdo{" "}
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    $232
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    10%
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    20
                  </td>

                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link className="p-[6px] bg-cyan-300 rounded hover:shadow-lg hover:shadow-cyan-500/50">
                        {" "}
                        <FaEdit />{" "}
                      </Link>
                      <Link className="p-[6px] bg-green-300 rounded hover:shadow-lg hover:shadow-green-500/50">
                        {" "}
                        <FaEye />{" "}
                      </Link>
                      <Link className="p-[6px] bg-fuchsia-300 rounded hover:shadow-lg hover:shadow-fuchsia-500/50">
                        {" "}
                        <FaTrash />{" "}
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItems={50}
            itemsPerPage={itemsPerPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};
export default DiscountProducts;
