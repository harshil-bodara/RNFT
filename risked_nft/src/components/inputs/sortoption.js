import React, {Fragment, useEffect, useState} from 'react'

import IMG_DROPDOWN_ICO from '../../assets/images/icons/dropdown-ico.svg'
import IMG_ASC_ICO from '../../assets/images/icons/option_asc_ico.svg'
import IMG_DEC_ICO from '../../assets/images/icons/option_dec_ico.svg'

const SortOption = ({options}) => {
    const [selected, setSelected] = useState(false)
    const [selectedTitle, setSelectedTitle] = useState('')
    const [sortType, setSorttype] = useState(false)

    const handleSelectOption = (option, type) => {
        setSelected(false)
        setSelectedTitle(option)
        if(type === 'asc') {
            setSorttype(false)
        }
        else {
            setSorttype(true)
        }
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
            <div className='custom-option-section sort-option' onClick={handleShowMenu}>
                <div>
                    <img src={!sortType ? IMG_ASC_ICO : IMG_DEC_ICO} alt='drop-down-ico' className='dropdown-ico' />
                    <span>{selectedTitle}</span>
                </div>
                
                <img src={IMG_DROPDOWN_ICO} alt='drop-down-ico' className='dropdown-ico' />
            </div>
            <div className={selected ? 'custom-options-section' : 'hidden-item'}>
                {
                    options && options.length > 0 ?
                        options.map((option, id) => {
                            return (
                                <Fragment key={id}>
                                    <div className='custom-selector sort-option' onClick={() => handleSelectOption(option, 'asc')}>
                                        <img src={IMG_ASC_ICO} alt='drop-down-ico' className='dropdown-ico' /><span>{option}</span>
                                    </div>
                                    
                                    <div className='custom-selector sort-option' onClick={() => handleSelectOption(option, 'dec')}>
                                        <img src={IMG_DEC_ICO} alt='drop-down-ico' className='dropdown-ico' /><span>{option}</span>
                                    </div>
                                </Fragment>
                                
                            )
                        })
                    :
                        <Fragment></Fragment>
                }
            </div>
        </div>
    )
}

export default SortOption