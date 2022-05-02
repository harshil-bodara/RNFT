import React, {Fragment, useState} from 'react'

const FilterTap = ({filtername, filtericon}) => {
    const [onHover, setHover] = useState(false)

    return (
        <Fragment>
            <div className='filter-tap-item' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                {
                    filtericon ? 
                        <img src={filtericon} alt={filtername} />
                    :
                        <Fragment></Fragment>
                }
                {filtername}
            </div>
        </Fragment>
    )
}

export default FilterTap