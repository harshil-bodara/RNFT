import React, {Fragment} from 'react'

const AuthInput = ({value, setValue, icon, label, placeholder, type, classes}) => {
    return (
        <Fragment>
            <div className='auth-input-section'>
                <span className='input-label'>
                    {label ? label : ''}
                </span>
                <div className={'custom-input-section ' + classes}>
                    {
                        icon ? 
                            <img src={icon} alt='input-icon' />
                            :
                            <Fragment></Fragment>
                    }
                    
                    <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} className='custom-input' autoComplete='off' />
                </div>
            </div>
        </Fragment>
    )
}

export default AuthInput