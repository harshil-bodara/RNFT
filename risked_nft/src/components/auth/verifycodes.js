import React, {Fragment, useState} from 'react'
import VerifyCode from '../inputs/verifycode'

const VerifyCodes = () => {
    const [verifycode, setVerifycode] = useState(['', '', '', '', '', ''])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleVerifyCode = (value, index) => {
        let temp = verifycode
        if(value === '') {
            if(currentIndex > 0)
                setCurrentIndex(index - 1)
        }
        temp[index] = value
        if(value !== '')
            setCurrentIndex(index + 1)

        setVerifycode({...verifycode, temp})
    }

    return (
        <Fragment>
            <div className='verify-codes'>
                <VerifyCode 
                    value={verifycode}
                    setValue={handleVerifyCode}
                    index={0}
                    currentIndex={currentIndex}
                />
                <VerifyCode 
                    value={verifycode}
                    setValue={handleVerifyCode}
                    index={1}
                    currentIndex={currentIndex}
                />
                <VerifyCode 
                    value={verifycode}
                    setValue={handleVerifyCode}
                    index={2}
                    currentIndex={currentIndex}
                />
                <VerifyCode 
                    value={verifycode}
                    setValue={handleVerifyCode}
                    index={3}
                    currentIndex={currentIndex}
                />
                <VerifyCode 
                    value={verifycode}
                    setValue={handleVerifyCode}
                    index={4}
                    currentIndex={currentIndex}
                />
                <VerifyCode 
                    value={verifycode}
                    setValue={handleVerifyCode}
                    index={5}
                    currentIndex={currentIndex}
                />
            </div>
        </Fragment>
    )
}

export default VerifyCodes