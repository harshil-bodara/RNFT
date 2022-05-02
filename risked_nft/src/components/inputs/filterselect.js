import React, {Fragment, useEffect, useState} from 'react'

import IMG_DROPDOWN_ICO from '../../assets/images/icons/dropdown-ico.svg'

const SelectOption = ({options}) => {
    const [selected, setSelected] = useState(false)
    const [selectedTitle, setSelectedTitle] = useState('')

    const handleSelectOption = (option) => {
        setSelected(false)
        setSelectedTitle(option)
    }

    const handleShowMenu = () => {
        setSelected(!selected)
    }

    useEffect(() => {
        if(options && options.length > 0) {
            setSelectedTitle(options[0])
        }
    }, [options])

    return (
        <div className='custom-options-sections'>
            <div className='custom-option-section' onClick={handleShowMenu}>
                <span>{selectedTitle}</span>
                <img src={IMG_DROPDOWN_ICO} alt='drop-down-ico' className='dropdown-ico' />
            </div>
            <div className={selected ? 'custom-options-section' : 'hidden-item'}>
                {
                    options && options.length > 0 ?
                        options.map((option, id) => {
                            return (
                                <div key={id} className='custom-selector' onClick={() => handleSelectOption(option)}>
                                    <span>{option}</span>
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

export default SelectOption