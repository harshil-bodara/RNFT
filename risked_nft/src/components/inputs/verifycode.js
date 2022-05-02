import React, {Fragment, useRef, useEffect} from 'react'

const VerifyCode = ({value, setValue, index, currentIndex}) => {
    const inputRef = useRef(null)

    const handleChange = (e) => {
        setValue(e.target.value, index)
    }

    useEffect(() => {
        if(currentIndex === index) {
            inputRef.current.focus()
            inputRef.current.select()
        }
    }, [currentIndex])

    return (
        <Fragment>
            <div className='verify-code'>
                <input value={value[index]} onChange={(e) => handleChange(e)} placeholder='X' maxLength={1} ref={inputRef} />
            </div>
        </Fragment>
    )
}

export default VerifyCode