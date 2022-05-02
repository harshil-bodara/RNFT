import React, {Fragment, useState} from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { mobileMenuSet } from '../../actions/auth'

import IMG_STAKING_ICO from '../../assets/images/icons/mobile-staking-ico.svg'
import IMG_REFERAL_ICO from '../../assets/images/icons/mobile-referal-ico.svg'
import IMG_LEADER_ICO from '../../assets/images/icons/mobile-leader-ico.svg'
import IMG_NEWS_ICO from '../../assets/images/icons/mobile-news-ico.svg'

import IMG_TOKEN from '../../assets/images/tokens/arcader-token-sm.png'
import IMG_FLAG_EN from '../../assets/images/flags/flag-en.svg'

import IMG_TG_ICO from '../../assets/images/icons/telegram-ico.svg'
import IMG_YT_ICO from '../../assets/images/icons/youtube-ico.svg'
import IMG_MG_ICO from '../../assets/images/icons/msg-ico.svg'
import IMG_IG_ICO from '../../assets/images/icons/instagram-ico.svg'

const MainMenu = ({mobileMenuSet, showMobileMenu}) => {
    const [newsCount, setnewsCount] = useState(20)

    const handleClose = () => {
        if(showMobileMenu) {
            mobileMenuSet(false)
            document.body.classList.remove('no-scroll')
        }
    }

    return (
        <Fragment>
            {
                showMobileMenu ?
                    <Fragment>
                        <div className='mobile-menu-section'>
                            <div className='top-menu-section'>
                                <div className='modal-close-button' onClick={handleClose}></div>
                                <div className='mobile-logo-img'></div>
                                <div className='mobile-menu-items'>
                                    <div className='mobile-menu-item'>
                                        <div>
                                            <img src={IMG_STAKING_ICO} alt='staking-ico' className='mobile-menu-ico' />
                                            <span>Staking</span>
                                        </div>
                                    </div>
                                    <div className='mobile-menu-item'>
                                        <div>
                                            <img src={IMG_REFERAL_ICO} alt='referal-ico' className='mobile-menu-ico' />
                                            <span>Referal</span>
                                        </div>
                                    </div>
                                    <div className='mobile-menu-item'>
                                        <div>
                                            <img src={IMG_LEADER_ICO} alt='leader-ico' className='mobile-menu-ico' />
                                            <span>Leaderboard</span>
                                        </div>
                                    </div>
                                    <div className='mobile-menu-item'>
                                        <div>
                                            <img src={IMG_NEWS_ICO} alt='news-ico' className='mobile-menu-ico' />
                                            <span>News</span>
                                        </div>
                                        {
                                            newsCount > 0 ? <div className='news-count-section'>{newsCount}</div> : <Fragment></Fragment>
                                        }
                                    </div>
                                </div>
                                <div className='mobile-menu-hr-line'></div>
                                <div className='mobile-subdetail'>
                                    <div className='mobile-menu-token'>
                                        <span className='token-price-span'>Token price</span>
                                        <img src={IMG_TOKEN} alt='Small-Token' className='small-token-img' />
                                        <span className='token-value-span'>$ 1.23</span>
                                    </div>
                                    <div className='mobile-menu-bottom'>
                                        <div className='lang-flag-section lang-mobile'>
                                            <img src={IMG_FLAG_EN} alt='en-flag' className='flag-en-img' />
                                            <span className='lang-name-span'>EN</span>
                                        </div>
                                        <div>
                                            <a href='#'><img src={IMG_TG_ICO} className='social-media-btns' alt='Telegram' /></a>
                                            <a href='#'><img src={IMG_YT_ICO} className='social-media-btns' alt='Youtubu' /></a>
                                            <a href='#'><img src={IMG_MG_ICO} className='social-media-btns' alt='Message' /></a>
                                            <a href='#'><img src={IMG_IG_ICO} className='social-media-btns' alt='Instagram' /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                :
                    <Fragment></Fragment>
            }
        </Fragment>
    )
}

MainMenu.propTypes = {
    mobileMenuSet: PropTypes.func.isRequired,
    showMobileMenu: PropTypes.bool
}

const mapStateToProps = state => ({
    showMobileMenu: state.auth.showMobileMenu
})

export default connect(mapStateToProps, {mobileMenuSet})(MainMenu)