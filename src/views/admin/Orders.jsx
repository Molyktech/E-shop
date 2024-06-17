import React, { useState } from "react";
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { ROUTE_CONSTANTS } from "../../utils/constants/routesConstants";

export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showTableDropDown, setShowTableDropDown] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
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
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left">
            <div className="text-sm text-[#0c1b38] uppercase border-b border-slate-700">
              <div className=" flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action </div>
                <div className="py-3 w-[8%] font-bold">
                  <LuArrowDownSquare />
                </div>
              </div>
            </div>

            <div className="text-[#0c1b38] ">
              <div className=" flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$654</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link to={`${ROUTE_CONSTANTS.ORDERS}/details/1`}>View</Link>
                </div>
                <div
                  onClick={(e) => setShowTableDropDown(!showTableDropDown)}
                  className="py-3 w-[8%] font-medium"
                >
                  <LuArrowDownSquare />
                </div>
              </div>

              <div
                className={
                  showTableDropDown
                    ? "block border-b border-slate-700 bg-[#8288ed]"
                    : "hidden"
                }
              >
                <div className=" flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #3434
                  </div>
                  <div className="py-3 w-[13%] font-medium">$56</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>

                <div className=" flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #3434
                  </div>
                  <div className="py-3 w-[13%] font-medium">$56</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>
              </div>
            </div>

            <div className="text-[#d0d2d6] ">
              <div className=" flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$654</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link to={`${ROUTE_CONSTANTS.ORDERS}/details/2`}>View</Link>
                </div>
                <div
                  onClick={(e) => setShowTableDropDown(!showTableDropDown)}
                  className="py-3 w-[8%] font-medium"
                >
                  <LuArrowDownSquare />
                </div>
              </div>

              <div
                className={
                  showTableDropDown
                    ? "block border-b border-slate-700 bg-[#8288ed]"
                    : "hidden"
                }
              >
                <div className=" flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #3434
                  </div>
                  <div className="py-3 w-[13%] font-medium">$56</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>

                <div className=" flex justify-start items-start border-b border-slate-700">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                    #3434
                  </div>
                  <div className="py-3 w-[13%] font-medium">$56</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>
              </div>
            </div>
          </div>
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
