import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage,setCurrentPage,Posts,nextPage,previousPage }) => {
  const PageNumbers = [];
   
  const int = Math.ceil(totalPosts / postsPerPage)
    if (int === 1 ) 
        return null 
     for (let i = 1; i<= int; i++) {
        PageNumbers.push(i) 
    }
    
   
    return (
        <nav>
          <h4 className='d-flex flex-column align-items-center justify-content-center '>{currentPage}</h4>
            <ul className="pagination">
                <li className="page-item " >
                    <a onClick={() => previousPage()} href="!#"
                    className={currentPage === 1 ? "page-link disabled" : "page-link"}
                    disabled={currentPage === 1}>
                        Previous
                    </a>
                </li>
                {PageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li className='page-item'>
                    <a onClick={() => nextPage()} href="!#"
                      className={currentPage === PageNumbers.length ? "page-link disabled" : "page-link"}
                      disabled={currentPage === PageNumbers.length}>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
  )
};

export default Pagination;