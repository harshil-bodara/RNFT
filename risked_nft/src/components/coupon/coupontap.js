import React, { Fragment } from 'react'

const CouponTap = ({title, state, setActive}) => {
    return (
        <Fragment>
            <div className={state ? 'coupon-tap active-tap' : 'coupon-tap'} onClick={setActive}>
                <span>{title}</span>
            </div>
        </Fragment>
    )
}

export default CouponTap