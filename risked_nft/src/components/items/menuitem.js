import React, { Fragment } from "react";

const MenuItem = ({ ico, state, title, counts }) => {
  return (
    <Fragment>
      <div className="sidebar-menu-item">
        <div>
          <img src={ico} alt="leader-ico" className="mobile-menu-ico" />
          <span>{title}</span>
        </div>
        {counts > 0 ? (
          <div className="news-count-section">{counts}</div>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default MenuItem;
