import React, { useRef, useState } from 'react';

function Pagination({previousPage,nextPage, canNextPage, canPreviousPage, pageOptions, pageIndex, pageSize, setPageSize}) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  const paginationRef = useRef(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  const goToPage = (page) => {
    console.log(page)
    if (page >= 1 && page <= totalPages) {
      handlePageChange(page);
    }
  };

  const goToPrevPage = () => {
    previousPage()
    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    nextPage();
    goToPage(currentPage + 1);
  };


  return (
    <div className="pagination_container">
      <span className="show_text">Show</span>
      <div>
        <select name="no_results" value={pageSize} onChange={(e)=>{setPageSize(Number(e.target.value))}}>
          {[5,10,13]
            .map((value, index) => {
              return <option key={value} value={value}>{value}</option>;
            })}
        </select>
      </div>
      <div className="pagination" ref={paginationRef}>
        <button className="pagination-btn" onClick={()=>{goToPrevPage()}} disabled={!canPreviousPage}>
          &lt;
        </button>
        {(pageOptions).map((page) => (
          <button
            key={page}
            className={`pagination-btn ${currentPage === (page+ 1) ? 'active' : ''}`}
            onClick={() => goToPage(page + 1)}
          >
            {page + 1}
          </button>
        ))}
        <button className="pagination-btn" onClick={()=>{goToNextPage()}} disabled={!canNextPage}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
