import React from 'react';
import './styles.scss';

const Input = (props) => {
    const {handleChange, name} = props;
    return (
        <input onChange={handleChange} value={name} className="input" type="text" placeholder="Enter tracker name" />
    )
};

export default Input;