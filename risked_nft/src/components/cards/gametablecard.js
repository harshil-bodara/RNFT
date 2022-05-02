import React, { Fragment, useState } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { couponMenuSet } from '../../actions/coupon'

import WinnerAlert from '../layout/winneralert'
import LoseAlert from '../layout/losealert'

import IMG_WATCH_ICO from '../../assets/images/icons/watch.svg'
import IMG_PLAY_ICO from '../../assets/images/icons/play.svg'

const RESOURCE_URL = 'resources/images/'

const GameTableCard = ({data, couponMenuSet, showCouponMenu}) => {
    const [winnerShow, setWinnerShow] = useState(false)
    const [loseShow, setLoseShow] = useState(false)

    const handleInvite = () => {
        if(!showCouponMenu) {
            couponMenuSet(true)
        }
    }

    const handleWinnerClose = () => {
        setWinnerShow(false)
    }

    const handleLoseClose = () => {
        setLoseShow(false)
    }

    return (
        <Fragment>
            <div className='game-table-card-section'>
                <div className='game-data-detail-section'>
                    <div className='game-data-logo'>
                        {
                            data.gameName === 'CS' ? 
                                <img src={RESOURCE_URL + 'icons/cs-icon.svg'} />
                            : data.gameName === 'FT' ?
                                <img src={RESOURCE_URL + 'icons/fgame-ico.svg'} />
                            :
                                <img src={RESOURCE_URL + 'icons/dgame-ico.svg'} />
                        }
                    </div>
                    <div className='player-section' onClick={() => setWinnerShow(true)}>
                        <img src={RESOURCE_URL + 'games/' + data.gamePlayerAvatarA[0]} alt='game-player' />
                        <span>{data.gamePlayerNamesA ? data.gamePlayerNamesA[0] : ''}</span>
                    </div>
                    <div className='vs-section'></div>
                    <div className='player-section' onClick={() => setLoseShow(true)}>
                        <img src={RESOURCE_URL + 'games/' + data.gamePlayerAvatarB[0]} alt='game-player' />
                        <span>{data.gamePlayerNamesB ? data.gamePlayerNamesB[0] : ''}</span>
                    </div>
                </div>
                <div className='game-data-action-section'>
                    <div className='game-data-description'>
                        <div className='game-description'>
                            <span>{data.gameType}</span>
                            <span>Type</span>
                        </div>
                        <div className='game-description'>
                            <span><img src={IMG_WATCH_ICO} />{data.timesLeft}</span>
                            <span>Time left</span>
                        </div>
                    </div>

                    <div className='player-invite-section'>
                        <div className='invite-action' onClick={handleInvite}>
                            <span>{'2.1x'}</span>
                        </div>
                        <div className='invite-action' onClick={handleInvite}>
                            <span>{'1.4x'}</span>
                        </div>
                    </div>
                    
                    <div className='stream-action-section'>
                        {
                            data.isLive ? 
                                <Fragment>
                                <div className='stream-action'>
                                    <img src={IMG_PLAY_ICO} alt='play-ico' />
                                    <span>View stream</span>
                                </div>
                                </Fragment>
                            :
                                <Fragment></Fragment>
                        }
                    </div>
                        
                </div>
            </div>

            <div className='mobile-game-table-card-section'>
                <div className='table-header-logo'>
                    <div className='game-data-logo'>
                        {
                            data.gameName === 'CS' ? 
                                <img src={RESOURCE_URL + 'icons/cs-icon.svg'} />
                            : data.gameName === 'FT' ?
                                <img src={RESOURCE_URL + 'icons/fgame-ico.svg'} />
                            :
                                <img src={RESOURCE_URL + 'icons/dgame-ico.svg'} />
                        }
                    </div>
                    <div className='game-data-description'>
                        <div className='game-description'>
                            <span>{data.gameType}</span>
                            <span>Type</span>
                        </div>
                        <div className='game-description'>
                            <span><img src={IMG_WATCH_ICO} />{data.timesLeft}</span>
                            <span>Time left</span>
                        </div>
                    </div>
                </div>
                <div className='coupon-hr-line'></div>
                <div className='mobile-player-detail'>
                    <div className='player-section' onClick={() => setWinnerShow(true)}>
                        <img src={RESOURCE_URL + 'games/' + data.gamePlayerAvatarA[0]} alt='game-player' />
                        <span>{data.gamePlayerNamesA ? data.gamePlayerNamesA[0] : ''}</span>
                    </div>
                    <div className='vs-section'></div>
                    <div className='player-section' onClick={() => setLoseShow(true)}>
                        <img src={RESOURCE_URL + 'games/' + data.gamePlayerAvatarB[0]} alt='game-player' />
                        <span>{data.gamePlayerNamesB ? data.gamePlayerNamesB[0] : ''}</span>
                    </div>
                </div>
                <div className='player-invite-section'>
                    <div className='invite-action' onClick={handleInvite}>
                        <span>{'2.1x'}</span>
                    </div>
                    <div className='invite-action' onClick={handleInvite}>
                        <span>{'1.4x'}</span>
                    </div>
                </div>
                <div className='stream-action-section'>
                        {
                            data.isLive ? 
                                <Fragment>
                                <div className='stream-action'>
                                    <img src={IMG_PLAY_ICO} alt='play-ico' />
                                    <span>View stream</span>
                                </div>
                                </Fragment>
                            :
                                <Fragment></Fragment>
                        }
                    </div>
            </div>

            <WinnerAlert modalShow={winnerShow} handleClose={handleWinnerClose} />
            <LoseAlert modalShow={loseShow} handleClose={handleLoseClose} />
        </Fragment>
    )
}

GameTableCard.propTypes = {
    data: PropTypes.object,
    couponMenuSet: PropTypes.func.isRequired,
    showCouponMenu: PropTypes.bool
}

const mapStateToProps = state => ({
    showCouponMenu: state.coupon.showCouponMenu
})

export default connect(mapStateToProps, { couponMenuSet })(GameTableCard)