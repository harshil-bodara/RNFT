import React, { Fragment, useEffect, useState } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { couponMenuSet } from '../../actions/coupon'

import CouponTap from './coupontap'
import CouponMessage from './couponmsg'
import ToggleInput from '../inputs/toggleinput'

const Coupon = ({couponMenuSet, showCouponMenu}) => {
    const [tapItems, setTapItems] = useState([])
    const [messageData, setMessageData] = useState([])
    const [ardAmount, setArdamount] = useState('')

    useEffect(() => {
        const _tapItems = [
            {
                title: 'My coupon',
                state: true
            },
            {
                title: 'My predictions',
                state: false
            }
        ]
        setTapItems(_tapItems)

        const _tempMsg = [
            {
                gameType: 'cs',
                winnername: 'SWAT',
                winneravatar: 'team13.png',
                gamedate: '06:00 PM, 23 FEB',
                amount: '1.7x'
            },
            {
                gameType: 'co',
                winnername: 'Cameron Williamson',
                winneravatar: 'team15.png',
                gamedate: '08:15 AM, 23 FEB',
                amount: '1.7x'
            },
            {
                gameType: 'co',
                winnername: 'Cameron Williamson',
                winneravatar: 'team15.png',
                gamedate: '08:15 AM, 23 FEB',
                amount: '1.7x'
            },
            {
                gameType: 'cs',
                winnername: 'SWAT',
                winneravatar: 'team13.png',
                gamedate: '06:00 PM, 23 FEB',
                amount: '1.7x'
            },
            {
                gameType: 'cs',
                winnername: 'SWAT',
                winneravatar: 'team13.png',
                gamedate: '06:00 PM, 23 FEB',
                amount: '1.7x'
            },
            {
                gameType: 'co',
                winnername: 'Cameron Williamson',
                winneravatar: 'team15.png',
                gamedate: '08:15 AM, 23 FEB',
                amount: '1.7x'
            },
            {
                gameType: 'co',
                winnername: 'Cameron Williamson',
                winneravatar: 'team15.png',
                gamedate: '08:15 AM, 23 FEB',
                amount: '1.7x'
            },
            {
                gameType: 'cs',
                winnername: 'SWAT',
                winneravatar: 'team13.png',
                gamedate: '06:00 PM, 23 FEB',
                amount: '1.7x'
            },
        ]
        setMessageData(_tempMsg)
    }, [])

    const handleClose = () => {
        if(showCouponMenu) {
            couponMenuSet(false)
        }
    }

    const handleTap = (acive) => {
        const _tapItems = []
        tapItems.map((item, index) => {
            item.state = (index === acive)
            _tapItems.push(item)
            setTapItems([..._tapItems])
        })
    }

    return (
        <Fragment>
            {
                showCouponMenu ? 
                    <div className='coupon-section'>
                        <div className='modal-close-button' onClick={handleClose}></div>
                        <div className='coupon-tap-section'>
                            {
                                tapItems && tapItems.length > 0 ?
                                    tapItems.map((item, index) => {
                                        return (
                                            <CouponTap key={index} title={item.title} state={item.state} setActive={() => handleTap(index)} />
                                        )
                                    })
                                :
                                    <Fragment></Fragment>
                            }
                        </div>
                        <div className='coupon-msg-sections'>
                            {
                                messageData && messageData.length > 0 ?
                                    messageData.map((item, index) => {
                                        return (
                                            <CouponMessage key={index} data={item}/>
                                        )
                                    })
                                :
                                    <Fragment></Fragment>
                            }
                        </div>
                        <div className='amount-input-section'>
                            <span>Amount</span>
                            <div className='ard-input'>
                                <input type='text' placeholder='Input amount' value={ardAmount} onChange={(e) => setArdamount(e.target.value)} className='custom-input' autoComplete='off' />
                                <span>$RNFT</span>
                            </div>
                            <div className='number-btns'>
                                <div className='number-input-btn'>1</div>
                                <div className='number-input-btn'>5</div>
                                <div className='number-input-btn'>10</div>
                                <div className='number-input-btn'>25</div>
                            </div>
                        </div>
                        <div className='coupon-hr-line'></div>
                        <div className='confirm-section'>
                            <span>Auto-confirm odds</span>
                            <ToggleInput />
                        </div>
                        <div className='confirm-section'>
                            <span>Overall coefficient</span>
                            <span>2.7x</span>
                        </div>
                        <div className='confirm-section'>
                            <div className='btn-confirm'>Confirm</div>
                        </div>
                        <div className='confirm-result-section'>
                            <div>Possible win: <span>$RNFT 124</span></div>
                        </div>
                    </div>
                :   
                    <Fragment></Fragment>
            }
        </Fragment>
    )
}

Coupon.propTypes = {
    couponMenuSet: PropTypes.func.isRequired,
    showCouponMenu: PropTypes.bool
}

const mapStateToProps = state => ({
    showCouponMenu: state.coupon.showCouponMenu
})

export default connect(mapStateToProps, { couponMenuSet })(Coupon)