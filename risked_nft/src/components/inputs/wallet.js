import React, {Fragment} from 'react'
import IMG_WALLET_ICO from '../../assets/images/icons/wallet-ico.svg'

const WalletButton = () => {
    return (
        <Fragment>
            <div className='connect-wallet-btn'>
                <img src={IMG_WALLET_ICO} alt='wallet-button' className='wallet-btn-ico' />
                <span className='metamask-text'>Walletconnect</span>
            </div>
        </Fragment>
    )
}

export default WalletButton