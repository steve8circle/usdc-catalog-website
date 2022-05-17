import { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx)

export const usePagination = ({ totalSize, pageSize, siblingPages = 1, currentPage}) => {
  return useMemo(() => {
    let totalPages = Math.ceil(totalSize / pageSize);

    // return all numbers when no dots needed 
    if (totalPages <= siblingPages + 5) {
      return range(1, totalPages);
    }

    let leftSiblingIndex = Math.max(currentPage - siblingPages, 1);
    let rightSiblingIndex = Math.min(currentPage + siblingPages, totalPages);

    let showLeftDots = leftSiblingIndex > 2;
    let showRightDots = rightSiblingIndex < totalPages - 2;

    if (!showLeftDots && showRightDots) {
      let leftItemCount = 3 + 2 * siblingPages;
      return [...range(1, leftItemCount), DOTS, totalPages];
    }

    if (showLeftDots && !showRightDots) {
      let rightItemCount = 3 + 2 * siblingPages;
      return [1, DOTS, ...range(totalPages - rightItemCount + 1, totalPages)];
    }

    if (showLeftDots && showRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, DOTS, ...middleRange, DOTS, totalPages];
    }
  }, [totalSize, pageSize, siblingPages, currentPage]);
};
