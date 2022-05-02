import React, { Fragment } from 'react'

const SocailInput = ({icon, value, setValue, placeholder, type}) => {
    const handleRemove = () => {
        setValue('')
    }

    return (
        <Fragment>
            <div className='edit-social-input'>
                <div className='input-section'>
                    {
                        icon ? 
                            <img src={icon} alt='input-icon' />
                            :
                            <Fragment></Fragment>
                    }
                    <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} className='custom-input' autoComplete='off' />
                </div>
                {
                    value && value !== '' ?
                        <div className='remove-section' onClick={handleRemove}></div>
                    :
                        <Fragment></Fragment>
                }
                
            </div>
        </Fragment>
    )
}

export default SocailInput