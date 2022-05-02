import React, {Fragment} from 'react'
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { signinModalSet, mobileMenuSet } from '../../actions/auth'

import IMG_LOGO from '../../assets/images/logo.png'
import IMG_FLAG_EN from '../../assets/images/flags/flag-en.svg'
import IMG_TOKEN from '../../assets/images/tokens/arcader-token-sm.png'
import IMG_TG_ICO from '../../assets/images/icons/telegram-ico.svg'
import IMG_YT_ICO from '../../assets/images/icons/youtube-ico.svg'
import IMG_MG_ICO from '../../assets/images/icons/msg-ico.svg'
import IMG_IG_ICO from '../../assets/images/icons/instagram-ico.svg'

import IMG_MENU_ICO from '../../assets/images/icons/mobile-menu-ico.svg'
import IMG_METAMASK from '../../assets/images/icons/metamask-ico-sm.svg'
import IMG_MY_TEAM from '../../assets/images/leaders/leader07-min.png'

const MainHeader = ({ signinModalSet, mobileMenuSet, showSigninModal, showMobileMenu }) => {
    const handleLoginModal = () => {
        if(!showSigninModal) {
            signinModalSet(true)
        }
    }

    const handleMobileMenu =() => {
        if(!showMobileMenu) {
            mobileMenuSet(true)
            document.body.classList.add('no-scroll')
        }
    }

    return (
        <Fragment>
            <div className='header main-header'>
                <div className='mobile-menu' onClick={handleMobileMenu}>
                    <img src={IMG_MENU_ICO} alt='mobile-icon' className='mobile-menu-ico' />
                </div>

                <div className='header-section main-header-section'>

                    <div className='logo-section'>
                        <img src={IMG_LOGO} alt='Arcader-Logo' className='arcader-logo-img main-login-custom' />

                        <div className='lang-flag-section main-flag-custom'>
                            <img src={IMG_FLAG_EN} alt='en-flag' className='flag-en-img' />
                            <span className='lang-name-span'>EN</span>
                        </div>

                        <div className='mobile-my-info'>
                            <img src={IMG_METAMASK} alt='metamask' />
                            <span>3.54 BNB</span>
                            <img src={IMG_MY_TEAM} alt='my-team' />
                        </div>

                        <div className='token-price-section'>
                            <span className='token-price-span'>Token price</span>
                            <img src={IMG_TOKEN} alt='Small-Token' className='small-token-img' />
                            <span className='token-value-span'>$ 1.23</span>
                        </div>

                    </div>

                    <div className='links-section'>
                        <div className='social-icons'>
                            <a href='#'><img src={IMG_TG_ICO} className='social-media-btns' alt='Telegram' /></a>
                            <a href='#'><img src={IMG_YT_ICO} className='social-media-btns' alt='Youtubu' /></a>
                            <a href='#'><img src={IMG_MG_ICO} className='social-media-btns' alt='Message' /></a>
                            <a href='#'><img src={IMG_IG_ICO} className='social-media-btns' alt='Instagram' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

MainHeader.propTypes = {
    signinModalSet: PropTypes.func.isRequired,
    mobileMenuSet: PropTypes.func.isRequired,
    showSigninModal: PropTypes.bool,
    showMobileMenu: PropTypes.bool
}

const mapStateToProps = state => ({
    showSigninModal: state.auth.showSigninModal,
    showMobileMenu: state.auth.showMobileMenu
})

export default connect(mapStateToProps, { signinModalSet, mobileMenuSet })(MainHeader)