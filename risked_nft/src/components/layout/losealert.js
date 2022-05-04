import React, { Fragment } from 'react'
import { Modal } from 'react-bootstrap'

const RESOURCE_URL = 'resources/images/'

const LoseAlert = ({modalShow, handleClose}) => {
    return (
        <Fragment>
            <Modal show={modalShow} onHide={handleClose} centered>
                <Modal.Body>
                    <div className='modal-close-button' onClick={handleClose}></div>
                    <div className='winner-section'>
                        <div>You lose!</div>
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
                        <div className='lose-action-area'>
                            <div className='lose-report-btn'>
                                Report
                            </div>
                            <div className='okay-btn'>
                                OK
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default LoseAlert