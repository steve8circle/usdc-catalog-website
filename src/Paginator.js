import React from "react";
import { usePagination, DOTS } from "./usePagination";

export default ({totalSize, pageSize, siblingPages, currentPage, onPageChange}) => {
  const paginationRange = usePagination({ totalSize, pageSize,  siblingPages, currentPage});

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const totalPages = Math.ceil(totalSize / pageSize);
  const onNext = () => onPageChange(currentPage + 1 > totalPages ? totalPages :  currentPage + 1);
  const onPrevious = () => onPageChange(currentPage === 1 ? 1 : currentPage -1);

  return (
    <ul class="inline-flex rounded-md shadow-sm -space-x-px hover:cursor-pointer">
      <li onClick={onPrevious}
        class="p-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </li>
      <li>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <span class="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              {" "}...{" "}
            </span>
          );
        }
        if (currentPage === index + 1) {
          return (
            <li class="px-4 py-2 border border-gray-300 bg-white text-sm font-extrabold text-gray-500 hover:bg-gray-50">
              {pageNumber}
            </li>
          )
        }

        return (
          <li onClick={() => onPageChange(pageNumber)}
            class="px-4 py-2  border border-gray-300 bg-white text-sm font-normal text-gray-500 hover:bg-gray-50">
            {pageNumber}
          </li>
        );
      })}
      <li onClick={onNext}
        class="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </li>
    </ul>
  );
};
