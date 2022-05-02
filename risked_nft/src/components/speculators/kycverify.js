import React, { Fragment } from "react";

import { Modal } from "react-bootstrap";

const KycVerify = ({ modalShow, handleClose }) => {
  return (
    <Fragment>
      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Body>
          <div className="modal-close-button" onClick={handleClose}></div>
          <div className="kycverify-section">
            <div>KYC</div>
            <div>To place a bet, you need to pass a small verification</div>
            <div className="btn-kycverify">Verify identity</div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default KycVerify;
