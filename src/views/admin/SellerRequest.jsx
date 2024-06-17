import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { FaEye } from "react-icons/fa";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

export default function SellerRequest() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[20px] font-bold mb-3">Seller Request </h1>

      <div className="w-full p-4 bg-white rounded-md">
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

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#0c1b38]">
            <thead className="text-sm text-[#0c1b38] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>

                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Email
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr className="border-b border-slate-700" key={i}>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    {d}
                  </td>

                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    Mo Tuswit{" "}
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    motuswit@gmail.com
                  </td>
                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <span>Pending</span>{" "}
                  </td>

                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <span>Inactive</span>{" "}
                  </td>

                  <td className="py-2 px-4 font-medium whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <Link
                        to={`${ROUTE_CONSTANTS.SELLERS}/details/2`}
                        className="p-[6px] bg-cyan-300 rounded hover:shadow-lg hover:shadow-cyan-500/50 "
                      >
                        {" "}
                        <FaEye />{" "}
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
}
