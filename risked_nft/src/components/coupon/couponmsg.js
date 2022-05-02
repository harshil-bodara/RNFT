import React, { Fragment } from 'react'

const RESOURCE_URL = 'resources/images/'

const CouponMessage = ({data}) => {
    return (
        <Fragment>
            <div className='coupon-msg'>
                <div className='msg-row'>
                    <div className='msg-preheader'>
                        {
                            data.gameType === 'cs' ? 
                                <img src={RESOURCE_URL + 'icons/cs-icon.svg'} alt='icon' />
                            : data.gameType === 'ft' ?
                                <img src={RESOURCE_URL + 'icons/fgame-ico.svg'} alt='icon' />
                            :
                                <img src={RESOURCE_URL + 'icons/dgame-ico.svg'} alt='icon' />
                        }
                        <span>{data.gamedate}</span>
                    </div>
                    <div className='msg-close'></div>
                </div>
                <div className='msg-row'>
                    <div className='msg-winner'>
                        <span>Winner: </span>
                        <img src={RESOURCE_URL + 'teams/' + data.winneravatar} alt='icon'></img>
                        <span>{data.winnername}</span>
                    </div>
                    <div className='win-amount'>
                        <span>{data.amount}</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CouponMessage