import React, {Fragment, useState} from 'react'

import MenuItem from '../items/menuitem'

import IMG_MY_AVATAR from '../../assets/images/games/my-avatar.png'
import IMG_METAMASK from '../../assets/images/icons/metamask-ico-sm.svg'
import IMG_AWARD from '../../assets/images/icons/award.svg'

import IMG_MATHES from '../../assets/images/icons/matches.svg'

import IMG_CS_ICO from '../../assets/images/icons/cs-icon.svg'
import IMG_FT_ICO from '../../assets/images/icons/fgame-ico.svg'
import IMG_CO_ICO from '../../assets/images/icons/dgame-ico.svg'
import IMG_SP_ICO from '../../assets/images/icons/coin-ico.svg'
import IMG_ML_ICO from '../../assets/images/icons/mylives-ico.svg'

import IMG_STAKING_ICO from '../../assets/images/icons/mobile-staking-ico.svg'
import IMG_REFERAL_ICO from '../../assets/images/icons/mobile-referal-ico.svg'
import IMG_LEADER_ICO from '../../assets/images/icons/mobile-leader-ico.svg'
import IMG_NEWS_ICO from '../../assets/images/icons/mobile-news-ico.svg'
import IMG_STEAMING_ICO from '../../assets/images/icons/streaming-ico.svg'

const Sidebar = () => {
	return (
		<Fragment>
			<div className='sidebar-section'>
				<div className='myinfo-section'>
					<div className='my-avatar'>
						<img src={IMG_MY_AVATAR} alt='my-avatar' />
					</div>
					<div className='my-info'>
						<span className='my-info-name'>SuperJetPack</span>
						<span className='my-info-balance'><img src={IMG_METAMASK} alt='metamask' />3.54&nbsp;BNB</span>
					</div>
					<div className='my-archieve'>
						<div className='archieve'>
							<span>$ARD 2,023</span>
							<span>Total earnings</span>
						</div>
						<div className='match-card-line'></div>
						<div className='archieve'>
							<span><img src={IMG_AWARD} alt='award-img' />32</span>
							<span>Win matches</span>
						</div>
					</div>
				</div>

				<div className='matches-section'>
					<div className='match-title'>
						<div className='sidebar-menu-item'>
							<div>
								<img src={IMG_MATHES} alt='leader-ico' className='mobile-menu-ico' />
								<span>Matches</span>
							</div>
						</div>
					</div>
					<div className='sidebar-game-items'>
						<MenuItem ico={IMG_CS_ICO} state={0} title={'CS: GO'} counts={0} />
						<MenuItem ico={IMG_FT_ICO} state={0} title={'Fortnite'} counts={0} />
						<MenuItem ico={IMG_CO_ICO} state={0} title={'Call of Duty'} counts={0} />
						<MenuItem ico={IMG_SP_ICO} state={0} title={'Speculators'} counts={0} />
						<MenuItem ico={IMG_ML_ICO} state={0} title={'My lives'} counts={2} />
					</div>

					<div className='sidebar-hr'></div>

					<div className='sidebar-menu-items'>
						<MenuItem ico={IMG_STAKING_ICO} state={0} title={'Staking'} counts={0} />
						<MenuItem ico={IMG_STEAMING_ICO} state={0} title={'Streaming'} counts={3} />
						<MenuItem ico={IMG_REFERAL_ICO} state={0} title={'Referal'} counts={0} />
						<MenuItem ico={IMG_LEADER_ICO} state={0} title={'Leaderboard'} counts={0} />
						<MenuItem ico={IMG_NEWS_ICO} state={0} title={'News'} counts={20} />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Sidebar