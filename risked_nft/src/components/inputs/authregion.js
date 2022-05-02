import React, {Fragment} from 'react'
import { countries } from "country-flags-svg";
import Select from "react-select";

let options = [];

const a = countries.map((item) => {
  const temp = {
    label: (
      <div>
        <img width="30" height="20" src={item.flag} /> {item.name}
      </div>
    ),
    value: item.name
  };
  options.push(temp);
});

const AuthRegion = ({value, setValue, label, placeholder}) => {
    return (
        <Fragment>
            <div className='auth-input-section auth-region-section'>
                <span className='input-label'>
                    {label ? label : ''}
                </span>
                <Select options={options} />
            </div>
        </Fragment>
    )
}

export default AuthRegion