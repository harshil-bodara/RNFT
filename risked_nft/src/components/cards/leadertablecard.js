import React, {Fragment} from 'react'

const LeaderTaleCard = ({ranking, avatar, nickname, profitability, avg_bet, max_bet, earning}) => {
    return (
        <Fragment>
            <div className='leader-table-section'>
                <div className='table-col-ranking'>
                    <span>#{ranking ? ranking : ''}</span>
                </div>
                <div className='table-col-leader'>
                    <img src={avatar} alt={nickname} className='leader-avatar' />
                    <span className='leader-nickname-sub'>{nickname}</span>
                </div>
                <div className='table-col-detail'>
                    <div className='sub-col-detail'>
                        <div className='sub-col-title'>Profitability</div>
                        <div className='sub-col-value'>{profitability ? profitability : ''}&nbsp;%</div>
                    </div>
                    <div className='sub-col-detail'>
                        <div className='sub-col-title'>Average bet size</div>
                        <div className='sub-col-value'>$ARD &nbsp;{avg_bet ? avg_bet : ''}</div>
                    </div>
                    <div className='sub-col-detail'>
                        <div className='sub-col-title'>Max bet size</div>
                        <div className='sub-col-value'>${max_bet ? max_bet : ''}</div>
                    </div>
                </div>
                <div className='table-col-result'>
                    <div className='sub-col-detail'>
                        <div className='sub-col-title'>Earning</div>
                        <div className='sub-col-value earning-value'>${earning ? earning : ''}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LeaderTaleCard