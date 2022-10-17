import { useState } from "react";

function usePagination<T extends Object>(array: T[], pageLimit: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(array.length / pageLimit);

  const pages = Array.from({ length: pageCount }, (v, i) =>
    array.slice(i * pageLimit, i * pageLimit + pageLimit)
  );

  const getCurrentRecords = () => pages[currentPage - 1];

  return { pageCount, getCurrentRecords, setCurrentPage };
}

export default usePagination;
