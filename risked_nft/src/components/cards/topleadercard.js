import React, {Fragment} from 'react'

import IMG_GOLD_CROWN from '../../assets/images/leaders/gold-crown.svg'
import IMG_SILVER_CROWN from '../../assets/images/leaders/silver-crown.svg'
import IMG_BRONZE_CROWN from '../../assets/images/leaders/bronze-crown.svg'

const TopLeaderCard = ({ranking, avatar, nickname, ardamount}) => {
    return (
        <Fragment>
            <div className='top-leader-section'>
                <div className='top-leader-avatar'>
                    {
                        ranking === '1' ?
                            <Fragment>
                                <img src={IMG_GOLD_CROWN} className='top-crown-img' />
                            </Fragment>
                        : ranking === '2' ?
                            <Fragment>
                                <img src={IMG_SILVER_CROWN} className='top-crown-img' />
                            </Fragment>
                        :
                            <Fragment>
                                <img src={IMG_BRONZE_CROWN} className='top-crown-img' />
                            </Fragment>
                    }
                    <img src={avatar} alt='top-leader' />
                </div>

                <div className='leader-detail'>
                    <div className='row leader-nickname'>{nickname ? nickname : ''}</div>
                    <div className='row leader-ard'>$RNFT&nbsp;{ardamount ? ardamount : ''}</div>
                    <div className='row leader-earning'>Earning</div>
                </div>
            </div>
        </Fragment>
    )
}

export default TopLeaderCard