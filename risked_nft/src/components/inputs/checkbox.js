import React, { Fragment } from 'react'

const RESOURCE_URL = 'resources/images/'

const CheckBox = ({title, avatar, state, setActive}) => {
    return (
        <Fragment>
            <div className='custom-check-box' onClick={setActive} >
                <input type="checkbox" checked={state} readOnly={true} />
                {
                    avatar && avatar !== '' ?
                        <img src={RESOURCE_URL + 'icons/' + avatar} alt='avatar' />
                    :
                        <Fragment></Fragment>
                }
                <span>{title}</span>
            </div>
        </Fragment>
    )
}

export default CheckBox