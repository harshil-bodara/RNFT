import React, { useState, Fragment } from 'react'
import { Modal } from 'react-bootstrap'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signinModalSet, signupModalSet } from '../../actions/auth'

import AuthInput from '../inputs/authinput'
import AuthDate from '../inputs/authdate'
import AuthRegion from '../inputs/authregion'
import VerifyCodes from './verifycodes'
import MetamaskButton from '../inputs/metamask'
import WalletButton from '../inputs/wallet'

import IMG_INPUT_USER from '../../assets/images/icons/user-input.svg'
import IMG_INPUT_PASS from '../../assets/images/icons/pass-input.svg'
import IMG_INPUT_BIRTH from '../../assets/images/icons/birth-input.svg'

import IMG_LOGIN_STEAM from '../../assets/images/icons/fa-steam-ico.svg'
import IMG_LOGIN_BATTLE from '../../assets/images/icons/fa-battle-ico.svg'
import IMG_LOGIN_FORTNITE from '../../assets/images/icons/fa-fortnite-ico.svg'

const Signup = ({ signinModalSet, signupModalSet, showSignupModal}) => {
    const [username, setUsername] = useState('')
    const [userpass, setUserpass] = useState('')
    const [passconf, setPassconf] = useState('')
    const [usercode, setUsercode] = useState('')

    const [signupstep, setSignupstep] = useState(1)

    const [profilename, setProfilename] = useState('')
    const [userbirth, setUserbirth] = useState('')
    const [userregion, setUserregion] = useState('')

    const handleClose = () => {
        if(showSignupModal) {
            signupModalSet(false)
        }
    }

    const handleUsername = (value) => {
        setUsername(value)
    }

    const handleUserpass = (value) => {
        setUserpass(value)
    }

    const handlePassconf = (value) => {
        setPassconf(value)
    }

    const handleUsercode = (value) => {
        setUsercode(value)
    }

    const handleSignin = () => {
        signinModalSet(true)
        signupModalSet(false)
    }

    const handleSignup = () => {
        setSignupstep(signupstep + 1)
    }

    const handleVerify = () => {
        setSignupstep(signupstep + 1)
    }

    const handleProfile = () => {
        setSignupstep(signupstep + 1)
    }

    const handleFinish = () => {
    }

    const handleProfilename = (value) => {
        setProfilename(value)
    }

    const handleUserbirth = (value) => {
        setUserbirth(value)
    }

    const handleUserregion = (value) => {
        setUserregion(value)
    }

    return (
        <Fragment>
            <Modal.Body>
                <div className='modal-close-button' onClick={handleClose}></div>
                {
                    signupstep === 1 ?
                        <div className='login-modal-section'>
                            <div className='login-modal-title'>Sign up</div>
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
                            <div className='pass-input-section'>
                                <AuthInput 
                                    value={passconf}
                                    setValue={handlePassconf}
                                    icon={IMG_INPUT_PASS}
                                    label='Confirm the password'
                                    placeholder='Enter your password'
                                    type='password'
                                />
                            </div>
                            <div className='pass-input-section'>
                                <AuthInput 
                                    value={usercode}
                                    setValue={handleUsercode}
                                    label='Referal code'
                                    placeholder='Enter your code'
                                    type='text'
                                />
                            </div>
                            <div className='login-btn-section'>
                                <div className='login-btns' onClick={handleSignup}>
                                    <span>Sign up</span>
                                </div>
                            </div>
                            <div className='goto-signup-section'>
                                <span className='goto-signup-title'>Do you already have account?&nbsp;<span onClick={handleSignin}>Login</span></span>
                            </div>
                        </div>
                    :   signupstep === 2 ?
                            <div className='login-modal-section verify-section'>
                                <div className='login-modal-title'>Sign up</div>
                                <div className='login-btn-section'>
                                    <div className='verify-sentence'>
                                        We have sent a confirmation code to your email. <br />Enter a 6-digit code in the field below
                                    </div>
                                    <VerifyCodes />
                                    <div className='login-btns' onClick={handleVerify}>
                                        <span>Next step</span>
                                    </div>
                                </div>
                            </div>
                    :   signupstep === 3 ?
                            <div className='login-modal-section verify-section'>
                                <div className='login-modal-title'>Create Profile</div>
                                <div className='login-btn-section'>
                                    <div className='user-input-section'>
                                        <AuthInput
                                            value={profilename}
                                            setValue={handleProfilename}
                                            icon={IMG_INPUT_USER}
                                            label='Username'
                                            placeholder='Enter username'
                                            type='text'
                                        />
                                    </div>
                                    <div className='pass-input-section'>
                                        <AuthDate
                                            value={userbirth}
                                            setValue={handleUserbirth}
                                            icon={IMG_INPUT_BIRTH}
                                            label='Date birthday'
                                            placeholder='DD / MM / YYYY'
                                        />
                                    </div>
                                    <div className='pass-input-section'>
                                        <AuthRegion
                                            value={userregion}
                                            setValue={handleUserregion}
                                            label='Region'
                                            placeholder='Select your region'
                                        />
                                    </div>
                                    <div className='social-login-btns-section'>
                                        <div className='stream-login-btn'>
                                            <img src={IMG_LOGIN_STEAM} />
                                            <span>Connect Steam</span>
                                        </div>
                                        <div className='battlenet-login-btn'>
                                            <img src={IMG_LOGIN_BATTLE} />
                                            <span>Connect Battlenet</span>
                                        </div>
                                        <div className='fortnite-login-btn'>
                                            <img src={IMG_LOGIN_FORTNITE} />
                                            <span>Connect Fortnite</span>
                                        </div>
                                    </div>
                                    <div className='login-btns profile-section' onClick={handleProfile}>
                                        <span>Next step</span>
                                    </div>
                                </div>
                            </div>
                    :   signupstep === 4 ?
                            <div className='login-modal-section verify-section'>
                                <div className='login-modal-title'>Connect wallet</div>
                                <div className='login-btn-section'>
                                    <div className='verify-sentence'>
                                        Connect your crypto wallet to use all the features of the site!
                                    </div>
                                    <div className='wallet-connection-section'>
                                        <MetamaskButton />
                                    </div>
                                    <div className='login-btns profile-section' onClick={handleFinish}>
                                        <span>Finish registration</span>
                                    </div>
                                </div>
                            </div>
                    :
                        <Fragment></Fragment>
                }
                <div className='step-bars'>
                    <div className={signupstep >= 1 ? 'active' : ''}></div>
                    <div className={signupstep >= 2 ? 'active' : ''}></div>
                    <div className={signupstep >= 3 ? 'active' : ''}></div>
                    <div className={signupstep >= 4 ? 'active' : ''}></div>
                </div>
                
            </Modal.Body>
        </Fragment>
    )
}

Signup.propTypes = {
    signinModalSet: PropTypes.func.isRequired,
    signupModalSet: PropTypes.func.isRequired,
    showSignupModal: PropTypes.bool
}

const mapStateToProps = state => ({
    showSignupModal: state.auth.showSignupModal
})

export default connect(mapStateToProps, { signinModalSet, signupModalSet })(Signup)