import React, {Fragment} from 'react'
import IMG_METAMASK_ICO from '../../assets/images/icons/metamask-ico.svg'

const MetamaskButton = () => {
    return (
        <Fragment>
            <div className='connect-wallet-btn'>
                <img src={IMG_METAMASK_ICO} alt='metamask-button' className='metamask-btn-ico' />
                <span className='metamask-text'>Metamask</span>
            </div>
        </Fragment>
    )
}

export default MetamaskButton