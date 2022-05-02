import React, { Fragment } from 'react'

const ToggleInput = ({label}) => {
    return (
        <div className='custom-toggle'>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
            {
                label ? 
                    <span>{label}</span>
                :
                    <Fragment></Fragment>
            }
        </div>
    )
}

export default ToggleInput