import React, {Fragment} from 'react'
import IMG_FLAG_EN from '../../assets/images/flags/flag-en.svg'
import IMG_FLAG_RU from '../../assets/images/flags/flag-ru.svg'

const GamerCard = ({country, gamer_name, gamer_intro, youtubu_count, twitch_count, avatar, game_ico1, game_ico2}) => {
    return (
        <Fragment>
            <div className='gamer-card-section'>
                <div className='game-icon-area'>
                    {
                        game_ico1 ? 
                            <img src={game_ico1} alt='game-icon-01' className='game-icon-sets01' />
                            :
                            <Fragment></Fragment>
                    }
                    {
                        game_ico2 ? 
                            <img src={game_ico2} alt='game-icon-02' className='game-icon-sets02'/>
                            :
                            <Fragment></Fragment>
                    }
                </div>
                <div className='gamer_section'>
                    {
                        avatar ? 
                            <img src={avatar} alt='gamer-avatar' />
                            :
                            <Fragment></Fragment>
                    }
                </div>
                <div className='gamer-detail'>
                    <div className='gamer-name-section'>
                        {
                            country === 'ru' ?
                                <img src={IMG_FLAG_RU} alt='russia' className='flag-en-img' />
                                :
                                <img src={IMG_FLAG_EN} alt='england' className='flag-en-img' />
                        }
                        <span className='gamer-name-value'>{gamer_name ? gamer_name : ''}</span>
                    </div>
                </div>
                <div className='gamer-intro'>
                    <span className='gamer-intro-value'>{gamer_intro ? gamer_intro : ''}</span>
                </div>
                <div className='gamer-socials'>
                    <div className='youtubu-panel'>
                        <div className='visitors-count'>{youtubu_count ? youtubu_count : ''}</div>
                        <div className='youtubu-name'>Youtube</div>
                    </div>
                    <div className='match-card-line'></div>
                    <div className='twitch-panel'>
                        <div className='visitors-count'>{twitch_count ? twitch_count : ''}</div>
                        <div className='youtubu-name'>Twitch</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GamerCard