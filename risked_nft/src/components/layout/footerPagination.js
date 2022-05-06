import React, {Fragment} from 'react'
import ReactPaginate from "react-paginate";

const FooterPagination = () => {
  const handlePageClick = () => {};

    return (
        <Fragment>
            <div className="profile-table-pagenation">
                <div className="mobile-next-btn">Next page</div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={100}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </Fragment>
    )
}

export default FooterPagination