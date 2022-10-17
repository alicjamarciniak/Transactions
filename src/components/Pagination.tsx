import styled from "styled-components";
import usePagination from "../hooks/usePagination";

type PaginationProps<T> = {
  array: T[];
  pageLimit: number;
  setRecordsCallback?: any;
  className?: string;
};

function Pagination<T extends Object>({
  array,
  pageLimit,
  setRecordsCallback,
  className,
}: PaginationProps<T>) {
  const { pageCount, getCurrentRecords, setCurrentPage } = usePagination(
    array,
    pageLimit
  );

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // setRecordsCallback(getCurrentRecords());
  };

  return (
    <Component className={`pagination ${className}`}>
      {[...Array(pageCount)].map((v, i) => (
        <PageIndex
          key={`page-index-${i}`}
          onClick={() => {
            handleClick(i + 1);
          }}
        >
          {i + 1}
        </PageIndex>
      ))}
    </Component>
  );
}

const Component = styled.div`
  display: flex;
  justify-content: center;
`;

const PageIndex = styled.button`
  background-color: rgb(220, 223, 227);
  height: 30px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    box-shadow: inset -1px 3px 10px -3px rgba(92, 92, 92, 1);
  }

  &:focus {
    background-color: rgba(92, 92, 92, 0.7);
    color: rgb(255, 255, 255);
  }

  &:first-child {
    border-radius: 5px 0 0 5px;
    width: 60px;
    padding-left: 20px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    width: 60px;
    padding-right: 20px;
  }
`;

export default Pagination;
