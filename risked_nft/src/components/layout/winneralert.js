import React, { Fragment } from 'react'
import { Modal } from 'react-bootstrap'

const RESOURCE_URL = 'resources/images/'

const WinnerAlert = ({modalShow, handleClose}) => {
    return (
        <Fragment>
            <Modal show={modalShow} onHide={handleClose} centered>
                <Modal.Body>
                    <div className='modal-close-button' onClick={handleClose}></div>
                    <div className='winner-section'>
                        <div>You winner!</div>
                        <div>The winner of the match was the team of</div>
                        <div>
                            <img src={RESOURCE_URL + 'teams/team01.png'} alt='winner-team' />
                            <span>SWAT</span>
                        </div>
                        <div className='winner-detail-bg'>
                            <div>
                                <span>de_dust2</span>
                                <span>$RNFT 2,023</span>
                            </div>
                            <div>
                                <span>06:00 PM, 23 FEB</span>
                                <span>Match prize</span>
                            </div>
                        </div>
                        <div>Congratulation! You received&nbsp;<span>$RNFT 50!</span></div>
                        <div className='btn-kycverify'>
                            Claim the prize
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default WinnerAlert