import React, { Fragment } from 'react'

import { Modal } from 'react-bootstrap'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Signup from './signup'
import Signin from './signin'

import { signinModalSet, signupModalSet } from '../../actions/auth'

const AuthContainer = ({showSigninModal, showSignupModal}) => {
    console.log(showSigninModal)
    const modalShow = (showSigninModal || showSignupModal)

    const handleClose = () => {
        if(showSigninModal) {
            signinModalSet(false)
        }
        if(showSignupModal) {
            signupModalSet(false)
        }
    }

    return (
        <Fragment>
            <Modal show={modalShow} onHide={handleClose} centered>
            {
                showSigninModal ? 
                    <Signin />
                :
                    <Fragment></Fragment>
            }
            {
                showSignupModal ?
                    <Signup />
                :
                    <Fragment></Fragment>
            }
            </Modal>
        </Fragment>
    )
}

AuthContainer.propTypes = {
    showSigninModal: PropTypes.bool,
    showSignupModal: PropTypes.bool
}

const mapStateToProps = state => ({
    showSigninModal: state.auth.showSigninModal,
    showSignupModal: state.auth.showSignupModal
})

export default connect(mapStateToProps)(AuthContainer)