import React, {Fragment} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AuthDate = ({value, setValue, icon, label, placeholder, classes}) => {
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
                    
                    <DatePicker dateFormat='dd/MM/yyyy' selected={value} onChange={(date) => setValue(date)}  placeholderText={placeholder} />
                </div>
            </div>
        </Fragment>
    )
}

export default AuthDate