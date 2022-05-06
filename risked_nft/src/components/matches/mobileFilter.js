import React, { Fragment } from "react";

import IMG_SORT from "../../assets/images/icons/sort.svg";

const MobileFilter = ({ onHandleFilter }) => {

    const handleFilter = () => {
        onHandleFilter(true);
    };

    return (
        <Fragment>
            <div className="mobile-filter-wrapper">
                <div className="mobile-spec-filter">
                    <div className="filter-btn" onClick={handleFilter}>
                        Filter
                    </div>
                    <div className="mobile-sort-result">
                        <span>Sort By</span>
                        <img src={IMG_SORT} alt="sort" className="mx-3" />
                        <span>Entrance fee</span>
                    </div>
                </div>
                <div className="mobile-hr-line"></div>
                <div className="random-select mt-4">
                    <button>Random match</button>
                </div>
            </div>
        </Fragment>
    );
};

export default MobileFilter;