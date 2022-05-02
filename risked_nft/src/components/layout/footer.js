import React, {Fragment} from 'react'

const Footer = () => {
    return (
        <Fragment>
            <div className='footer-section'>
                <div className='copy-right'>© 2022 Arcader. All rights reserved.</div>
                <div className='services'>
                    <span className='services-text'>Terms of Service</span>
                    <span className='services-text'>Privacy Policy</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer