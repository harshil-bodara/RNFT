import React, { Fragment } from 'react'
import GameTableCard from '../cards/gametablecard'

const GamesTable = ({title, data}) => {
    return (
        <div className='game-table-section'>
            <div className='game-table-header'>
                <span>{title}</span>
            </div>
            <div className='game-table-body'>
                {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <div key={index} className='game-table-data'>
                                    <GameTableCard data={item} />
                                </div>
                            )
                        })
                        :
                        <Fragment></Fragment>
                }
            </div>
        </div>
    )
}

export default GamesTable