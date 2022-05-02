import React, { useState, Fragment } from 'react'
import AuthInput from '../inputs/authinput'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signinModalSet, signupModalSet } from '../../actions/auth'

import { Modal } from 'react-bootstrap'

import IMG_INPUT_USER from '../../assets/images/icons/user-input.svg'
import IMG_INPUT_PASS from '../../assets/images/icons/pass-input.svg'

import IMG_LOGIN_TWITCH from '../../assets/images/icons/fa-twitch-ico.svg'
import IMG_LOGIN_STEAM from '../../assets/images/icons/fa-steam-ico.svg'
import IMG_LOGIN_BATTLE from '../../assets/images/icons/fa-battle-ico.svg'
import IMG_LOGIN_FORTNITE from '../../assets/images/icons/fa-fortnite-ico.svg'

const Signin = ({ signinModalSet, signupModalSet, showSigninModal}) => {
    const [username, setUsername] = useState('')
    const [userpass, setUserpass] = useState('')

    const handleClose = () => {
        if(showSigninModal) {
            signinModalSet(false)
        }
    }

    const handleUsername = (value) => {
        setUsername(value)
    }

    const handleUserpass = (value) => {
        setUserpass(value)
    }

    const handleSignup = () => {
        signinModalSet(false)
        signupModalSet(true)
    }

    return (
        <Fragment>
            <Modal.Body>
                <div className='modal-close-button' onClick={handleClose}></div>
                <div className='login-modal-section'>
                    <div className='login-modal-title'>Login</div>
                    <div className='user-input-section'>
                        <AuthInput
                            value={username}
                            setValue={handleUsername}
                            icon={IMG_INPUT_USER}
                            label='Username or e-mail'
                            placeholder='Enter username or e-mail'
                            type='text'
                        />
                    </div>
                    <div className='pass-input-section'>
                        <AuthInput 
                            value={userpass}
                            setValue={handleUserpass}
                            icon={IMG_INPUT_PASS}
                            label='Password'
                            placeholder='Enter your password'
                            type='password'
                        />
                    </div>
                    <div className='login-btn-section'>
                        <div className='login-btns'>
                            <span>Login</span>

                        </div>
                    </div>

                    <div className='seperate-section'>
                        <div className='hr-sep-line'></div>
                        <div>
                            <span>or login with social</span>
                        </div>
                        <div className='hr-sep-line'></div>
                    </div>
                    <div className='social-login-btns-section'>
                        <div className='twitch-login-btn'>
                            <img src={IMG_LOGIN_TWITCH} />
                            <span>Login with Twitch</span>
                        </div>
                        <div className='stream-login-btn'>
                            <img src={IMG_LOGIN_STEAM} />
                            <span>Login with Steam</span>
                        </div>
                        <div className='battlenet-login-btn'>
                            <img src={IMG_LOGIN_BATTLE} />
                            <span>Login with Battlenet</span>
                        </div>
                        <div className='fortnite-login-btn'>
                            <img src={IMG_LOGIN_FORTNITE} />
                            <span>Login with Fortnite</span>
                        </div>
                    </div>
                    <div className='goto-signup-section'>
                        <span className='goto-signup-title'><span onClick={handleSignup}>Sign up</span>&nbsp;if you don't have an account yet</span>
                    </div>
                </div>
            </Modal.Body>
        </Fragment>
    )
}

Signin.propTypes = {
    signinModalSet: PropTypes.func.isRequired,
    signupModalSet: PropTypes.func.isRequired,
    showSigninModal: PropTypes.bool,
}

const mapStateToProps = state => ({
    showSigninModal: state.auth.showSigninModal,
})

export default connect(mapStateToProps, { signinModalSet, signupModalSet })(Signin)