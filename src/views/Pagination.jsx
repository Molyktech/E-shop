import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function Pagination({
  pageNumber,
  setPageNumber,
  totalItems,
  itemsPerPage,
  showItem,
}) {
  let totalPages = Math.ceil(totalItems / itemsPerPage);
  let startPage = pageNumber;
  let diff = totalPages - pageNumber;

  if (diff <= showItem) {
    startPage = totalPages - showItem;
  }
  let endPage = startPage < 0 ? showItem : startPage + showItem;

  if (startPage <= 0) {
    startPage = 1;
  }
  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          onClick={() => setPageNumber(i)}
          className={` ${
            pageNumber === i
              ? "bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white"
              : "bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#d0d2d6]"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer `}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000] cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPages && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000] cursor-pointer"
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
}
